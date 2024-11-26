export const StakeABI = [
  {
    name: "_Identity",
    type: "impl",
    interface_name: "contracts_commons::interfaces::identity::Identity",
  },
  {
    name: "contracts_commons::interfaces::identity::Identity",
    type: "interface",
    items: [
      {
        name: "identify",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "version",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    name: "StakingImpl",
    type: "impl",
    interface_name: "contracts::staking::interface::IStaking",
  },
  {
    name: "core::bool",
    type: "enum",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    name: "contracts_commons::types::time::TimeStamp",
    type: "struct",
    members: [
      {
        name: "seconds",
        type: "core::integer::u64",
      },
    ],
  },
  {
    name: "core::option::Option::<contracts_commons::types::time::TimeStamp>",
    type: "enum",
    variants: [
      {
        name: "Some",
        type: "contracts_commons::types::time::TimeStamp",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    name: "contracts::staking::interface::StakerPoolInfo",
    type: "struct",
    members: [
      {
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "amount",
        type: "core::integer::u128",
      },
      {
        name: "unclaimed_rewards",
        type: "core::integer::u128",
      },
      {
        name: "commission",
        type: "core::integer::u16",
      },
    ],
  },
  {
    name: "core::option::Option::<contracts::staking::interface::StakerPoolInfo>",
    type: "enum",
    variants: [
      {
        name: "Some",
        type: "contracts::staking::interface::StakerPoolInfo",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    name: "contracts::staking::interface::StakerInfo",
    type: "struct",
    members: [
      {
        name: "reward_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "operational_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "unstake_time",
        type: "core::option::Option::<contracts_commons::types::time::TimeStamp>",
      },
      {
        name: "amount_own",
        type: "core::integer::u128",
      },
      {
        name: "index",
        type: "core::integer::u128",
      },
      {
        name: "unclaimed_rewards_own",
        type: "core::integer::u128",
      },
      {
        name: "pool_info",
        type: "core::option::Option::<contracts::staking::interface::StakerPoolInfo>",
      },
    ],
  },
  {
    name: "core::option::Option::<contracts::staking::interface::StakerInfo>",
    type: "enum",
    variants: [
      {
        name: "Some",
        type: "contracts::staking::interface::StakerInfo",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    name: "contracts_commons::types::time::TimeDelta",
    type: "struct",
    members: [
      {
        name: "seconds",
        type: "core::integer::u64",
      },
    ],
  },
  {
    name: "contracts::staking::interface::StakingContractInfo",
    type: "struct",
    members: [
      {
        name: "min_stake",
        type: "core::integer::u128",
      },
      {
        name: "token_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "global_index",
        type: "core::integer::u128",
      },
      {
        name: "pool_contract_class_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
      {
        name: "reward_supplier",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "exit_wait_window",
        type: "contracts_commons::types::time::TimeDelta",
      },
    ],
  },
  {
    name: "contracts::staking::objects::UndelegateIntentKey",
    type: "struct",
    members: [
      {
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "identifier",
        type: "core::felt252",
      },
    ],
  },
  {
    name: "contracts::staking::objects::UndelegateIntentValue",
    type: "struct",
    members: [
      {
        name: "unpool_time",
        type: "contracts_commons::types::time::TimeStamp",
      },
      {
        name: "amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    name: "contracts::staking::interface::IStaking",
    type: "interface",
    items: [
      {
        name: "stake",
        type: "function",
        inputs: [
          {
            name: "reward_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "operational_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
          {
            name: "pool_enabled",
            type: "core::bool",
          },
          {
            name: "commission",
            type: "core::integer::u16",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "increase_stake",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "claim_rewards",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "unstake_intent",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "contracts_commons::types::time::TimeStamp",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "unstake_action",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "change_reward_address",
        type: "function",
        inputs: [
          {
            name: "reward_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "set_open_for_delegation",
        type: "function",
        inputs: [
          {
            name: "commission",
            type: "core::integer::u16",
          },
        ],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "staker_info",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "contracts::staking::interface::StakerInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_staker_info",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::option::Option::<contracts::staking::interface::StakerInfo>",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "contract_parameters",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "contracts::staking::interface::StakingContractInfo",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_total_stake",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_pool_exit_intent",
        type: "function",
        inputs: [
          {
            name: "undelegate_intent_key",
            type: "contracts::staking::objects::UndelegateIntentKey",
          },
        ],
        outputs: [
          {
            type: "contracts::staking::objects::UndelegateIntentValue",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "update_global_index_if_needed",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "declare_operational_address",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "change_operational_address",
        type: "function",
        inputs: [
          {
            name: "operational_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "update_commission",
        type: "function",
        inputs: [
          {
            name: "commission",
            type: "core::integer::u16",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "is_paused",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    name: "StakingPoolImpl",
    type: "impl",
    interface_name: "contracts::staking::interface::IStakingPool",
  },
  {
    name: "core::array::Span::<core::felt252>",
    type: "struct",
    members: [
      {
        name: "snapshot",
        type: "@core::array::Array::<core::felt252>",
      },
    ],
  },
  {
    name: "contracts::staking::interface::IStakingPool",
    type: "interface",
    items: [
      {
        name: "add_stake_from_pool",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "remove_from_delegation_pool_intent",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "identifier",
            type: "core::felt252",
          },
          {
            name: "amount",
            type: "core::integer::u128",
          },
        ],
        outputs: [
          {
            type: "contracts_commons::types::time::TimeStamp",
          },
        ],
        state_mutability: "external",
      },
      {
        name: "remove_from_delegation_pool_action",
        type: "function",
        inputs: [
          {
            name: "identifier",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "switch_staking_delegation_pool",
        type: "function",
        inputs: [
          {
            name: "to_staker",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "to_pool",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "switched_amount",
            type: "core::integer::u128",
          },
          {
            name: "data",
            type: "core::array::Span::<core::felt252>",
          },
          {
            name: "identifier",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "claim_delegation_pool_rewards",
        type: "function",
        inputs: [
          {
            name: "staker_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u128",
          },
        ],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "StakingPauseImpl",
    type: "impl",
    interface_name: "contracts::staking::interface::IStakingPause",
  },
  {
    name: "contracts::staking::interface::IStakingPause",
    type: "interface",
    items: [
      {
        name: "pause",
        type: "function",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "unpause",
        type: "function",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "StakingConfigImpl",
    type: "impl",
    interface_name: "contracts::staking::interface::IStakingConfig",
  },
  {
    name: "contracts::staking::interface::IStakingConfig",
    type: "interface",
    items: [
      {
        name: "set_min_stake",
        type: "function",
        inputs: [
          {
            name: "min_stake",
            type: "core::integer::u128",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "set_exit_wait_window",
        type: "function",
        inputs: [
          {
            name: "exit_wait_window",
            type: "contracts_commons::types::time::TimeDelta",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "set_reward_supplier",
        type: "function",
        inputs: [
          {
            name: "reward_supplier",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "ReplaceabilityImpl",
    type: "impl",
    interface_name:
      "contracts_commons::components::replaceability::interface::IReplaceable",
  },
  {
    name: "contracts_commons::components::replaceability::interface::EICData",
    type: "struct",
    members: [
      {
        name: "eic_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
      {
        name: "eic_init_data",
        type: "core::array::Span::<core::felt252>",
      },
    ],
  },
  {
    name: "core::option::Option::<contracts_commons::components::replaceability::interface::EICData>",
    type: "enum",
    variants: [
      {
        name: "Some",
        type: "contracts_commons::components::replaceability::interface::EICData",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    name: "contracts_commons::components::replaceability::interface::ImplementationData",
    type: "struct",
    members: [
      {
        name: "impl_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
      {
        name: "eic_data",
        type: "core::option::Option::<contracts_commons::components::replaceability::interface::EICData>",
      },
      {
        name: "final",
        type: "core::bool",
      },
    ],
  },
  {
    name: "contracts_commons::components::replaceability::interface::IReplaceable",
    type: "interface",
    items: [
      {
        name: "get_upgrade_delay",
        type: "function",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u64",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "get_impl_activation_time",
        type: "function",
        inputs: [
          {
            name: "implementation_data",
            type: "contracts_commons::components::replaceability::interface::ImplementationData",
          },
        ],
        outputs: [
          {
            type: "core::integer::u64",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "add_new_implementation",
        type: "function",
        inputs: [
          {
            name: "implementation_data",
            type: "contracts_commons::components::replaceability::interface::ImplementationData",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_implementation",
        type: "function",
        inputs: [
          {
            name: "implementation_data",
            type: "contracts_commons::components::replaceability::interface::ImplementationData",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "replace_to",
        type: "function",
        inputs: [
          {
            name: "implementation_data",
            type: "contracts_commons::components::replaceability::interface::ImplementationData",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "RolesImpl",
    type: "impl",
    interface_name: "contracts_commons::components::roles::interface::IRoles",
  },
  {
    name: "contracts_commons::components::roles::interface::IRoles",
    type: "interface",
    items: [
      {
        name: "is_app_governor",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_app_role_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_governance_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_operator",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_token_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_upgrade_governor",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_security_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "is_security_agent",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        name: "register_app_governor",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_app_governor",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_app_role_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_app_role_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_governance_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_governance_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_operator",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_operator",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_token_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_token_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_upgrade_governor",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_upgrade_governor",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "renounce",
        type: "function",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_security_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_security_admin",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "register_security_agent",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        name: "remove_security_agent",
        type: "function",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "token_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "min_stake",
        type: "core::integer::u128",
      },
      {
        name: "pool_contract_class_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
      {
        name: "reward_supplier",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "pool_contract_admin",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "governance_admin",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::replaceability::interface::ImplementationAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "implementation_data",
        type: "contracts_commons::components::replaceability::interface::ImplementationData",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::replaceability::interface::ImplementationRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "implementation_data",
        type: "contracts_commons::components::replaceability::interface::ImplementationData",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::replaceability::interface::ImplementationReplaced",
    type: "event",
    members: [
      {
        kind: "data",
        name: "implementation_data",
        type: "contracts_commons::components::replaceability::interface::ImplementationData",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::replaceability::interface::ImplementationFinalized",
    type: "event",
    members: [
      {
        kind: "data",
        name: "impl_hash",
        type: "core::starknet::class_hash::ClassHash",
      },
    ],
  },
  {
    kind: "enum",
    name: "contracts_commons::components::replaceability::replaceability::ReplaceabilityComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "ImplementationAdded",
        type: "contracts_commons::components::replaceability::interface::ImplementationAdded",
      },
      {
        kind: "nested",
        name: "ImplementationRemoved",
        type: "contracts_commons::components::replaceability::interface::ImplementationRemoved",
      },
      {
        kind: "nested",
        name: "ImplementationReplaced",
        type: "contracts_commons::components::replaceability::interface::ImplementationReplaced",
      },
      {
        kind: "nested",
        name: "ImplementationFinalized",
        type: "contracts_commons::components::replaceability::interface::ImplementationFinalized",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::AppGovernorAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::AppGovernorRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::AppRoleAdminAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::AppRoleAdminRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::GovernanceAdminAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::GovernanceAdminRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::OperatorAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::OperatorRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::SecurityAdminAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::SecurityAdminRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::SecurityAgentAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::SecurityAgentRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::TokenAdminAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::TokenAdminRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::UpgradeGovernorAdded",
    type: "event",
    members: [
      {
        kind: "data",
        name: "added_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "added_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts_commons::components::roles::interface::UpgradeGovernorRemoved",
    type: "event",
    members: [
      {
        kind: "data",
        name: "removed_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "removed_by",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "enum",
    name: "contracts_commons::components::roles::roles::RolesComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "AppGovernorAdded",
        type: "contracts_commons::components::roles::interface::AppGovernorAdded",
      },
      {
        kind: "nested",
        name: "AppGovernorRemoved",
        type: "contracts_commons::components::roles::interface::AppGovernorRemoved",
      },
      {
        kind: "nested",
        name: "AppRoleAdminAdded",
        type: "contracts_commons::components::roles::interface::AppRoleAdminAdded",
      },
      {
        kind: "nested",
        name: "AppRoleAdminRemoved",
        type: "contracts_commons::components::roles::interface::AppRoleAdminRemoved",
      },
      {
        kind: "nested",
        name: "GovernanceAdminAdded",
        type: "contracts_commons::components::roles::interface::GovernanceAdminAdded",
      },
      {
        kind: "nested",
        name: "GovernanceAdminRemoved",
        type: "contracts_commons::components::roles::interface::GovernanceAdminRemoved",
      },
      {
        kind: "nested",
        name: "OperatorAdded",
        type: "contracts_commons::components::roles::interface::OperatorAdded",
      },
      {
        kind: "nested",
        name: "OperatorRemoved",
        type: "contracts_commons::components::roles::interface::OperatorRemoved",
      },
      {
        kind: "nested",
        name: "SecurityAdminAdded",
        type: "contracts_commons::components::roles::interface::SecurityAdminAdded",
      },
      {
        kind: "nested",
        name: "SecurityAdminRemoved",
        type: "contracts_commons::components::roles::interface::SecurityAdminRemoved",
      },
      {
        kind: "nested",
        name: "SecurityAgentAdded",
        type: "contracts_commons::components::roles::interface::SecurityAgentAdded",
      },
      {
        kind: "nested",
        name: "SecurityAgentRemoved",
        type: "contracts_commons::components::roles::interface::SecurityAgentRemoved",
      },
      {
        kind: "nested",
        name: "TokenAdminAdded",
        type: "contracts_commons::components::roles::interface::TokenAdminAdded",
      },
      {
        kind: "nested",
        name: "TokenAdminRemoved",
        type: "contracts_commons::components::roles::interface::TokenAdminRemoved",
      },
      {
        kind: "nested",
        name: "UpgradeGovernorAdded",
        type: "contracts_commons::components::roles::interface::UpgradeGovernorAdded",
      },
      {
        kind: "nested",
        name: "UpgradeGovernorRemoved",
        type: "contracts_commons::components::roles::interface::UpgradeGovernorRemoved",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
    type: "event",
    members: [
      {
        kind: "data",
        name: "role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
    type: "event",
    members: [
      {
        kind: "data",
        name: "role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
    type: "event",
    members: [
      {
        kind: "data",
        name: "role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "previous_admin_role",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "new_admin_role",
        type: "core::felt252",
      },
    ],
  },
  {
    kind: "enum",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
    type: "event",
    variants: [
      {
        kind: "nested",
        name: "RoleGranted",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
      },
      {
        kind: "nested",
        name: "RoleRevoked",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
      },
      {
        kind: "nested",
        name: "RoleAdminChanged",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
      },
    ],
  },
  {
    kind: "enum",
    name: "openzeppelin_introspection::src5::SRC5Component::Event",
    type: "event",
    variants: [],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::StakeBalanceChanged",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "old_self_stake",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "old_delegated_stake",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "new_self_stake",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "new_delegated_stake",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::NewDelegationPool",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "commission",
        type: "core::integer::u16",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::StakerExitIntent",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "exit_timestamp",
        type: "contracts_commons::types::time::TimeStamp",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::StakerRewardAddressChanged",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "new_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "old_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::OperationalAddressChanged",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "new_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "old_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::GlobalIndexUpdated",
    type: "event",
    members: [
      {
        kind: "data",
        name: "old_index",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "new_index",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "global_index_last_update_timestamp",
        type: "contracts_commons::types::time::TimeStamp",
      },
      {
        kind: "data",
        name: "global_index_current_update_timestamp",
        type: "contracts_commons::types::time::TimeStamp",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::NewStaker",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "reward_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "operational_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "self_stake",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::CommissionChanged",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "new_commission",
        type: "core::integer::u16",
      },
      {
        kind: "data",
        name: "old_commission",
        type: "core::integer::u16",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::StakerRewardClaimed",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "reward_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    name: "core::option::Option::<core::starknet::contract_address::ContractAddress>",
    type: "enum",
    variants: [
      {
        name: "Some",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::DeleteStaker",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "reward_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "operational_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "pool_contract",
        type: "core::option::Option::<core::starknet::contract_address::ContractAddress>",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::RewardsSuppliedToDelegationPool",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "pool_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::PauseEvents::Paused",
    type: "event",
    members: [
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::PauseEvents::Unpaused",
    type: "event",
    members: [
      {
        kind: "data",
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::ConfigEvents::MinimumStakeChanged",
    type: "event",
    members: [
      {
        kind: "data",
        name: "old_min_stake",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "new_min_stake",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::ConfigEvents::ExitWaitWindowChanged",
    type: "event",
    members: [
      {
        kind: "data",
        name: "old_exit_window",
        type: "contracts_commons::types::time::TimeDelta",
      },
      {
        kind: "data",
        name: "new_exit_window",
        type: "contracts_commons::types::time::TimeDelta",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::ConfigEvents::RewardSupplierChanged",
    type: "event",
    members: [
      {
        kind: "data",
        name: "old_reward_supplier",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "data",
        name: "new_reward_supplier",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::OperationalAddressDeclared",
    type: "event",
    members: [
      {
        kind: "key",
        name: "operational_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::RemoveFromDelegationPoolIntent",
    type: "event",
    members: [
      {
        kind: "key",
        name: "staker_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "identifier",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "old_intent_amount",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "new_intent_amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::RemoveFromDelegationPoolAction",
    type: "event",
    members: [
      {
        kind: "key",
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "identifier",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "struct",
    name: "contracts::staking::interface::Events::ChangeDelegationPoolIntent",
    type: "event",
    members: [
      {
        kind: "key",
        name: "pool_contract",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        kind: "key",
        name: "identifier",
        type: "core::felt252",
      },
      {
        kind: "data",
        name: "old_intent_amount",
        type: "core::integer::u128",
      },
      {
        kind: "data",
        name: "new_intent_amount",
        type: "core::integer::u128",
      },
    ],
  },
  {
    kind: "enum",
    name: "contracts::staking::staking::Staking::Event",
    type: "event",
    variants: [
      {
        kind: "flat",
        name: "ReplaceabilityEvent",
        type: "contracts_commons::components::replaceability::replaceability::ReplaceabilityComponent::Event",
      },
      {
        kind: "flat",
        name: "RolesEvent",
        type: "contracts_commons::components::roles::roles::RolesComponent::Event",
      },
      {
        kind: "flat",
        name: "AccessControlEvent",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
      },
      {
        kind: "flat",
        name: "SRC5Event",
        type: "openzeppelin_introspection::src5::SRC5Component::Event",
      },
      {
        kind: "nested",
        name: "StakeBalanceChanged",
        type: "contracts::staking::interface::Events::StakeBalanceChanged",
      },
      {
        kind: "nested",
        name: "NewDelegationPool",
        type: "contracts::staking::interface::Events::NewDelegationPool",
      },
      {
        kind: "nested",
        name: "StakerExitIntent",
        type: "contracts::staking::interface::Events::StakerExitIntent",
      },
      {
        kind: "nested",
        name: "StakerRewardAddressChanged",
        type: "contracts::staking::interface::Events::StakerRewardAddressChanged",
      },
      {
        kind: "nested",
        name: "OperationalAddressChanged",
        type: "contracts::staking::interface::Events::OperationalAddressChanged",
      },
      {
        kind: "nested",
        name: "GlobalIndexUpdated",
        type: "contracts::staking::interface::Events::GlobalIndexUpdated",
      },
      {
        kind: "nested",
        name: "NewStaker",
        type: "contracts::staking::interface::Events::NewStaker",
      },
      {
        kind: "nested",
        name: "CommissionChanged",
        type: "contracts::staking::interface::Events::CommissionChanged",
      },
      {
        kind: "nested",
        name: "StakerRewardClaimed",
        type: "contracts::staking::interface::Events::StakerRewardClaimed",
      },
      {
        kind: "nested",
        name: "DeleteStaker",
        type: "contracts::staking::interface::Events::DeleteStaker",
      },
      {
        kind: "nested",
        name: "RewardsSuppliedToDelegationPool",
        type: "contracts::staking::interface::Events::RewardsSuppliedToDelegationPool",
      },
      {
        kind: "nested",
        name: "Paused",
        type: "contracts::staking::interface::PauseEvents::Paused",
      },
      {
        kind: "nested",
        name: "Unpaused",
        type: "contracts::staking::interface::PauseEvents::Unpaused",
      },
      {
        kind: "nested",
        name: "MinimumStakeChanged",
        type: "contracts::staking::interface::ConfigEvents::MinimumStakeChanged",
      },
      {
        kind: "nested",
        name: "ExitWaitWindowChanged",
        type: "contracts::staking::interface::ConfigEvents::ExitWaitWindowChanged",
      },
      {
        kind: "nested",
        name: "RewardSupplierChanged",
        type: "contracts::staking::interface::ConfigEvents::RewardSupplierChanged",
      },
      {
        kind: "nested",
        name: "OperationalAddressDeclared",
        type: "contracts::staking::interface::Events::OperationalAddressDeclared",
      },
      {
        kind: "nested",
        name: "RemoveFromDelegationPoolIntent",
        type: "contracts::staking::interface::Events::RemoveFromDelegationPoolIntent",
      },
      {
        kind: "nested",
        name: "RemoveFromDelegationPoolAction",
        type: "contracts::staking::interface::Events::RemoveFromDelegationPoolAction",
      },
      {
        kind: "nested",
        name: "ChangeDelegationPoolIntent",
        type: "contracts::staking::interface::Events::ChangeDelegationPoolIntent",
      },
    ],
  },
];