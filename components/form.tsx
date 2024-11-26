import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";
import { getFunction } from "@/app/utils/function";
import { StakeABI } from "@/app/common/abi";
import { useEffect, useState } from "react";
import { CallbackReturnType, write } from "@/app/utils/contract";
import { globalConfig } from "@/app/common";
import { useAccount, useProvider } from "@starknet-react/core";
import { Label } from "./ui/label";
import { cairo, CallData, Contract } from "starknet";
import { parseUnits } from "viem";
import toast from "react-hot-toast";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";

export function StakeForm() {
  const [fnMsg, setFnMsg] = useState<any>(null);
  const [result, setResult] = useState<any>("");
  const { account, address } = useAccount();
  const [inputValues, setInputValues] = useState<any>({
    stakeAmount: "",
    rewardAddress: account?.address,
    operationalAddress: account?.address,
    commission: 0,
    poolEnabled: false,
  });
  const {provider} = useProvider();

  useEffect(() => {
    console.log(address, "account");
    if (address) {
      console.log(address, "account");
      setInputValues({
        ...inputValues,
        rewardAddress: address,
        operationalAddress: address,
      });
    }
  }, [address]);

  const handleChange = (e: any) => {
    console.log("Input changed:", e.target.name, e.target.value);
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDecimals = (inputName: string) => {
    const currentValue = inputValues[inputName] || "";

    const valueAsBigInt = BigInt(Math.floor(parseFloat(currentValue) * 1e18));
    const newValue = valueAsBigInt.toString();
    setInputValues({
      ...inputValues,
      [inputName]: newValue,
    });
  };


  const handleStake = async () => {
    const contract = new Contract(StakeABI, globalConfig.StakingContract, provider);

    if(!account) {
      toast.error('Please connect wallet first!');
      return;
    }
    contract.connect(account);

    const { stakeAmount, rewardAddress, operationalAddress, commission, poolEnabled } = inputValues;
    const amount = parseUnits(stakeAmount, 18);
    const multiCall = await account.execute([
      // Calling the first contract
      {
        contractAddress: globalConfig.StrkAddress,
        entrypoint: 'approve',
        // approve 1 wei for bridge
        calldata: CallData.compile({
          spender: globalConfig.StakingContract,
          amount: cairo.uint256(amount),
        }),
      },
      {
        contractAddress: globalConfig.StakingContract,
        entrypoint: 'stake',
        calldata: CallData.compile({
          reward_address: rewardAddress,
          operational_address: operationalAddress,
          amount: amount,
          pool_enabled: poolEnabled ? 1 : 0,
          commission: commission * 100,
        }),
      },
    ]);
    // const call = contract.populate("stake", [amout, rewardAddress, operationalAddress, 0, 0]);
    // const res = await contract.stake(call.calldata);
    // console.log(res, "res");
    const result = await provider.waitForTransaction(multiCall.transaction_hash);
    console.log(result);
    toast.success('Stake success!');
    return result;
  };

  console.log(inputValues, "inputValues");
  return (
    <div className="font-bold p-4 border rounded-lg container mx-auto mt-10">
      <div className="mb-2 text-2xl text-center">STRK Staking</div>
      <div className="felx flex-col space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Label>Stake Amount</Label>
            </div>
            <div className="relative">
              <Input
                type="number"
                required
                placeholder="Stake Amount"
                name="stakeAmount"
                value={inputValues["stakeAmount"] || ""}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Label>Reward Address</Label>
            </div>
            <div className="relative">
              <Input
                type="text"
                required
                placeholder="Reward Address"
                name="rewardAddress"
                value={inputValues["rewardAddress"] || ""}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Label>Operational Address</Label>
            </div>
            <div className="relative">
              <Input
                type="text"
                required
                placeholder="Operational Address"
                name="operationalAddress"
                value={inputValues["operationalAddress"] || ""}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Label>Enable Pool</Label>
            </div>
            <div className="relative">
              <Switch
                checked={inputValues["poolEnabled"] || false}
                onCheckedChange={(checked) => handleChange({ target: { name: "poolEnabled", value: checked } })}
              
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Label>Commission({inputValues["commission"] || 0}%)</Label>
            </div>
            <div className="relative">
            <Slider value={[inputValues["commission"] || 0]} max={100} step={1} onValueChange={(value) => 
              {
              handleChange({ target: { name: "commission", value: value[0] } })
              }
            } />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <Button onClick={() => handleStake()}>Stake</Button>
        </div>
    </div>
  );
}
