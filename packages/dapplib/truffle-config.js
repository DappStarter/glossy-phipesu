require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name return payment come grace option equal gentle'; 
let testAccounts = [
"0x242766e50cd32a90b7d859678c39990cce72def0663ecd93c384cdcccbc5cce7",
"0xc8253d57147de9bca0137fb27d141a9311d2f1275ceb77ef4c74c9cdfca5a679",
"0x6440b6236a07f4c96c56d4e1d3318c4bfbf440bca3acfc8da95c7defa97e4dcc",
"0x0425f793f66b73e61db2fe89bbfd48dc2e1e66482a08ed6561be520da979fdf0",
"0x081c5758f28dbf081092d23537da853978367238c35e128b49617b09bc165c94",
"0xb047320266c3c94e2127dedf5a1e6916db3f986522c7000c060c0898df183759",
"0x8b07436af0f41e6bbf7a37756ee904fe2f77062b9e3817616ef9945d9258d478",
"0x9cdc732b76dcbeda38db39a48868b15e57a18a98c3c0eedaaec13c83deb8dc45",
"0x3e459d74beb045a0b527f08f8476a6926c7b13bba7d5752941c8701b8cd16769",
"0xddbe6698fa7e0d4f0b4d818405f1c351a0eec83c8bf710545ba52d9001711dd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

