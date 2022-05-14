import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';


const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Prueba2RepticenzNFT',
  tokenName: 'Repticenz',
  tokenSymbol: 'RPTCNZ',
  hiddenMetadataUri: 'ipfs://QmQbnBYBWhhGsSzZS3zeg2FzfMaMcWTYhY8fp91x9FZdF7/hidden.json', // Direccion imagen oculta, archivo.json
  maxSupply: 20,
  whitelistSale: {
    price: 0.06,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0xAa8B5Be96Bd696603308254D7d61898F6f99C152",
  marketplaceIdentifier: 'Repticenz',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
