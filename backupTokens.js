/*
List of tokens from 3 sources
 
 Listed
 - 'offlineTokens': Official EtherDelta tokens (used as backup if live version fails to load)
 
 Additional custom tokens:
 - 'offlineStagingTokens' : EtherDelta 'staging' tokens (used as backup if live version fails to load)
 - 'offlineCustomTokens': Tokens on the MyEtherWallet list https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/tokens/ethTokens.json
 - 'allShitCoins': All tokens deposited in EtherDelta from the Ethplorer api (deposited balance > 1 & number of token holders > 5)


*/



//2017-01-26
// smart contract v2 doesn't error anymore on invalid tokens, but it can't hurt to send less requests
let tokenBlacklist = {
	"0x2df8286c9396f52e17dfee75d2e41e52609cf897" : "SNTR", //contract selfdestructed
	"0x3a0181e8f2dd081ace83eac027eec2e0c2255ed5" : "BCV", //selfdestructed
	"0x52903256dd18d85c2dc4a6c999907c9793ea61e3" : "INSP", //selfdestructed 

}

// offline backup of EtherDelta tokens
// from EtherDelta 2018-01-22

let offlineTokens = {
	"tokens": [
    { "addr": "0x0000000000000000000000000000000000000000", "name": "ETH", "decimals": 18 },
    { "addr": "0xd8912c10681d8b21fd3742244f44658dba12264e", "name": "PLU", "decimals": 18 },
    { "addr": "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7", "name": "1ST", "decimals": 18 },
    { "addr": "0x936f78b9852d12f5cb93177c1f84fb8513d06263", "name": "GNTW", "decimals": 18 },
    { "addr": "0x01afc37f4f85babc47c0e2d0eababc7fb49793c8", "name": "GNTM", "decimals": 18 },
    { "addr": "0x5c543e7ae0a1104f78406c340e9c64fd9fce5170", "name": "VSL", "decimals": 18 },
    { "addr": "0xac709fcb44a43c35f0da4e3163b117a17f3770f5", "name": "ARC", "decimals": 18 },
    { "addr": "0x14f37b574242d366558db61f3335289a5035c506", "name": "HKG", "decimals": 3 },
    { "addr": "0x888666ca69e0f178ded6d75b5726cee99a87d698", "name": "ICN", "decimals": 18 },
    { "addr": "0xe94327d07fc17907b4db788e5adf2ed424addff6", "name": "REP", "decimals": 18 },
    { "addr": "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009", "name": "SNGLS", "decimals": 0 },
    { "addr": "0x4df812f6064def1e5e029f1ca858777cc98d2d81", "name": "XAUR", "decimals": 8 },
    { "addr": "0xc66ea802717bfb9833400264dd12c2bceaa34a6d", "name": "MKR", "decimals": 18 },
    { "addr": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a", "name": "DGD", "decimals": 9 },
    { "addr": "0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd", "name": "EPOSY", "decimals": 18 },
    { "addr": "0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0", "name": "EPOSN", "decimals": 18 },
    { "addr": "0x55e7c4a77821d5c50b4570b08f9f92896a25e012", "name": "P+", "decimals": 0 },
    { "addr": "0x45e42d659d9f9466cd5df622506033145a9b89bc", "name": "NXC", "decimals": 3 },
    { "addr": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6", "name": "DCN", "decimals": 0 },
    { "addr": "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607", "name": "SWT", "decimals": 18 },
    { "addr": "0xb802b24e0637c2b87d2e8b7784c055bbe921011a", "name": "EMV", "decimals": 2 },
    { "addr": "0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53", "name": "TIME", "decimals": 8 },
    { "addr": "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1", "name": "MLN", "decimals": 18 },
    { "addr": "0x168296bb09e24a88805cb9c33356536b980d3fc5", "name": "RHOC", "decimals": 8 },
    { "addr": "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c", "name": "EDG", "decimals": 0 },
    { "addr": "0xf7b098298f7c69fc14610bf71d5e02c60792894c", "name": "GUP", "decimals": 3 },
    { "addr": "0x607f4c5bb672230e8672085532f7e901544a7375", "name": "RLC", "decimals": 9 },
    { "addr": "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b", "name": "TRST", "decimals": 6 },
    { "addr": "0x2e071d2966aa7d8decb1005885ba1977d6038a65", "name": "DICE", "decimals": 16 },
    { "addr": "0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c", "name": "TAAS", "decimals": 6 },
    { "addr": "0x6810e776880c02933d47db1b9fc05908e5386b96", "name": "GNO", "decimals": 18 },
    { "addr": "0x667088b212ce3d06a1b553a7221e1fd19000d9af", "name": "WINGS", "decimals": 18 },
    { "addr": "0xfa05a73ffe78ef8f1a739473e462c54bae6567d9", "name": "LUN", "decimals": 18 },
    { "addr": "0xaaaf91d9b90df800df4f55c205fd6989c977e73a", "name": "TKN", "decimals": 8 },
    { "addr": "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908", "name": "HMQ", "decimals": 8 },
    { "addr": "0x960b236a07cf122663c4303350609a66a7b288c0", "name": "ANT", "decimals": 18 },
    { "addr": "0xd248b0d48e44aaf9c49aea0312be7e13a6dc1468", "name": "SGT", "decimals": 1 },
    { "addr": "0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac", "name": "BCAP", "decimals": 0 },
    { "addr": "0x0d8775f648430679a709e98d2b0cb6250d2887ef", "name": "BAT", "decimals": 18 },
    { "addr": "0xa645264c5603e96c3b0b078cdab68733794b0a71", "name": "MYST", "decimals": 8 },
    { "addr": "0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf", "name": "VSMOLD", "decimals": 0 },
    { "addr": "0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e", "name": "CFI", "decimals": 18 },
    { "addr": "0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374", "name": "VERI", "decimals": 18 },
    { "addr": "0x40395044ac3c0c57051906da938b54bd6557f212", "name": "MGO", "decimals": 8 },
    { "addr": "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06", "name": "PTOY", "decimals": 8 },
    { "addr": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c", "name": "BNT", "decimals": 18 },
    { "addr": "0x697beac28B09E122C4332D163985e8a73121b97F", "name": "QRL", "decimals": 8 },
    { "addr": "0xae616e72d3d89e847f74e8ace41ca68bbf56af79", "name": "GOOD", "decimals": 6 },
    { "addr": "0x744d70fdbe2ba4cf95131626614a1763df805b9e", "name": "SNT", "decimals": 18 },
    { "addr": "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63", "name": "SONM", "decimals": 18 },
    { "addr": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671", "name": "NMR", "decimals": 18 },
    { "addr": "0x93e682107d1e9defb0b5ee701c71707a4b2e46bc", "name": "MCAP", "decimals": 8 },
    { "addr": "0xb97048628db6b661d4c2aa833e95dbe1a905b280", "name": "PAY", "decimals": 18 },
    { "addr": "0x5a84969bb663fb64f6d015dcf9f622aedc796750", "name": "ICE", "decimals": 18 },
    { "addr": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a", "name": "PPT", "decimals": 8 },
    { "addr": "0xbbb1bd2d741f05e144e6c4517676a15554fd4b8d", "name": "FUNOLD", "decimals": 8 },
    { "addr": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b", "name": "FUN", "decimals": 8 },
    { "addr": "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd", "name": "ADT", "decimals": 9 },
    { "addr": "0xce5c603c78d047ef43032e96b5b785324f753a4f", "name": "E4ROW", "decimals": 2 },
    { "addr": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac", "name": "STORJ", "decimals": 8 },
    { "addr": "0xcfb98637bcae43c13323eaa1731ced2b716962fd", "name": "NET", "decimals": 18 },
    { "addr": "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0", "name": "EOS", "decimals": 18 },
    { "addr": "0x4470bb87d77b963a013db939be332f927f2b992e", "name": "ADX", "decimals": 4 },
    { "addr": "0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed", "name": "DRP", "decimals": 2 },
    { "addr": "0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2", "name": "BET", "decimals": 18 },
    { "addr": "0x0affa06e7fbe5bc9a764c979aa66e8256a631f02", "name": "PLBT", "decimals": 6 },
    { "addr": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07", "name": "OMG", "decimals": 18 },
    { "addr": "0xb8c77482e45f1f44de1745f52c74426c631bdd52", "name": "BNB", "decimals": 18 },
    { "addr": "0x814964b1bceaf24e26296d031eadf134a2ca4105", "name": "NEWB", "decimals": 0 },
    { "addr": "0xb24754be79281553dc1adc160ddf5cd9b74361a4", "name": "XRL", "decimals": 9 },
    { "addr": "0x386467f1f3ddbe832448650418311a479eecfc57", "name": "MBRS", "decimals": 0 },
    { "addr": "0xf433089366899d83a9f26a773d59ec7ecf30355e", "name": "MTL", "decimals": 8 },
    { "addr": "0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d", "name": "FUCKOLD", "decimals": 4 },
    { "addr": "0xab16e0d25c06cb376259cc18c1de4aca57605589", "name": "FUCK", "decimals": 4 },
    { "addr": "0x5c6183d10a00cd747a6dbb5f658ad514383e9419", "name": "NXXOLD", "decimals": 8 },
    { "addr": "0xd5b9a2737c9b2ff35ecb23b884eb039303bbbb61", "name": "BTH", "decimals": 18 },
    { "addr": "0xe3818504c1b32bf1557b16c238b2e01fd3149c17", "name": "PLR", "decimals": 18 },
    { "addr": "0x41e5560054824ea6b0732e656e3ad64e20e94e45", "name": "CVC", "decimals": 8 },
    { "addr": "0xbfa4d71a51b9e0968be4bc299f8ba6cbb2f86789", "name": "MAYY", "decimals": 18 },
    { "addr": "0xab130bc7ff83192656a4b3079741c296615899c0", "name": "MAYN", "decimals": 18 },
    { "addr": "0xe2e6d4be086c6938b53b22144855eef674281639", "name": "LNK", "decimals": 18 },
    { "addr": "0x2bdc0d42996017fce214b21607a515da41a9e0c5", "name": "SKIN", "decimals": 6 },
    { "addr": "0x8b9c35c79af5319c70dd9a3e3850f368822ed64e", "name": "DGT", "decimals": 18 },
    { "addr": "0xa578acc0cb7875781b7880903f4594d13cfa8b98", "name": "ECN", "decimals": 2 },
    { "addr": "0x660b612ec57754d949ac1a09d0c2937a010dee05", "name": "BCD", "decimals": 6 },
    { "addr": "0x8ef59b92f21f9e5f21f5f71510d1a7f87a5420be", "name": "DEX", "decimals": 2 },
    { "addr": "0xea1f346faf023f974eb5adaf088bbcdf02d761f4", "name": "TIX", "decimals": 18 },
    { "addr": "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af", "name": "CDT", "decimals": 18 },
    { "addr": "0xfca47962d45adfdfd1ab2d972315db4ce7ccf094", "name": "IXT", "decimals": 8 },
    { "addr": "0xa2f4fcb0fde2dd59f7a1873e121bc5623e3164eb", "name": "AIRA", "decimals": 0 },
    { "addr": "0x56ba2ee7890461f463f7be02aac3099f6d5811a8", "name": "CAT", "decimals": 18 },
    { "addr": "0x701c244b988a513c945973defa05de933b23fe1d", "name": "OAX", "decimals": 18 },
    { "addr": "0x08fd34559f2ed8585d3810b4d96ab8a05c9f97c5", "name": "CLRT", "decimals": 18 },
    { "addr": "0x68aa3f232da9bdc2343465545794ef3eea5209bd", "name": "MSP", "decimals": 18 },
    { "addr": "0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1", "name": "BAS", "decimals": 8 },
    { "addr": "0xdc0c22285b61405aae01cba2530b6dd5cd328da7", "name": "KTN", "decimals": 6 },
    { "addr": "0xdd6bf56ca2ada24c683fac50e37783e55b57af9f", "name": "BNC", "decimals": 12 },
    { "addr": "0x0abdace70d3790235af448c88547603b945604ea", "name": "DNT", "decimals": 18 },
    { "addr": "0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891", "name": "BRAT", "decimals": 8 },
    { "addr": "0x5af2be193a6abca9c8817001f45744777db30756", "name": "BQX", "decimals": 8 },
    { "addr": "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45", "name": "STX", "decimals": 18 },
    { "addr": "0x88fcfbc22c6d3dbaa25af478c578978339bde77a", "name": "FYN", "decimals": 18 },
    { "addr": "0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be", "name": "CREDO", "decimals": 18 },
    { "addr": "0x202e295df742befa5e94e9123149360db9d9f2dc", "name": "NIH", "decimals": 8 },
    { "addr": "0x671abbe5ce652491985342e85428eb1b07bc6c64", "name": "QAU", "decimals": 8 },
    { "addr": "0x3597bfd533a99c9aa083587b074434e61eb0a258", "name": "DENT", "decimals": 8 },
    { "addr": "0xbc7de10afe530843e71dfb2e3872405191e8d14a", "name": "SHOUC", "decimals": 18 },
    { "addr": "0x2ca72c9699b92b47272c9716c664cad6167c80b0", "name": "GUNS", "decimals": 18 },
    { "addr": "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098", "name": "SAN", "decimals": 18 },
    { "addr": "0xf8e386eda857484f5a12e4b5daa9984e06e73705", "name": "IND", "decimals": 18 },
    { "addr": "0xfb12e3cca983b9f59d90912fd17f8d745a8b2953", "name": "LUCK", "decimals": 0 },
    { "addr": "0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3", "name": "RIYA", "decimals": 8 },
    { "addr": "0xe41d2489571d322189246dafa5ebde1f4699f498", "name": "ZRX", "decimals": 18 },
    { "addr": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d", "name": "MCO", "decimals": 8 },
    { "addr": "0x02b9806a64cb05f02aa8dcc1c178b88159a61304", "name": "DEL", "decimals": 18 },
    { "addr": "0x46492473755e8df960f8034877f61732d718ce96", "name": "STRC", "decimals": 8 },
    { "addr": "0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa", "name": "GTKT", "decimals": 0 },
    { "addr": "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195", "name": "POE", "decimals": 8 },
    { "addr": "0x38968746147bbaeb882f356ad9a57594bb158235", "name": "BENJA", "decimals": 8 },
    { "addr": "0x814cafd4782d2e728170fda68257983f03321c58", "name": "IDEA", "decimals": 0 },
    { "addr": "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda", "name": "WTT", "decimals": 0 },
    { "addr": "0x5ddab66da218fb05dfeda07f1afc4ea0738ee234", "name": "RARE", "decimals": 8 },
    { "addr": "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8", "name": "SCL", "decimals": 8 },
    { "addr": "0xa7f976c360ebbed4465c2855684d1aae5271efa9", "name": "TFL", "decimals": 8 },
    { "addr": "0x7654915a1b82d6d2d0afc37c52af556ea8983c7e", "name": "IFT", "decimals": 18 },
    { "addr": "0x94298f1e0ab2dfad6eeffb1426846a3c29d98090", "name": "MyB", "decimals": 8 },
    { "addr": "0x4355fc160f74328f9b383df2ec589bb3dfd82ba0", "name": "OPT", "decimals": 18 },
    { "addr": "0x17fd666fa0784885fa1afec8ac624d9b7e72b752", "name": "FLIK", "decimals": 14 },
    { "addr": "0xdab5dfa0966c3435da991b39d205c3ba1c64fe31", "name": "MTP", "decimals": 1 },
    { "addr": "0x422866a8f0b032c5cf1dfbdef31a20f4509562b0", "name": "ADST", "decimals": 0 },
    { "addr": "0x66497a283e0a007ba3974e837784c6ae323447de", "name": "PT", "decimals": 18 },
    { "addr": "0x07d9e49ea402194bf48a8276dafb16e4ed633317", "name": "DALC", "decimals": 8 },
    { "addr": "0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38", "name": "DDF", "decimals": 18 },
    { "addr": "0xef68e7c694f40c8202821edf525de3782458639f", "name": "LRC", "decimals": 18 },
    { "addr": "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244", "name": "RVT", "decimals": 18 },
    { "addr": "0x8a187d5285d316bcbc9adafc08b51d70a0d8e000", "name": "SIFT", "decimals": 0 },
    { "addr": "0x8effd494eb698cc399af6231fccd39e08fd20b15", "name": "PIX", "decimals": 0 },
    { "addr": "0xaa26b73bfdc80b5c7d2cfbfc30930038fb7fa657", "name": "TOV", "decimals": 0 },
    { "addr": "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8", "name": "TNT", "decimals": 8 },
    { "addr": "0x96a65609a7b84e8842732deb08f56c3e21ac6f8a", "name": "CTR", "decimals": 18 },
    { "addr": "0xe6923e9b56db1eed1c9f430ea761da7565e260fe", "name": "FC", "decimals": 2 },
    { "addr": "0xd850942ef8811f2a866692a623011bde52a462c1", "name": "VEN", "decimals": 18 },
    { "addr": "0x2160e6c0ae8ca7d62fe1f57fc049f8363283ff5f", "name": "BPT", "decimals": 18 },
    { "addr": "0xf05a9382a4c3f29e2784502754293d88b835109c", "name": "REX", "decimals": 18 },
    { "addr": "0x73dd069c299a5d691e9836243bcaec9c8c1d8734", "name": "BTE", "decimals": 8 },
    { "addr": "0x1bcbc54166f6ba149934870b60506199b6c9db6d", "name": "ROC", "decimals": 10 },
    { "addr": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942", "name": "MANA", "decimals": 18 },
    { "addr": "0x27695e09149adc738a978e9a678f99e4c39e9eb9", "name": "KICK", "decimals": 8 },
    { "addr": "0x4e260e3ca268e40133c84b142de73108a7c1ec99", "name": "YC", "decimals": 0 },
    { "addr": "0xaf4dce16da2877f8c9e00544c93b62ac40631f16", "name": "MTH", "decimals": 5 },
    { "addr": "0x9214ec02cb71cba0ada6896b8da260736a67ab10", "name": "REAL", "decimals": 18 },
    { "addr": "0xe5a7c12972f3bbfe70ed29521c8949b8af6a0970", "name": "BLX", "decimals": 18 },
    { "addr": "0x5cf4e9dfd975c52aa523fb5945a12235624923dc", "name": "MPRM", "decimals": 0 },
    { "addr": "0x887834d3b8d450b6bab109c252df3da286d73ce4", "name": "ATT", "decimals": 18 },
    { "addr": "0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404", "name": "SNC", "decimals": 18 },
    { "addr": "0x138a8752093f4f9a79aaedf48d4b9248fab93c9c", "name": "MCI", "decimals": 18 },
    { "addr": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74", "name": "WTC", "decimals": 18 },
    { "addr": "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d", "name": "AE", "decimals": 18 },
    { "addr": "0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22", "name": "CCT", "decimals": 18 },
    { "addr": "0xf70a642bd387f94380ffb90451c2c81d4eb82cbc", "name": "STAR", "decimals": 18 },
    { "addr": "0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8", "name": "ELIX", "decimals": 18 },
    { "addr": "0x9cb9eb4bb7800bdbb017be2a4ffbeccb67454ea9", "name": "BOPTOLD", "decimals": 8 },
    { "addr": "0x0d88ed6e74bbfd96b831231638b66c05571e824f", "name": "AVT", "decimals": 18 },
    { "addr": "0x190e569be071f40c704e15825f285481cb74b6cc", "name": "FAM", "decimals": 12 },
    { "addr": "0x190fb342aa6a15eb82903323ae78066ff8616746", "name": "UMC", "decimals": 6 },
    { "addr": "0x59adcf176ed2f6788a41b8ea4c4904518e62b6a4", "name": "SAI", "decimals": 18 },
    { "addr": "0x1b9743f556d65e757c4c650b4555baf354cb8bd3", "name": "ETBS", "decimals": 12 },
    { "addr": "0xd3c00772b24d997a812249ca637a921e81357701", "name": "WILD", "decimals": 18 },
    { "addr": "0x516e5436bafdc11083654de7bb9b95382d08d5de", "name": "ORME", "decimals": 8 },
    { "addr": "0xf99f901124cbbe180984a247ba94cfba0c764b2e", "name": "SQRL", "decimals": 6 },
    { "addr": "0xb29678a4805a7d787dc9589e179d27f7575bb9f7", "name": "AUA", "decimals": 5 },
    { "addr": "0x5afda18caba69fe3af5e6d56e42e1c9f92c40d77", "name": "MCD", "decimals": 18 },
    { "addr": "0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5", "name": "BQ", "decimals": 3 },
    { "addr": "0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970", "name": "NDC", "decimals": 18 },
    { "addr": "0xc596bd09d652827b0106292d3e378d5938df4b12", "name": "TPT", "decimals": 18 },
    { "addr": "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f", "name": "DLT", "decimals": 18 },
    { "addr": "0x7f1e2c7d6a69bf34824d72c53b4550e895c0d8c2", "name": "BOP", "decimals": 8 },
    { "addr": "0x51db5ad35c671a87207d88fc11d593ac0c8415bd", "name": "MDA", "decimals": 18 },
    { "addr": "0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9", "name": "PST", "decimals": 18 },
    { "addr": "0xa6e7172662379f1f4c72108655869abdbb7f7672", "name": "JADE", "decimals": 5 },
    { "addr": "0xfec0cf7fe078a500abf15f1284958f22049c2c7e", "name": "ART", "decimals": 18 },
    { "addr": "0x089a6d83282fb8988a656189f1e7a73fa6c1cac2", "name": "PGL", "decimals": 18 },
    { "addr": "0xc997d07b0bc607b6d1bcb6fb9d4a5579c466c3e5", "name": "FLIP", "decimals": 0 },
    { "addr": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5", "name": "KIN", "decimals": 18 },
    { "addr": "0x163733bcc28dbf26b41a8cfa83e369b5b3af741b", "name": "PRS", "decimals": 18 },
    { "addr": "0xab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf84", "name": "MRV", "decimals": 18 },
    { "addr": "0x4d11061ec8f401edc2395b5f439a05eee6ccfa50", "name": "BOTA", "decimals": 18 },
    { "addr": "0xac3da587eac229c9896d919abc235ca4fd7f72c1", "name": "TGT", "decimals": 1 },
    { "addr": "0x437cf0bf53634e3dfa5e3eaff3104004d50fb532", "name": "BTN", "decimals": 4 },
    { "addr": "0xf230b790e05390fc8295f4d3f60332c93bed42e2", "name": "TRX", "decimals": 6 },
    { "addr": "0x8727c112c712c4a03371ac87a74dd6ab104af768", "name": "JET", "decimals": 18 },
    { "addr": "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05", "name": "ATL", "decimals": 18 },
    { "addr": "0xb2f7eb1f2c37645be61d73953035360e768d81e6", "name": "COB", "decimals": 18 },
    { "addr": "0x226bb599a12c826476e3a771454697ea52e9e220", "name": "PRO", "decimals": 8 },
    { "addr": "0x51ee82641ac238bde34b9859f98f5f311d6e4954", "name": "IQT", "decimals": 8 },
    { "addr": "0x0371a82e4a9d0a4312f3ee2ac9c6958512891372", "name": "STU", "decimals": 18 },
    { "addr": "0x2f4baef93489b09b5e4b923795361a65a26f55e5", "name": "XHY", "decimals": 8 },
    { "addr": "0xe256bb0b2a3457e54db3a41cf5a8b826aca222a8", "name": "ARX", "decimals": 18 },
    { "addr": "0xe1479d294807379320dca9a9e9002ac644539099", "name": "KING", "decimals": 18 },
    { "addr": "0xb72627650f1149ea5e54834b2f468e5d430e67bf", "name": "BITS", "decimals": 8 },
    { "addr": "0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d", "name": "EBET", "decimals": 2 },
    { "addr": "0x94d6b4fb35fb08cb34aa716ab40049ec88002079", "name": "CNX", "decimals": 8 },
    { "addr": "0xdd6c68bb32462e01705011a4e2ad1a60740f217f", "name": "HBT", "decimals": 15 },
    { "addr": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200", "name": "KNC", "decimals": 18 },
    { "addr": "0x7268f9c2bc9c9e65b4a16888cb5672531ce8e945", "name": "YESTERDAY", "decimals": 18 },
    { "addr": "0xee609fe292128cad03b786dbb9bc2634ccdbe7fc", "name": "POS", "decimals": 18 },
    { "addr": "0xb45a50545beeab73f38f31e5973768c421805e5e", "name": "TKR", "decimals": 18 },
    { "addr": "0x68db10ecc599d9f5e657acdafdbf6449d658bb2d", "name": "GGS", "decimals": 18 },
    { "addr": "0x4a42d2c580f83dce404acad18dab26db11a1750e", "name": "RLX", "decimals": 18 },
    { "addr": "0xf9c9da0c81fffd491458881410903561d1e40fd0", "name": "ARENA", "decimals": 18 },
    { "addr": "0x2daee1aa61d60a252dc80564499a69802853583a", "name": "ATS", "decimals": 4 },
    { "addr": "0x46eec301d2d00087145d1588282c182bd1890e5c", "name": "RSPR", "decimals": 16 },
    { "addr": "0x5e4abe6419650ca839ce5bb7db422b881a6064bb", "name": "WIC", "decimals": 18 },
    { "addr": "0x83eea00d838f92dec4d1475697b9f4d3537b56e3", "name": "VOISE", "decimals": 8 },
    { "addr": "0xba2184520a1cc49a6159c57e61e1844e085615b6", "name": "HGT", "decimals": 8 },
    { "addr": "0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a", "name": "SUB", "decimals": 2 },
    { "addr": "0x30aee7f259d6d1564ebef457847c672b30f13cbc", "name": "DOM", "decimals": 0 },
    { "addr": "0xa8006c4ca56f24d6836727d106349320db7fef82", "name": "INXT", "decimals": 8 },
    { "addr": "0xe814aee960a85208c3db542c53e7d4a6c8d5f60f", "name": "DAY", "decimals": 18 },
    { "addr": "0x2469f31a34fcaac0debf73806ce39b2388874b13", "name": "PPT2", "decimals": 18 },
    { "addr": "0x268b7976e94e84a48bf8b2b57ba34b59ed836a74", "name": "XAI", "decimals": 8 },
    { "addr": "0x77faed976e187f26b49e78be8418ab074a341f26", "name": "IWT", "decimals": 18 },
    { "addr": "0xdf6ef343350780bf8c3410bf062e0c015b1dd671", "name": "BMC", "decimals": 8 },
    { "addr": "0x43ee79e379e7b78d871100ed696e803e7893b644", "name": "UGT", "decimals": 18 },
    { "addr": "0x514910771af9ca656af840dff83e8264ecf986ca", "name": "LINK", "decimals": 18 },
    { "addr": "0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139", "name": "ATM", "decimals": 8 },
    { "addr": "0xdcb9ff81013c31ff686154b4502ef6bfaa102d2d", "name": "GOOC", "decimals": 8 },
    { "addr": "0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed", "name": "TFT", "decimals": 8 },
    { "addr": "0xbfd4a3c26996dfc9e85a951eb615aac3b84c758b", "name": "ALPC", "decimals": 0 },
    { "addr": "0xe8ff5c9c75deb346acac493c463c8950be03dfba", "name": "VIBE", "decimals": 18 },
    { "addr": "0xb4efd85c19999d84251304bda99e90b92300bd93", "name": "RPL", "decimals": 18 },
    { "addr": "0xeeac3f8da16bb0485a4a11c5128b0518dac81448", "name": "TEU", "decimals": 18 },
    { "addr": "0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7", "name": "SDRN", "decimals": 18 },
    { "addr": "0x1eab19e6623e8cbcafc252e275f5b51c27656faf", "name": "SPNK", "decimals": 8 },
    { "addr": "0x6467882316dc6e206feef05fba6deaa69277f155", "name": "FAP", "decimals": 18 },
    { "addr": "0x540449e4d172cd9491c76320440cd74933d5691a", "name": "DBETOLD", "decimals": 18 },
    { "addr": "0xf333b2ace992ac2bbd8798bf57bc65a06184afba", "name": "SND", "decimals": 0 },
    { "addr": "0xab95e915c123fded5bdfb6325e35ef5515f1ea69", "name": "XNN", "decimals": 18 },
    { "addr": "0x23cb17d7d079518dbff4febb6efcc0de58d8c984", "name": "TRV", "decimals": 16 },
    { "addr": "0x65292eeadf1426cd2df1c4793a3d7519f253913b", "name": "COSS", "decimals": 18 },
    { "addr": "0x27dce1ec4d3f72c3e457cc50354f1f975ddef488", "name": "AIR", "decimals": 8 },
    { "addr": "0x10b123fddde003243199aad03522065dc05827a0", "name": "SYN", "decimals": 18 },
    { "addr": "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750", "name": "BTM", "decimals": 8 },
    { "addr": "0x6d5cac36c1ae39f41d52393b7a425d0a610ad9f2", "name": "LLT", "decimals": 8 },
    { "addr": "0x4156d3342d5c385a87d264f90653733592000581", "name": "SALT", "decimals": 8 },
    { "addr": "0xce61f5e6d1fe5a86e246f68aff956f7757282ef0", "name": "1LIFE", "decimals": 18 },
    { "addr": "0x52514e3acaeb06cab050a69b025083082ebe5b54", "name": "CTCOLD", "decimals": 4 },
    { "addr": "0xf1d9139c6512452db91f25635457b844d7e22b8b", "name": "CTC", "decimals": 4 },
    { "addr": "0xef2e9966eb61bb494e5375d5df8d67b7db8a780d", "name": "SHIT", "decimals": 0 },
    { "addr": "0x29d75277ac7f0335b2165d0895e8725cbf658d73", "name": "CSNO", "decimals": 8 },
    { "addr": "0x0aef06dcccc531e581f0440059e6ffcc206039ee", "name": "ITT", "decimals": 8 },
    { "addr": "0xb561fef0d624c0826ff869946f6076b7c4f2ba42", "name": "SER", "decimals": 7 },
    { "addr": "0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d", "name": "HVN", "decimals": 8 },
    { "addr": "0x779b7b713c86e3e6774f5040d9ccc2d43ad375f8", "name": "POOL", "decimals": 8 },
    { "addr": "0x28a40acf39b1d3c932f42dd8068ad00a5ad6448f", "name": "LDM", "decimals": 18 },
    { "addr": "0xc3951d77737733174152532e8b0f27e2c4e9f0dc", "name": "CLD", "decimals": 6 },
    { "addr": "0x6678e467fa5ccfbdc264d12f4b8b28fe4661606b", "name": "DCNT", "decimals": 1 },
    { "addr": "0x82d193f8ee41d12aaa0a85cb006606d67f773e9c", "name": "SMT", "decimals": 1 },
    { "addr": "0x4b35e0ab998ebe8414871c13cf778f9d0bbdf609", "name": "SWP", "decimals": 18 },
    { "addr": "0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5", "name": "EDOGE", "decimals": 18 },
    { "addr": "0xeb2da9fac54284cea731d1f10bb34eecb3c00c14", "name": "POW", "decimals": 18 },
    { "addr": "0xf028adee51533b1b47beaa890feb54a457f51e89", "name": "BMT", "decimals": 18 },
    { "addr": "0xeb9c0138d8ac10dd659640a4cc3d135c58b17b1b", "name": "DTC", "decimals": 2 },
    { "addr": "0x4c5601164e2048a4154de91fa5e0b07e626cab7f", "name": "FNL", "decimals": 3 },
    { "addr": "0x0b76544f6c413a555f309bf76260d1e02377c02a", "name": "INT", "decimals": 6 },
    { "addr": "0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4", "name": "FRD", "decimals": 18 },
    { "addr": "0xea610b1153477720748dc13ed378003941d84fab", "name": "ALIS", "decimals": 18 },
    { "addr": "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8", "name": "EVX", "decimals": 4 },
    { "addr": "0x0766e79a6fd74469733e8330b3b461c0320ff059", "name": "EXN", "decimals": 18 },
    { "addr": "0x8d5a69dc82a47594881256f2eef81770274fa30f", "name": "NTC", "decimals": 18 },
    { "addr": "0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd", "name": "HOWL", "decimals": 18 },
    { "addr": "0x1bb9e8ea817d56eccc212ce63f7da95298f98719", "name": "SHT", "decimals": 2 },
    { "addr": "0x865d176351f287fe1b0010805b110d08699c200a", "name": "BCO", "decimals": 8 },
    { "addr": "0x881ef48211982d01e2cb7092c915e647cd40d85c", "name": "OTN", "decimals": 18 },
    { "addr": "0x48f775efbe4f5ece6e0df2f7b5932df56823b990", "name": "R", "decimals": 0 },
    { "addr": "0xa51153d9cf9d3cf6d58697b68eccc158d1e40388", "name": "PME", "decimals": 18 },
    { "addr": "0xb23be73573bc7e03db6e5dfc62405368716d28a8", "name": "ONEK", "decimals": 18 },
    { "addr": "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104", "name": "ZAP", "decimals": 18 },
    { "addr": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c", "name": "ENJ", "decimals": 18 },
    { "addr": "0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e", "name": "SOAR", "decimals": 6 },
    { "addr": "0xafe60511341a37488de25bef351952562e31fcc1", "name": "TBT", "decimals": 8 },
    { "addr": "0x1db186898bccde66fa64a50e4d81078951a30dbe", "name": "LLA", "decimals": 18 },
    { "addr": "0xb0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5", "name": "ARXAI", "decimals": 18 },
    { "addr": "0x24aef3bf1a47561500f9430d74ed4097c47f51f2", "name": "SPARTA", "decimals": 4 },
    { "addr": "0xd884f9881e0aeabad79be8a69122cf998d067fff", "name": "RUB", "decimals": 18 },
    { "addr": "0x5ca71ea65acb6293e71e62c41b720698b0aa611c", "name": "BBD", "decimals": 18 },
    { "addr": "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724", "name": "VIB", "decimals": 18 },
    { "addr": "0x473319898464ca640af692a0534175981ab78aa1", "name": "POKT", "decimals": 4 },
    { "addr": "0x3a26746ddb79b1b8e4450e3f4ffe3285a307387e", "name": "ETHB", "decimals": 8 },
    { "addr": "0x6fff3806bbac52a20e0d79bc538d527f6a22c96b", "name": "CDX", "decimals": 18 },
    { "addr": "0xb62d18dea74045e822352ce4b3ee77319dc5ff2f", "name": "EVC", "decimals": 18 },
    { "addr": "0x7d49eaac4c70abc1a659122f08c0806ae44703ef", "name": "DET", "decimals": 18 },
    { "addr": "0x614ea929892ea43d3ea2c5e3311b01cc589bad6c", "name": "ENO", "decimals": 18 },
    { "addr": "0x64c86899bc02dd9af823b131e5acd4369f72bd39", "name": "RENT", "decimals": 18 },
    { "addr": "0xf94e44d8ea46ccd8451d7e15264c6c4a78d3e10f", "name": "KSS", "decimals": 18 },
    { "addr": "0x32c785e4e8477b277fea2ca2301727084d79d933", "name": "NUGD", "decimals": 0 },
    { "addr": "0x84c2c31c04339c9938adfe3f8013315c8906f071", "name": "EBCSH", "decimals": 18 },
    { "addr": "0x44f12955189e3f01be5daf1dd9002ee4d774f42b", "name": "AFST", "decimals": 18 },
    { "addr": "0x6f1a769952c60b2d03f46419adeda91d87866dab", "name": "ELTC", "decimals": 18 },
    { "addr": "0x415116bad878730f5db008ff381a73222128ad39", "name": "EBCHB", "decimals": 18 },
    { "addr": "0x2f1b8c9d0a21b747d8ca370f93cb09d3daf222ef", "name": "EXRP", "decimals": 18 },
    { "addr": "0x01a28adc0edd796b570ec4da734e1aa809f6f1fc", "name": "EDASH", "decimals": 18 },
    { "addr": "0x0c6c9beeeb5de377210930f09a7ac9a99ff5e981", "name": "EZEC", "decimals": 18 },
    { "addr": "0xb915ff79170d606935bceaf000d77ca4ed92d993", "name": "ENEO", "decimals": 18 },
    { "addr": "0x7e9d62e1ff4e34096f91ee0153222ab81f7184f0", "name": "ELTC2", "decimals": 8 },
    { "addr": "0x1f103fd7c4fa908c25387da70ed287b632bd22a2", "name": "ELTC3", "decimals": 18 },
    { "addr": "0xb518d165398d9057ea8b73096edda5c7754bcd62", "name": "EXRP2", "decimals": 18 },
    { "addr": "0xf923ba61b43161a83afe2cab7d77ea1e41f27918", "name": "PAL", "decimals": 18 },
    { "addr": "0xe26517a9967299453d3f1b48aa005e6127e67210", "name": "NIMFA", "decimals": 18 },
    { "addr": "0x09debe702678140c1be278213109719fab98d0d8", "name": "MOL", "decimals": 18 },
    { "addr": "0xb17df9a3b09583a9bdcf757d6367171476d4d8a3", "name": "MVC", "decimals": 18 },
    { "addr": "0x90528aeb3a2b736b780fd1b6c478bb7e1d643170", "name": "XPA", "decimals": 18 },
    { "addr": "0x0a76aad21948ea1ef447d26dee91a54370e151e0", "name": "ELITE", "decimals": 18 },
    { "addr": "0xa51d948ff15fbabac476af160cba6901ce47f4b0", "name": "LNT", "decimals": 18 },
    { "addr": "0x014b50466590340d41307cc54dcee990c8d58aa8", "name": "ICOS", "decimals": 6 },
    { "addr": "0xedf2d3e5fb70ead2e6d8fe96845a5e59d52d2044", "name": "NCH", "decimals": 12 },
    { "addr": "0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61", "name": "PLY", "decimals": 18 },
    { "addr": "0xc42209accc14029c1012fb5680d95fbd6036e2a0", "name": "PPP", "decimals": 18 },
    { "addr": "0xae4191a7eb25713ac90483ea75828ae8038f94dc", "name": "EZEC2", "decimals": 18 },
    { "addr": "0xb2bfeb70b903f1baac7f2ba2c62934c7e5b974c4", "name": "BKB", "decimals": 8 },
    { "addr": "0xe66cc41dd03a170623dc087a69ad8d72e64cb838", "name": "BTH2", "decimals": 18 },
    { "addr": "0xafc39788c51f0c1ff7b55317f3e70299e521fff6", "name": "EBCH", "decimals": 8 },
    { "addr": "0x27054b13b1b798b345b591a4d22e6562d47ea75a", "name": "AST", "decimals": 4 },
    { "addr": "0x5d21ef5f25a985380b65c8e943a0082feda0db84", "name": "ECASH", "decimals": 18 },
    { "addr": "0xf152fca41bd23ff250292af391236db35e0e99c3", "name": "EETH", "decimals": 8 },
    { "addr": "0x37f014c64d186eaf879c0033846b51924ce42584", "name": "MDT", "decimals": 0 },
    { "addr": "0xfd784da5c740c617aafb80399fa81b86e1da99a5", "name": "ITS", "decimals": 8 },
    { "addr": "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4", "name": "ENG", "decimals": 8 },
    { "addr": "0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2", "name": "ACC", "decimals": 18 },
    { "addr": "0x6025f65f6b2f93d8ed1efedc752acfd4bdbcec3e", "name": "EGOLD", "decimals": 18 },
    { "addr": "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3", "name": "FLP", "decimals": 18 },
    { "addr": "0x90c88ccd74e57e016acae8ad1eaa12ecf4c06f33", "name": "IBTC", "decimals": 18 },
    { "addr": "0xc51c938c4d513780c66c722a41c197d3a89fa9a8", "name": "EBTG", "decimals": 8 },
    { "addr": "0x8f8221afbb33998d8584a2b05749ba73c37a938a", "name": "REQ", "decimals": 18 },
    { "addr": "0x72adadb447784dd7ab1f472467750fc485e4cb2d", "name": "WRC", "decimals": 6 },
    { "addr": "0x9b6443b0fb9c241a7fdac375595cea13e6b7807a", "name": "RCC", "decimals": 18 },
    { "addr": "0xdee667186e7b81ecf7efc8713382d8d99a8b92b4", "name": "EBCG", "decimals": 18 },
    { "addr": "0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd", "name": "BTCM", "decimals": 18 },
    { "addr": "0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466", "name": "AION", "decimals": 8 },
    { "addr": "0x179a2e413386db620d5b89a18550a3874385f726", "name": "FIT", "decimals": 5 },
    { "addr": "0xdf1ce35938f9ca2eab682284f82a81a9d25665ce", "name": "STM", "decimals": 18 },
    { "addr": "0x87611ca3403a3878dfef0da2a786e209abfc1eff", "name": "EUSD", "decimals": 8 },
    { "addr": "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6", "name": "ETG", "decimals": 0 },
    { "addr": "0x9541fd8b9b5fa97381783783cebf2f5fa793c262", "name": "KZN", "decimals": 8 },
    { "addr": "0xa8f93faee440644f89059a2c88bdc9bf3be5e2ea", "name": "CASH", "decimals": 18 },
    { "addr": "0xea38eaa3c86c8f9b751533ba2e562deb9acded40", "name": "FUEL", "decimals": 18 },
    { "addr": "0xced4e93198734ddaff8492d525bd258d49eb388e", "name": "EDO", "decimals": 18 },
    { "addr": "0xd96b9fd7586d9ea24c950d24399be4fb65372fdd", "name": "BTCS", "decimals": 18 },
    { "addr": "0xe701cd3329057aea9d54300ddd05e41b8d74727a", "name": "10MT", "decimals": 10 },
    { "addr": "0x15f173b7aca7cd4a01d6f8360e65fb4491d270c1", "name": "EREAL", "decimals": 18 },
    { "addr": "0x331a550a2c7f96384eb69127aa0ea9ad4b5da099", "name": "ATMT", "decimals": 18 },
    { "addr": "0xae258d5322b59d64df9eb483e3b1733332c3b66c", "name": "ETHG", "decimals": 8 },
    { "addr": "0xa89b5934863447f6e4fc53b315a93e873bda69a3", "name": "LUM", "decimals": 18 },
    { "addr": "0xe463d10ec6b4ff6a3e5be41144956116ca30d4c3", "name": "7YPE", "decimals": 0 },
    { "addr": "0x7d4b8cce0591c9044a22ee543533b72e976e36c3", "name": "CAG", "decimals": 18 },
    { "addr": "0x4cd988afbad37289baaf53c13e98e2bd46aaea8c", "name": "KEY", "decimals": 18 },
    { "addr": "0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c", "name": "NULS", "decimals": 18 },
    { "addr": "0xf8fa1a588cd8cd51c3c4d6dc16d2717f6332e821", "name": "BXC", "decimals": 2 },
    { "addr": "0x1c4481750daa5ff521a2a7490d9981ed46465dbd", "name": "BCPT", "decimals": 18 },
    { "addr": "0x58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8", "name": "GXC", "decimals": 10 },
    { "addr": "0x9397554c07f687b7a20d13c73350cc283765d509", "name": "SHLD", "decimals": 18 },
    { "addr": "0x539efe69bcdd21a83efd9122571a64cc25e0282b", "name": "BLUE", "decimals": 8 },
    { "addr": "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab", "name": "DRT", "decimals": 8 },
    { "addr": "0xde39e5e5a1b0eeb3afe717d6d011cae88d19451e", "name": "FUDD", "decimals": 8 },
    { "addr": "0xfcb48fdcc479b38068c06ee94249b1516adf09cb", "name": "EURB", "decimals": 5 },
    { "addr": "0x7a79abd3905ef37b8d243c4c28cee73a751eb076", "name": "CM", "decimals": 18 },
    { "addr": "0xebc86d834756621444a8a26b4cf81b625fe310cd", "name": "ETHP", "decimals": 18 },
    { "addr": "0xce59d29b09aae565feeef8e52f47c3cd5368c663", "name": "BULX", "decimals": 18 },
    { "addr": "0x26607f9bf9d62a37b0c78e1d3719fcd1fa32bef9", "name": "GFL", "decimals": 18 },
    { "addr": "0x9dfe4643c04078a46803edcc30a3291b76d4c20c", "name": "GEN", "decimals": 18 },
    { "addr": "0xdded69d8e28d38d640f6244ab5294f309fd40ce1", "name": "LMT", "decimals": 8 },
    { "addr": "0x705ee96c1c160842c92c1aecfcffccc9c412e3d9", "name": "POLL", "decimals": 18 },
    { "addr": "0xc78593c17482ea5de44fdd84896ffd903972878e", "name": "BB", "decimals": 9 },
    { "addr": "0xc3972ac283b3a7a56125674631a5c254f7f373cf", "name": "HAT", "decimals": 12 },
    { "addr": "0xf2e51e32d1f546423364a040ef1a6d2f05e31482", "name": "HUBC", "decimals": 6 },
    { "addr": "0xffe8196bc259e8dedc544d935786aa4709ec3e64", "name": "HDG", "decimals": 18 },
    { "addr": "0x7728dfef5abd468669eb7f9b48a7f70a501ed29d", "name": "PRG", "decimals": 6 },
    { "addr": "0x1183f92a5624d68e85ffb9170f16bf0443b4c242", "name": "QVT", "decimals": 18 },
    { "addr": "0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b", "name": "IETH", "decimals": 8 },
    { "addr": "0x76e82406a5040b605c6d30caf4802e7eb3184bbc", "name": "EBCC", "decimals": 6 },
    { "addr": "0x1040613788e99c1606bd133db0ed7f7dbdf0cc80", "name": "STH", "decimals": 0 },
    { "addr": "0x63b992e6246d88f07fc35a056d2c365e6d441a3d", "name": "SCT", "decimals": 18 },
    { "addr": "0xdbfb423e9bbf16294388e07696a5120e4ceba0c5", "name": "ETHD", "decimals": 18 },
    { "addr": "0x91126cfa7db2983527b0b749cc8a61fdeffedc28", "name": "DONE", "decimals": 16 },
    { "addr": "0xbc63acdfafa94bd4d8c2bb7a8552281f107242c0", "name": "MXX", "decimals": 18 },
    { "addr": "0x56e7f2cd7d5382506aab084a67d70e603cdb23f7", "name": "CODE", "decimals": 8 },
    { "addr": "0x6d7a4c14c997333e304d5aef2aece73fd60ecc59", "name": "WNDOLD", "decimals": 18 },
    { "addr": "0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11", "name": "BTCRED", "decimals": 8 },
    { "addr": "0x0879e0c9822b75f31f0b0ed2a30be9f484a57c2f", "name": "LTG", "decimals": 0 },
    { "addr": "0x044dd17bbbcbf1cf65f543918561bf8cf8130e7b", "name": "EGR", "decimals": 3 },
    { "addr": "0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e", "name": "MOD", "decimals": 0 },
    { "addr": "0x52a17ca01b9925752aefde41bf80d7b10514e136", "name": "PUMP", "decimals": 15 },
    { "addr": "0xe81d72d14b1516e68ac3190a46c93302cc8ed60f", "name": "CL", "decimals": 18 },
    { "addr": "0x8c01ada8e708993a891d57d1b3169479a20acb3a", "name": "VIT", "decimals": 18 },
    { "addr": "0x2405cc17ba128bfa7117815e04a4da228013f5bc", "name": "BNN", "decimals": 8 },
    { "addr": "0x983877018633c0940b183cd38d1b58bee34f7301", "name": "DEEP", "decimals": 8 },
    { "addr": "0xcedbf324a1eb1affe53ab7b7ef0103e070e3853f", "name": "ETL", "decimals": 10 },
    { "addr": "0x4fbc28e3b3c1c50ee05dcd66d9fc614a0cb99705", "name": "HHT", "decimals": 18 },
    { "addr": "0xe469c4473af82217b30cf17b10bcdb6c8c796e75", "name": "EXRN", "decimals": 0 },
    { "addr": "0x0886949c1b8c412860c4264ceb8083d1365e86cf", "name": "BTCE", "decimals": 8 },
    { "addr": "0xd6adc5e386d499361ccc5752f791b45132e7e6e4", "name": "MSC", "decimals": 0 },
    { "addr": "0x5783862cef49094be4de1fe31280b2e33cf87416", "name": "KRT", "decimals": 4 },
    { "addr": "0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9", "name": "EAGLE", "decimals": 18 },
    { "addr": "0x62a56a4a2ef4d355d34d10fbf837e747504d38d4", "name": "PAYX", "decimals": 2 },
    { "addr": "0xc79d440551a03f84f863b1f259f135794c8a7190", "name": "MGX", "decimals": 18 },
    { "addr": "0x4e279d8638e8669fad40e018fc181d26ee780380", "name": "ETV", "decimals": 8 },
    { "addr": "0xb554cf51cda0fccd5012d55737c4df55a3e18a5c", "name": "MLK", "decimals": 8 },
    { "addr": "0x4c382f8e09615ac86e08ce58266cc227e7d4d913", "name": "SKR", "decimals": 6 },
    { "addr": "0x9375b738083101617f0642d7dbeaa89e361545e3", "name": "ESMS", "decimals": 0 },
    { "addr": "0xb8742486c723793cf5162bb5d3425ed9cd73d049", "name": "TCASH", "decimals": 8 },
    { "addr": "0x44e6d9ae9053a16e9311fd9702291c5516804359", "name": "EBTGOLD", "decimals": 0 },
    { "addr": "0xef25e54e1ae9bfd966b9b5cde6880e7a2323a957", "name": "SOCIAL", "decimals": 18 },
    { "addr": "0x5046e860ff274fb8c66106b0ffb8155849fb0787", "name": "JS", "decimals": 8 },
    { "addr": "0x5f6e7fb7fe92ea7822472bb0e8f1be60d6a4ea50", "name": "ARTE", "decimals": 18 },
    { "addr": "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf", "name": "LA", "decimals": 18 },
    { "addr": "0x0cf0ee63788a0849fe5297f3407f701e122cc023", "name": "DATA", "decimals": 18 },
    { "addr": "0xdb45faeca61c70e271bffeaf66162fa68a1c4def", "name": "EBIT", "decimals": 0 },
    { "addr": "0x8633e144f2d9b9b8bdd12ddb58e4bef1e163a0ce", "name": "YEL", "decimals": 18 },
    { "addr": "0xae4f56f072c34c0a65b3ae3e4db797d831439d93", "name": "GIM", "decimals": 8 },
    { "addr": "0xe2f45f1660dc99daf3bd06f637ab1e4debc15bde", "name": "SGG", "decimals": 6 },
    { "addr": "0xb3bd49e28f8f832b8d1e246106991e546c323502", "name": "GMT", "decimals": 18 },
    { "addr": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6", "name": "RCN", "decimals": 18 },
    { "addr": "0xbf430e24ac0f33d4ad6fac9654b37943124c2786", "name": "IBTG", "decimals": 8 },
    { "addr": "0x6b9e8076a536459303db301ba4430913a7f14c5a", "name": "JDI", "decimals": 2 },
    { "addr": "0x2edc6fcc641f0169d54abb842f96f701eae85e4e", "name": "ADUOLD", "decimals": 18 },
    { "addr": "0xba5f11b16b155792cf3b2e6880e8706859a8aeb6", "name": "ARN", "decimals": 8 },
    { "addr": "0x9501bfc48897dceeadf73113ef635d2ff7ee4b97", "name": "EMT", "decimals": 18 },
    { "addr": "0xa6e2f7f33f01fb399e72f3e044196eab7d348012", "name": "AMO", "decimals": 4 },
    { "addr": "0x22c10728343e9d49ef25080f74a223878a3d4052", "name": "DRP2", "decimals": 8 },
    { "addr": "0xac3211a5025414af2866ff09c23fc18bc97e79b1", "name": "DOVU", "decimals": 18 },
    { "addr": "0x662abcad0b7f345ab7ffb1b1fbb9df7894f18e66", "name": "CTX", "decimals": 18 },
    { "addr": "0x8bf8bcf8aba5ecffffd431489fe79dad38023a9b", "name": "BUS", "decimals": 8 },
    { "addr": "0xa8ba4095833a3f924d86cb3941099c1abb75ea13", "name": "SUB1X", "decimals": 18 },
    { "addr": "0x638ac149ea8ef9a1286c41b977017aa7359e6cfa", "name": "ALTS", "decimals": 18 },
    { "addr": "0xff18dbc487b4c2e3222d115952babfda8ba52f5f", "name": "LIFE", "decimals": 18 },
    { "addr": "0x181a63746d3adcf356cbc73ace22832ffbb1ee5a", "name": "ALCO", "decimals": 8 },
    { "addr": "0x8f0921f30555624143d427b340b1156914882c10", "name": "FYP", "decimals": 18 },
    { "addr": "0xfa2632a88bd0c11535a38f98a98db8251ccbaa9e", "name": "GTA", "decimals": 18 },
    { "addr": "0x8e10f6bb9c973d61321c25a2b8d865825f4aa57b", "name": "0ED", "decimals": 18 },
    { "addr": "0x03df4c372a29376d2c8df33a1b5f001cd8d68b0e", "name": "BITCOINEREUM", "decimals": 8 },
    { "addr": "0xbb1b3e8ddded8165d58b0c192d19cd360682b170", "name": "CAS", "decimals": 2 },
    { "addr": "0x49aec0752e68d0282db544c677f6ba407ba17ed7", "name": "XBL", "decimals": 18 },
    { "addr": "0x8f070b17dd3953634e9e9c174d0f05396f681bc1", "name": "CCP", "decimals": 18 },
    { "addr": "0xe58aff48f738b4a719d1790587cdc91a3560d7e1", "name": "TMP", "decimals": 7 },
    { "addr": "0x87ae38d63a6bbb63e46219f494b549e3be7fc400", "name": "LAP", "decimals": 8 },
    { "addr": "0x7f2176ceb16dcb648dc924eff617c3dc2befd30d", "name": "OHNI", "decimals": 0 },
    { "addr": "0x2233799ee2683d75dfefacbcd2a26c78d34b470d", "name": "NTWK", "decimals": 18 },
    { "addr": "0x9b8eb7a73a3c65fc3c892b494ab29cb061cf05ae", "name": "1BIT", "decimals": 0 },
    { "addr": "0x580d69737e11cf2fb306c8fc0161b86f7c9f03ba", "name": "NEBO", "decimals": 3 },
    { "addr": "0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb", "name": "ERC20", "decimals": 18 },
    { "addr": "0xfb4752ad1b7153e1dbd2e6662651a11c7fc14083", "name": "MPESA", "decimals": 8 },
    { "addr": "0x27537ff4df3081cef9bee9b29cac764067b42611", "name": "SLIP", "decimals": 0 },
    { "addr": "0xba71b32e71a41339aa4ceaa79528535aefe488d8", "name": "ALIEF", "decimals": 0 },
    { "addr": "0xc9b89f6b5301f554b9adc6d4a871c3279820de40", "name": "HAO", "decimals": 18 },
    { "addr": "0xd9a0658b7cc9ec0c57e8b20c0920d08f17e747be", "name": "SAT", "decimals": 10 },
    { "addr": "0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63", "name": "ZSC", "decimals": 18 },
    { "addr": "0x999967e2ec8a74b7c8e9db19e039d920b31d39d0", "name": "TIE", "decimals": 18 },
    { "addr": "0x8bbf4dd0f11b3a535660fd7fcb7158daebd3a17e", "name": "EGASOLD", "decimals": 8 },
    { "addr": "0xb53a96bcbdd9cf78dff20bab6c2be7baec8f00f8", "name": "EGAS", "decimals": 8 },
    { "addr": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce", "name": "AMB", "decimals": 18 },
    { "addr": "0xe3fa177acecfb86721cf6f9f4206bd3bd672d7d5", "name": "CTT", "decimals": 18 },
    { "addr": "0xeb7c20027172e5d143fb030d50f91cece2d1485d", "name": "EBTC", "decimals": 8 },
    { "addr": "0x9742fa8cb51d294c8267ddfead8582e16f18e421", "name": "10MTI", "decimals": 10 },
    { "addr": "0x52a7cb918c11a16958be40cba7e31e32a499a465", "name": "FDX", "decimals": 18 },
    { "addr": "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd", "name": "GRID", "decimals": 12 },
    { "addr": "0x16b5a0de0520e1964a20ac8ef4034bd7d0920d8f", "name": "TIOTOUR", "decimals": 18 },
    { "addr": "0xf6b55acbbc49f4524aa48d19281a9a77c54de10f", "name": "WLK", "decimals": 18 },
    { "addr": "0x60200c0fefc1d0ade1e19a247b703cf3ccdc915a", "name": "TWIT", "decimals": 8 },
    { "addr": "0xc99ddc30bb0cf76b07d90dcb6b267b8352697bef", "name": "TDT", "decimals": 18 },
    { "addr": "0x2f5e044ad4adac34c8d8df738fac7743eda1409c", "name": "AGO", "decimals": 18 },
    { "addr": "0xb444208cb0516c150178fcf9a52604bc04a1acea", "name": "GRMD", "decimals": 18 },
    { "addr": "0x4d829f8c92a6691c56300d020c9e0db984cfe2ba", "name": "XCC", "decimals": 18 },
    { "addr": "0x76195ffd0cfedf68625b3e5b64c7bd904eeb9d6c", "name": "WETOLD", "decimals": 18 },
    { "addr": "0x0425cbbc5ff784203fe8d82beefa2b02634351f5", "name": "FBR", "decimals": 18 },
    { "addr": "0x01c67791309c71aa4ed373025a0c089696d7c9e4", "name": "CCB", "decimals": 18 },
    { "addr": "0x944f1a04ab8d735acdbc46505c5b283f54289152", "name": "GBTS", "decimals": 18 },
    { "addr": "0x4a536c1ce7ad7f6e8d2e59135e17aef5ef4dd4e6", "name": "GEC", "decimals": 3 },
    { "addr": "0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1", "name": "DGPT", "decimals": 18 },
    { "addr": "0x3293cc907fde439b39aedaf1b982785adaff186b", "name": "TRIA", "decimals": 10 },
    { "addr": "0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393", "name": "B2B", "decimals": 18 },
    { "addr": "0x44197a4c44d6a059297caf6be4f7e172bd56caaf", "name": "ELTCOIN", "decimals": 8 },
    { "addr": "0x5554e04e76533e1d14c52f05beef6c9d329e1e30", "name": "NIO", "decimals": 0 },
    { "addr": "0x14fffb1e001615b7fb7c7857bdf440a610022e5b", "name": "SCX", "decimals": 0 },
    { "addr": "0x275fd328c3986be83f8b60f79c73cf63fde98ca5", "name": "CSL", "decimals": 18 },
    { "addr": "0x103c3a209da59d3e7c4a89307e66521e081cfdf0", "name": "GVT", "decimals": 18 },
    { "addr": "0x44f588aeeb8c44471439d1270b3603c66a9262f1", "name": "SNIP", "decimals": 18 },
    { "addr": "0x45321004790a4dae7ba19217a10574d55739efc7", "name": "DEEM", "decimals": 18 },
    { "addr": "0x12a35383ca24ceb44cdcbbecbeb7baccb5f3754a", "name": "CS", "decimals": 6 },
    { "addr": "0xe30e02f049957e2a5907589e06ba646fb2c321ba", "name": "DRPU", "decimals": 8 },
    { "addr": "0x3e250a4f78410c29cfc39463a81f14a226690eb4", "name": "DRPS", "decimals": 8 },
    { "addr": "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b", "name": "UKG", "decimals": 18 },
    { "addr": "0x595832f8fc6bf59c85c527fec3740a1b7a361269", "name": "POWR", "decimals": 6 },
    { "addr": "0x9c1d13d5a8fd4a8ac89917d31d40db454d1ee60b", "name": "ELUNCH", "decimals": 18 },
    { "addr": "0x180e5087935a94fd5bbab00fd2249c5be0473381", "name": "ZCG", "decimals": 8 },
    { "addr": "0x14839bf22810f09fb163af69bd21bd5476f445cd", "name": "CFD", "decimals": 18 },
    { "addr": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6", "name": "RDN", "decimals": 18 },
    { "addr": "0xd3e2f9dfff5a6feeece5dbcee3b86cb375fd8c98", "name": "BCOIN", "decimals": 8 },
    { "addr": "0xc029ba3dc12e1834571e821d94a07de0a01138ea", "name": "QBE", "decimals": 18 },
    { "addr": "0x00a0cbe98e4d110b0fa82646152d77babf2951d0", "name": "EETHER", "decimals": 18 },
    { "addr": "0x9c23a568a32e8434ec88bdf60891a1d95ffd36cc", "name": "CHUCK", "decimals": 4 },
    { "addr": "0xd819e892f4df8659188e8bda839fdf2215a513bc", "name": "SPOON", "decimals": 18 },
    { "addr": "0xd2308446536a0bad028ab8c090d62e1ea2a51f24", "name": "GNEISS", "decimals": 0 },
    { "addr": "0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d", "name": "EPY", "decimals": 8 },
    { "addr": "0x7627de4b93263a6a7570b8dafa64bae812e5c394", "name": "NXX", "decimals": 8 },
    { "addr": "0x6f6deb5db0c4994a8283a01d6cfeeb27fc3bbe9c", "name": "SMART", "decimals": 0 },
    { "addr": "0x8b1f49491477e0fb46a29fef53f1ea320d13c349", "name": "AMM", "decimals": 6 },
    { "addr": "0x8866d52303e372c2a2936d8ea09afd87bcbd8cf2", "name": "TPL", "decimals": 10 },
    { "addr": "0x1245ef80f4d9e02ed9425375e8f649b9221b31d8", "name": "ARCT", "decimals": 8 },
    { "addr": "0xdd007278b667f6bef52fd0a4c23604aa1f96039a", "name": "RIPT", "decimals": 8 },
    { "addr": "0xa5a283557653f36cf9aa0d5cc74b1e30422349f2", "name": "UETL", "decimals": 8 },
    { "addr": "0x93e24ce396a9e7d7de4a5bc616cf5fcab0476626", "name": "ZIP", "decimals": 8 },
    { "addr": "0x399a0e6fbeb3d74c85357439f4c8aed9678a5cbf", "name": "DCL", "decimals": 3 },
    { "addr": "0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5", "name": "VIU", "decimals": 18 },
    { "addr": "0x86410db4d61c40a8e1df9f859069d5a15896195b", "name": "DJC", "decimals": 18 },
    { "addr": "0x7c53f13699e1f6ef5c699e893a20948bdd2e4de9", "name": "DVD", "decimals": 18 },
    { "addr": "0x554c20b7c486beee439277b4540a434566dc4c02", "name": "HST", "decimals": 18 },
    { "addr": "0x420c42ce1370c0ec3ca87d9be64a7002e78e6709", "name": "STCN", "decimals": 0 },
    { "addr": "0xa94c128a138504e1f81d727cc21bcb9ae6581015", "name": "FDM", "decimals": 18 },
    { "addr": "0xe8c5e942b76099c0c6d78271bad3ca002fa7c531", "name": "HELP", "decimals": 0 },
    { "addr": "0xf24d3dfffcaf9f9a5dda9c57eeeb1ac0bba49c86", "name": "XMAS", "decimals": 18 },
    { "addr": "0x7b1309c1522afd4e66c31e1e6d0ec1319e1eba5e", "name": "BLN", "decimals": 18 },
    { "addr": "0x7731ee8b0b0ab88977be7922849eb767bbe8da15", "name": "ABSOLD", "decimals": 18 },
    { "addr": "0xc6b014274d7406641711fb8889f93f4f11dec810", "name": "NAO", "decimals": 18 },
    { "addr": "0x28481cdc0e4fa79164491d47e8837edeb3993f20", "name": "TSS", "decimals": 18 },
    { "addr": "0x7d3e7d41da367b4fdce7cbe06502b13294deb758", "name": "SSS", "decimals": 8 },
    { "addr": "0x1500205f50bf3fd976466d0662905c9ff254fc9c", "name": "BBT", "decimals": 4 },
    { "addr": "0x3485b9566097ad656c70d6ebbd1cd044e2e72d05", "name": "PNKOLD", "decimals": 0 },
    { "addr": "0x013a06558f07d9e6f9a00c95a33f3a0e0255176b", "name": "BALI", "decimals": 18 },
    { "addr": "0xaf55f3b7dc65c8f9577cf00c8c5ca7b6e8cc4433", "name": "ENTRC", "decimals": 8 },
    { "addr": "0x7259fddca8d5f0184b3b12aa7e8401964b703a4f", "name": "HYTV", "decimals": 3 },
    { "addr": "0xea097a2b1db00627b2fa17460ad260c016016977", "name": "UFR", "decimals": 18 },
    { "addr": "0x6733d909e10ddedb8d6181b213de32a30ceac7ed", "name": "BTSE", "decimals": 18 },
    { "addr": "0x449574c69f3a658794829ed81639a7a9ece041e1", "name": "NEOG", "decimals": 0 },
    { "addr": "0xc0c2ee1ce1fed8f6e2764363a36db3dd4cf10022", "name": "FBL", "decimals": 2 },
    { "addr": "0xcbce61316759d807c474441952ce41985bbc5a40", "name": "MOAC", "decimals": 18 },
    { "addr": "0xea642206310400cda4c1c5b8e7945314aa96b8a7", "name": "MINT", "decimals": 18 },
    { "addr": "0x0b24fdf35876bbe2a1cc925321b8c301017474d4", "name": "JWT", "decimals": 0 },
    { "addr": "0x0835ecd15ddf08d4786304d71b4672dc5c40f011", "name": "PLC", "decimals": 18 },
    { "addr": "0xc5cea8292e514405967d958c2325106f2f48da77", "name": "PRFT", "decimals": 18 },
    { "addr": "0xd024645809f74043cd2133c6afeb46f0de4ad88f", "name": "DEER", "decimals": 18 },
    { "addr": "0x3d46454212c61ecb7b31248047fa033120b88668", "name": "MVT", "decimals": 18 },
    { "addr": "0x38d1c39c3e85dbf0fc2f2d637a4872530ad07a5f", "name": "NDO", "decimals": 4 },
    { "addr": "0x219218f117dc9348b358b8471c55a073e5e0da0b", "name": "GRX", "decimals": 18 },
    { "addr": "0xcb5a05bef3257613e984c17dbcf039952b6d883f", "name": "SGR", "decimals": 8 },
    { "addr": "0x7b22938ca841aa392c93dbb7f4c42178e3d65e88", "name": "ASTRO", "decimals": 4 },
    { "addr": "0xb203b5495109c6c85615ebb2056f98301d470507", "name": "TRASH", "decimals": 3 },
    { "addr": "0x74ceda77281b339142a36817fa5f9e29412bab85", "name": "ERO", "decimals": 8 },
    { "addr": "0xd04963de435bd4d25b1cc8f05870f49edbfc8c18", "name": "SNI", "decimals": 18 },
    { "addr": "0x5e3346444010135322268a4630d2ed5f8d09446c", "name": "LOC", "decimals": 18 },
    { "addr": "0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a", "name": "PRIX", "decimals": 8 },
    { "addr": "0x0ffab58ea5a71cc3ca40217706c3c401407fa4a8", "name": "INDIOLD", "decimals": 18 },
    { "addr": "0xa119f0f5fd06ebadff8883c0f3c40b2d22e7a44f", "name": "CRTM", "decimals": 8 },
    { "addr": "0xe4c07f4637df3a0354f9b42a1b3178dc573b8926", "name": "CZT", "decimals": 0 },
    { "addr": "0x1d10997e92011398a20612f9ee87e33449bc1fe4", "name": "1KT", "decimals": 18 },
    { "addr": "0x2dbe0f03f1dddbdbc87557e86df3878ae25af855", "name": "RC", "decimals": 8 },
    { "addr": "0x164f64ef2a44444743c5472fa68fb3784060d286", "name": "T8C", "decimals": 3 },
    { "addr": "0xc324a2f6b05880503444451b8b27e6f9e63287cb", "name": "XUC", "decimals": 18 },
    { "addr": "0x37256d58e298cacaa82aa0527d56521f1b19e1f5", "name": "EALP", "decimals": 18 },
    { "addr": "0xc98e0639c6d2ec037a615341c369666b110e80e5", "name": "EXMR", "decimals": 8 },
    { "addr": "0x6e58b4c41cab75dc0239938bf5455ab8823ee4de", "name": "B2XOLD", "decimals": 8 },
    { "addr": "0x9b68bfae21df5a510931a262cecf63f41338f264", "name": "DBET", "decimals": 18 },
    { "addr": "0x9c3a2334d8d7a8b9013c0e572a5bbdfc2fc69063", "name": "LCC", "decimals": 18 },
    { "addr": "0x189c05c3c191015c694032e1b09c190d5db3fb50", "name": "READ", "decimals": 8 },
    { "addr": "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae", "name": "ONG", "decimals": 18 },
    { "addr": "0x70838403ecc194b73e50b70a177b2ef413a2f421", "name": "BZX", "decimals": 18 },
    { "addr": "0xdfbd6a960a55bcfcf59d5925351e05a51498bcef", "name": "ROCK", "decimals": 0 },
    { "addr": "0x71f7b56f9f8641f73ca71512a93857a7868d1443", "name": "KMR", "decimals": 18 },
    { "addr": "0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa", "name": "HQX", "decimals": 18 },
    { "addr": "0x9e386da8cdfcf8b9e7490e3f2a4589c570cb2b2f", "name": "RPIL", "decimals": 8 },
    { "addr": "0x19aea60e2fd6ac54ecf2576292c8fc7046429c37", "name": "HUB", "decimals": 18 },
    { "addr": "0x82b0e50478eeafde392d45d1259ed1071b6fda81", "name": "DNA", "decimals": 18 },
    { "addr": "0xa0aa85b54f8a7b09c845f13a09172b08925f3d54", "name": "SISA", "decimals": 18 },
    { "addr": "0x569cbdcc684edcc589939cc8f6b96e6abd9eb0f3", "name": "IGN", "decimals": 6 },
    { "addr": "0x2cfd4c10c075fa51649744245ec1d0aa3d567e23", "name": "IPY", "decimals": 8 },
    { "addr": "0x1844b21593262668b7248d0f57a220caaba46ab9", "name": "PRL", "decimals": 18 },
    { "addr": "0x149a23f3d1a1e61e1e3b7eddd27f32e01f9788c7", "name": "CARE", "decimals": 18 },
    { "addr": "0x15ef5b9447710eab904e63e6233ff540400d603f", "name": "BTC2X", "decimals": 8 },
    { "addr": "0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a", "name": "SWM", "decimals": 18 },
    { "addr": "0xd286603e0f5de621b510a36c78c7616c015656f2", "name": "BGIFT", "decimals": 18 },
    { "addr": "0x90b1b771d0814d607da104b988efa39288219d62", "name": "MEDI", "decimals": 18 },
    { "addr": "0xedcd82784027001d7af57a34501c65a25f97fee4", "name": "DATL", "decimals": 18 },
    { "addr": "0x7ea4c29d3d37f9b259be610b67b3125c4d095d02", "name": "CANADA", "decimals": 18 },
    { "addr": "0xbec8f6d667594fb181c9d68e5c80c910888be93d", "name": "STAKE", "decimals": 8 },
    { "addr": "0x9c9891f7795eb127ba4783b671573275ff3a83a9", "name": "B2X", "decimals": 8 },
    { "addr": "0xfad572db566e5234ac9fc3d570c4edc0050eaa92", "name": "BTHE", "decimals": 18 },
    { "addr": "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d", "name": "QSP", "decimals": 18 },
    { "addr": "0x11f8dd7699147566cf193596083d45c8f592c4ba", "name": "ETHC", "decimals": 0 },
    { "addr": "0xe25f0974fea47682f6a7386e4217da70512ec997", "name": "BRC", "decimals": 18 },
    { "addr": "0xbc9395973bd35a3b4bd924f050d2778c07506ecb", "name": "GREED", "decimals": 18 },
    { "addr": "0xd317ff47dc7e1423e5e050870a66332833e5fd88", "name": "PNY", "decimals": 0 },
    { "addr": "0xcc34366e3842ca1bd36c1f324d15257960fcc801", "name": "BON", "decimals": 18 },
    { "addr": "0x71f1bc89f38b241f3ebf0d5a013fa2850c63a1d4", "name": "ZDR", "decimals": 8 },
    { "addr": "0x1daaf3d62582639c6a7eabb467e2db9b56fafbbd", "name": "USD_S", "decimals": 18 },
    { "addr": "0xd0800859d6f4bc0210b7807e770bc44a9ece7372", "name": "USD_R", "decimals": 18 },
    { "addr": "0x1831887fbabf783910db128e60c41bfa016059d8", "name": "EUR_S", "decimals": 18 },
    { "addr": "0xe5a219d4db92a701e79b6e548803c8ce55138686", "name": "EUR_R", "decimals": 18 },
    { "addr": "0x1735fc2b89b80d1ae33c35dd55eae7fa7642f336", "name": "CAD_S", "decimals": 18 },
    { "addr": "0xf4522eda455814d43b003bc1c38501b04d65cc4a", "name": "CAD_R", "decimals": 18 },
    { "addr": "0xa9666166d3c7fd15e874801f99e9ad5bfb70c5cf", "name": "GBP_S", "decimals": 18 },
    { "addr": "0xdfe2bd1d3dcbb97804acf3ee85230e832c4a7b5d", "name": "GBP_R", "decimals": 18 },
    { "addr": "0x5f54c1512d036a0dd92744ee0a55ed183dde0484", "name": "JPY_S", "decimals": 18 },
    { "addr": "0x22a3d74c363379189b6cc059d8fbd888e98df5ec", "name": "JPY_R", "decimals": 18 },
    { "addr": "0x55648de19836338549130b1af587f16bea46f66b", "name": "PBL", "decimals": 18 },
    { "addr": "0xd7aa94f17d60be06414973a45ffa77efd6443f0f", "name": "BTCQ", "decimals": 8 },
    { "addr": "0x222728c202e7164dfbd127181d46409338c4328e", "name": "MIND", "decimals": 18 },
    { "addr": "0x1d9e20e581a5468644fe74ccb6a46278ef377f9e", "name": "CDRT", "decimals": 8 },
    { "addr": "0x4b4e611823702285fd526d7a8a3b0aa99ab2dbcd", "name": "HDLT", "decimals": 18 },
    { "addr": "0x42d6622dece394b54999fbd73d108123806f6a18", "name": "SPANK", "decimals": 18 },
    { "addr": "0x7b69b78cc7fee48202c208609ae6d1f78ce42e13", "name": "GOAL", "decimals": 18 },
    { "addr": "0x494bbaf0124285e6ecb4dfd9eac76e18a9bf470f", "name": "ETHX", "decimals": 18 },
    { "addr": "0x44830e5fbe354af3c1c8d405170c08d3bc8a2cd9", "name": "ETHCEN", "decimals": 8 },
    { "addr": "0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6", "name": "H2O", "decimals": 18 },
    { "addr": "0xa823e6722006afe99e91c30ff5295052fe6b8e32", "name": "NEU", "decimals": 18 },
    { "addr": "0xf04a8ac553fcedb5ba99a64799155826c136b0be", "name": "FLIXX", "decimals": 18 },
    { "addr": "0x39013f961c378f02c2b82a6e1d31e9812786fd9d", "name": "SMS", "decimals": 3 },
    { "addr": "0xffb99f90bcd96fe743796fd8eefaaa6617753e79", "name": "MMC2", "decimals": 0 },
    { "addr": "0x1175a66a5c3343bbf06aa818bb482ddec30858e0", "name": "CIX", "decimals": 18 },
    { "addr": "0x111111f7e9b1fe072ade438f77e1ce861c7ee4e3", "name": "CAT2", "decimals": 18 },
    { "addr": "0x5121e348e897daef1eef23959ab290e5557cf274", "name": "AI", "decimals": 18 },
    { "addr": "0x80fb784b7ed66730e8b1dbd9820afd29931aab03", "name": "LEND", "decimals": 18 },
    { "addr": "0x74951b677de32d596ee851a233336926e6a2cd09", "name": "WBA", "decimals": 7 },
    { "addr": "0x4632091b0dd0e0902d1fe0534e16eb7b20328d70", "name": "ULT", "decimals": 18 },
    { "addr": "0xa5d1e58ece1fc438d64e65769d2ab730143a4caf", "name": "RBM", "decimals": 18 },
    { "addr": "0x1b22c32cd936cb97c28c5690a0695a82abf688e6", "name": "WISH", "decimals": 18 },
    { "addr": "0x340d2bde5eb28c1eed91b2f790723e3b160613b7", "name": "VEE", "decimals": 18 },
    { "addr": "0x25432dd810730331498c22fbf6b98432e7ef3e66", "name": "BIO", "decimals": 18 },
    { "addr": "0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765", "name": "EDU", "decimals": 8 },
    { "addr": "0x5c5413bad5f6fdb0f4fcd1457e46ead8e01d73d3", "name": "UAHOLD", "decimals": 18 },
    { "addr": "0x0f9b1d1d39118480cf8b9575419ea4e5189c88dd", "name": "WET", "decimals": 0 },
    { "addr": "0x18edc1b644839eed61c69e624e96bbd469a2ef52", "name": "ELC", "decimals": 18 },
    { "addr": "0x9901ed1e649c4a77c7fff3dfd446ffe3464da747", "name": "ENT", "decimals": 18 },
    { "addr": "0x10c0337c42843e0b8ce743d7d5ff39b711f3ad82", "name": "WND", "decimals": 18 },
    { "addr": "0xee9704a1d61aa2c1401e2303ac7e1f81c29ed860", "name": "CLASH", "decimals": 0 },
    { "addr": "0x30cc0e266cf33b8eac6a99cbd98e39b890cfd69b", "name": "CLASSY", "decimals": 16 },
    { "addr": "0x13f11c9905a08ca76e3e853be63d4f0944326c72", "name": "DIVX", "decimals": 18 },
    { "addr": "0x9d5b592b687c887a5a34df5f9207adb2c2db3aec", "name": "ETBT", "decimals": 18 },
    { "addr": "0xb4b1d2c217ec0776584ce08d3dd98f90ededa44b", "name": "CO2", "decimals": 18 },
    { "addr": "0x0f513ffb4926ff82d7f60a05069047aca295c413", "name": "XSC", "decimals": 18 },
    { "addr": "0xbf4a29269bf3a5c351c2af3a9c9ed81b07129ce4", "name": "KEN", "decimals": 18 },
    { "addr": "0xc499ea948a1ad5d8eaf12abd2f67975c4dbe21aa", "name": "ANGL", "decimals": 18 },
    { "addr": "0x80e7a4d750ade616da896c49049b7ede9e04c191", "name": "ASTR", "decimals": 4 },
    { "addr": "0x5882d49d3511e09096cbbab7e19fbfb82f65f28d", "name": "BIONT", "decimals": 18 },
    { "addr": "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e", "name": "SWFTC", "decimals": 8 },
    { "addr": "0x679badc551626e01b23ceecefbc9b877ea18fc46", "name": "CCO", "decimals": 18 },
    { "addr": "0x08f8117155aa9414b67113a47ad269d47974e9dc", "name": "DHG", "decimals": 18 },
    { "addr": "0xb4c55b5a1faf5323e59842171c2492773a3783dd", "name": "BCDC", "decimals": 18 },
    { "addr": "0x31b5e97294e1afd6fff6ffe4cba89a344555f753", "name": "ALLY", "decimals": 18 },
    { "addr": "0xa25d01d15fc0e3cdede1bebee4124394aae0db33", "name": "FLLW", "decimals": 18 },
    { "addr": "0xbdc5bac39dbe132b1e030e898ae3830017d7d969", "name": "SNOV", "decimals": 18 },
    { "addr": "0x8ce9411df545d6b51a9bc52a89e0f6d1b54a06dd", "name": "ABS", "decimals": 0 },
    { "addr": "0x0af44e2784637218dd1d32a322d44e603a8f0c6a", "name": "MTX", "decimals": 18 },
    { "addr": "0x0f598112679b78e17a4a9febc83703710d33489c", "name": "XMRG", "decimals": 8 },
    { "addr": "0xfb7da9863e030495db8b4d067d665fc8433fff85", "name": "PCC", "decimals": 18 },
    { "addr": "0x6cee948c9d593c58cba5dfa70482444899d1341c", "name": "SXSOLD", "decimals": 18 },
    { "addr": "0xa0e743c37c470ab381cf0e87b6e8f12ef19586fd", "name": "CRYPHER", "decimals": 18 },
    { "addr": "0xe8c09672cfb9cfce6e2edbb01057d9fa569f97c1", "name": "INDI", "decimals": 18 },
    { "addr": "0x21692a811335301907ecd6343743791802ba7cfd", "name": "ADU", "decimals": 18 },
    { "addr": "0xb4bfa6b45e25ad12bb033ec8a5eff523b83cc9af", "name": "UAHPAY", "decimals": 18 },
    { "addr": "0x2604fa406be957e542beb89e6754fcde6815e83f", "name": "PKT", "decimals": 18 },
    { "addr": "0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97", "name": "PFR", "decimals": 8 },
    { "addr": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e", "name": "DRGN", "decimals": 18 },
    { "addr": "0xe42ba5558b00d2e6109cc60412d5d4c9473fe998", "name": "IMC", "decimals": 18 },
    { "addr": "0x342ba159f988f24f0b033f3cc5232377ee500543", "name": "RAC", "decimals": 18 },
    { "addr": "0x06147110022b768ba8f99a8f385df11a151a9cc8", "name": "ACE", "decimals": 0 },
    { "addr": "0x0f4ca92660efad97a9a70cb0fe969c755439772c", "name": "LEV", "decimals": 9 },
    { "addr": "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc", "name": "MNTP", "decimals": 18 },
    { "addr": "0x05c7065d644096a4e4c3fe24af86e36de021074b", "name": "LCT", "decimals": 18 },
    { "addr": "0xd234bf2410a0009df9c3c63b610c09738f18ccd7", "name": "DTR", "decimals": 8 },
    { "addr": "0x286bda1413a2df81731d4930ce2f862a35a609fe", "name": "WABI", "decimals": 18 },
    { "addr": "0xd6e49800decb64c0e195f791348c1e87a5864fd7", "name": "RCT", "decimals": 9 },
    { "addr": "0x52f7018bc6ba4d24abfbaefccae4617bfb0a0b52", "name": "YACHT", "decimals": 9 },
    { "addr": "0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd", "name": "CRED", "decimals": 18 },
    { "addr": "0xaadb05f449072d275833baf7c82e8fca4ee46575", "name": "SXUOLD", "decimals": 6 },
    { "addr": "0x554c98b3ec772f79ee5b96d47a1d10852ed274c8", "name": "SXDOLD", "decimals": 6 },
    { "addr": "0x2eb86e8fc520e0f6bb5d9af08f924fe70558ab89", "name": "LGR", "decimals": 8 },
    { "addr": "0x6beb418fc6e1958204ac8baddcf109b8e9694966", "name": "LNC", "decimals": 18 },
    { "addr": "0xaf146fbd319ca7ae178caa2c9d80a2db6b944350", "name": "PXT", "decimals": 18 },
    { "addr": "0x8b0c9f462c239c963d8760105cbc935c63d85680", "name": "SHNZ", "decimals": 8 },
    { "addr": "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f", "name": "CMT", "decimals": 18 },
    { "addr": "0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23", "name": "1WO", "decimals": 8 },
    { "addr": "0x27f610bf36eca0939093343ac28b1534a721dbb4", "name": "WAND", "decimals": 18 },
    { "addr": "0xe0c21b3f45fea3e5fdc811021fb1f8842caccad2", "name": "BITC", "decimals": 0 },
	{ "addr": "0xce53a179047ebed80261689367c093c90a94cc08", "name": "EDT", "decimals": 8 },
  ]
};

let offlineStagingTokens = {
  "tokens":  [
	{ "addr": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413", "name": "DAO", "decimals": 16 },
    { "addr": "0x949bed886c739f1a3273629b3320db0c5024c719", "name": "AMIS", "decimals": 9 },
    { "addr": "0xf77089f2f00fca83501705b711cbb10a0de77628", "name": "BME", "decimals": 0 },
    { "addr": "0x059d4329078dcA62c521779c0Ce98EB9329349e6", "name": "TIG", "decimals": 18 },
    { "addr": "0x1a95b271b0535d15fa49932daba31ba612b52946", "name": "MNE", "decimals": 8 },
    { "addr": "0xee22430595ae400a30ffba37883363fbf293e24e", "name": "TME", "decimals": 18 },
    { "addr": "0xc1e6c6c681b286fb503b36a9dd6c1dbff85e73cf", "name": "JET", "decimals": 18 },
    { "addr": "0x96a65609a7b84e8842732deb08f56c3e21ac6f8a", "name": "CTR", "decimals": 18 },
    { "addr": "0x27f706edde3ad952ef647dd67e24e38cd0803dd6", "name": "UET", "decimals": 18 },
    { "addr": "0x29d26160b9b4432bd2a95c34c0f7691d2655ed77", "name": "HVN", "decimals": 8 },
    { "addr": "0xac3da587eac229c9896d919abc235ca4fd7f72c1", "name": "TGT", "decimals": 1 },
    { "addr": "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e", "name": "SWFTC", "decimals": 8 },
    { "addr": "0xe8ff5c9c75deb346acac493c463c8950be03dfba", "name": "VIBE", "decimals": 18 },
    { "addr": "0xd4c435f5b09f855c3317c8524cb1f586e42795fa", "name": "CND", "decimals": 18 },
    { "addr": "0x595832f8fc6bf59c85c527fec3740a1b7a361269", "name": "POWR", "decimals": 6 },
  ]
};


let forkOfflineTokens = [];


/* 
Offline backup of tokens from MyEtherWallet
https://github.com/kvhnuke/etherwallet/blob/mercury/app/scripts/tokens/ethTokens.json
adds some tokens unlisted on EtherDelta, but avoids too many shitcoins.
2017-01-26
*/

let offlineCustomTokens = [

	// replaced tokens
	{
	"address":"0x48c80f1f4d53d5951e5d5438b54cba84f29f32a5",
	"symbol":"REP(old)",
	"decimal":18,
	},
	{
	"address":"0x2fd41f516fac94ed08e156f489f56ca3a80b04d0",
	"symbol":"EBTCOLD",
	"decimal":8,
	},
/*	{
	"address":"0x6cee948c9d593c58cba5dfa70482444899d1341c",
	"symbol":"SXSOLD",
	"decimal":18,
	},
	{
	"address":"0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d",
	"symbol":"FUCKOLD",
	"decimal":4,
	}, */

	//0x wrapped ETH
	{
	"address":"0x2956356cd2a2bf3202f771f50d3d14a367b48070",
	"symbol":"W-ETH(old)",
	"decimal":18,
	},
	//0x wrapped ETH v2
	{
	"address":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
	"symbol":"W-ETH",
	"decimal":18,
	},
	//MKR wrapped ETH
	{
	"address":"0xecf8f87f810ecf450940c9f60066b4a7a501d6a7",
	"symbol":"WETH",
	"decimal":18,
	},
	
	
	
	//MEW,   remove \n"type":"default"\r
	{
	"address":"0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23",
	"symbol":"1WO",
	"decimal":8,
	},{
	"address":"0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7",
	"symbol":"1ST",
	"decimal":18,
	},{
	"address":"0xaEc98A708810414878c3BCDF46Aad31dEd4a4557",
	"symbol":"300",
	"decimal":18,
	},{
	"address":"0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2",
	"symbol":"ACC",
	"decimal":18,
	},{
	"address":"0x8810C63470d38639954c6B41AaC545848C46484a",
	"symbol":"ADI",
	"decimal":18,
	},{
	"address":"0x422866a8F0b032c5cf1DfBDEf31A20F4509562b0",
	"symbol":"ADST",
	"decimal":0,
	},{
	"address":"0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD",
	"symbol":"ADT",
	"decimal":9,
	},{
	"address":"0x4470BB87d77b963A013DB939BE332f927f2b992e",
	"symbol":"ADX",
	"decimal":4,
	},{
	"address":"0x27dce1ec4d3f72c3e457cc50354f1f975ddef488",
	"symbol":"AIR",
	"decimal":8,
	},{
	"address":"0x1063ce524265d5a3A624f4914acd573dD89ce988",
	"symbol":"AIX",
	"decimal":18,
	},{
	"address":"0xEA610B1153477720748DC13ED378003941d84fAB",
	"symbol":"ALIS",
	"decimal":18,
	},{
	"address":"0x181a63746d3adcf356cbc73ace22832ffbb1ee5a",
	"symbol":"ALCO",
	"decimal":8,
	},{
	"address":"0x638ac149ea8ef9a1286c41b977017aa7359e6cfa",
	"symbol":"ALTS",
	"decimal":18,
	},{
	"address":"0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
	"symbol":"AMB",
	"decimal":18,
	},{
	"address":"0x949bed886c739f1a3273629b3320db0c5024c719",
	"symbol":"AMIS",
	"decimal":9,
	},{
	"address":"0x960b236A07cf122663c4303350609A66A7B288C0",
	"symbol":"ANT",
	"decimal":18,
	},{
	"address":"0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
	"symbol":"APPC",
	"decimal":18,
	},{
	"address":"0x23ae3c5b39b12f0693e05435eeaa1e51d8c61530",
	"symbol":"APT",
	"decimal":18,
	},{
	"address":"0xAc709FcB44a43c35F0DA4e3163b117A17F3770f5",
	"symbol":"ARC",
	"decimal":18,
	},{
	"address":"0x1245ef80f4d9e02ed9425375e8f649b9221b31d8",
	"symbol":"ARCT",
	"decimal":8,
	},{
	"address":"0x75aa7b0d02532f3833b66c7f0ad35376d373ddf8",
	"symbol":"ARD",
	"decimal":18,
	},{
	"address":"0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6",
	"symbol":"ARN",
	"decimal":8,
	},{
	"address":"0xfec0cF7fE078a500abf15F1284958F22049c2C7e",
	"symbol":"ART",
	"decimal":18,
	},{
	"address":"0x7705FaA34B16EB6d77Dfc7812be2367ba6B0248e",
	"symbol":"ARX",
	"decimal":8,
	},{
	"address":"0x27054b13b1B798B345b591a4d22e6562d47eA75a",
	"symbol":"AST",
	"decimal":4,
	},{
	"address":"0x17052d51E954592C1046320c2371AbaB6C73Ef10",
	"symbol":"ATH",
	"decimal":18,
	},{
	"address":"0x78B7FADA55A64dD895D8c8c35779DD8b67fA8a05",
	"symbol":"ATL",
	"decimal":18,
	},{
	"address":"0x887834d3b8d450b6bab109c252df3da286d73ce4",
	"symbol":"ATT",
	"decimal":18,
	},{
	"address":"0xeD247980396B10169BB1d36f6e278eD16700a60f",
	"symbol":"AVA",
	"decimal":4,
	},{
	"address":"0x0d88ed6e74bbfd96b831231638b66c05571e824f",
	"symbol":"AVT",
	"decimal":18,
	},{
	"address":"0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
	"symbol":"BAT",
	"decimal":18,
	},{
	"address":"0x7367a68039d4704f30bfbf6d948020c3b07dfc59",
	"symbol":"BCBC",
	"decimal":18,
	},{
	"address":"0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40",
	"symbol":"BCDN",
	"decimal":15,
	},{
	"address":"0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
	"symbol":"BCDT",
	"decimal":18,
	},{
	"address":"0xbc1234552EBea32B5121190356bBa6D3Bb225bb5",
	"symbol":"BCL",
	"decimal":18,
	},{
	"address":"0x1c4481750daa5Ff521A2a7490d9981eD46465Dbd",
	"symbol":"BCPT",
	"decimal":18,
	},{
	"address":"0x74C1E4b8caE59269ec1D85D3D4F324396048F4ac",
	"symbol":"BeerCoin",
	"decimal":0,
	},{
	"address":"0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2",
	"symbol":"BET",
	"decimal":18,
	},{
	"address":"0xb2bfeb70b903f1baac7f2ba2c62934c7e5b974c4",
	"symbol":"BKB",
	"decimal":8,
	},{
	"address":"0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e",
	"symbol":"BLT",
	"decimal":18,
	},{
	"address":"0xce59d29b09aae565feeef8e52f47c3cd5368c663",
	"symbol":"BLX Bullion Crypto",
	"decimal":18,
	},{
	"address":"0xE5a7c12972f3bbFe70ed29521C8949b8Af6a0970",
	"symbol":"BLX Iconomi",
	"decimal":18,
	},{
	"address":"0xdf6ef343350780bf8c3410bf062e0c015b1dd671",
	"symbol":"BMC",
	"decimal":8,
	},{
	"address":"0xf028adee51533b1b47beaa890feb54a457f51e89",
	"symbol":"BMT",
	"decimal":18,
	},{
	"address":"0x986EE2B944c42D017F52Af21c4c69B84DBeA35d8",
	"symbol":"BMX",
	"decimal":18,
	},{
	"address":"0xb8c77482e45f1f44de1745f52c74426c631bdd52",
	"symbol":"BNB",
	"decimal":18,
	},{
	"address":"0xdD6Bf56CA2ada24c683FAC50E37783e55B57AF9F",
	"symbol":"BNC",
	"decimal":12,
	},{
	"address":"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
	"symbol":"BNT",
	"decimal":18,
	},{
	"address":"0xd2d6158683aee4cc838067727209a0aaf4359de3",
	"symbol":"BNTY",
	"decimal":18,
	},{
	"address":"0xCc34366E3842cA1BD36c1f324d15257960fCC801",
	"symbol":"BON",
	"decimal":18,
	},{
	"address":"0x7f1e2c7d6a69bf34824d72c53b4550e895c0d8c2",
	"symbol":"BOP",
	"decimal":8,
	},{
	"address":"0xC2C63F23ec5E97efbD7565dF9Ec764FDc7d4e91d",
	"symbol":"BOU",
	"decimal":18,
	},{
	"address":"0x5Af2Be193a6ABCa9c8817001F45744777Db30756",
	"symbol":"ETHOS (BQX)",
	"decimal":8,
	},{
	"address":"0x9E77D5a1251b6F7D456722A6eaC6D2d5980bd891",
	"symbol":"BRAT",
	"decimal":8,
	},{
	"address":"0xf26ef5e0545384b7dcc0f297f2674189586830df",
	"symbol":"BSDC",
	"decimal":18,
	},{
	"address":"0x0886949c1b8C412860c4264Ceb8083d1365e86CF",
	"symbol":"BTCE",
	"decimal":8,
	},{
	"address":"0x73dd069c299a5d691e9836243bcaec9c8c1d8734",
	"symbol":"BTE",
	"decimal":8,
	},{
	"address":"0x1961B3331969eD52770751fC718ef530838b6dEE",
	"symbol":"BDG",
	"decimal":18,
	},{
	"address":"0xfad572db566e5234ac9fc3d570c4edc0050eaa92",
	"symbol":"BTH",
	"decimal":18,
	},{
	"address":"0x2accaB9cb7a48c3E82286F0b2f8798D201F4eC3f",
	"symbol":"BTL (Battle)",
	"decimal":18,
	},{
	"address":"0x92685E93956537c25Bb75D5d47fca4266dd628B8",
	"symbol":"BTL (Bitlle)",
	"decimal":4,
	},{
	"address":"0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750",
	"symbol":"BTM",
	"decimal":8,
	},{
	"address":"0x080aa07e2c7185150d7e4da98838a8d2feac3dfc",
	"symbol":"BTT",
	"decimal":0,
	},{
	"address":"0x16B0E62aC13a2fAeD36D18bce2356d25Ab3CfAD3",
	"symbol":"BTQ",
	"decimal":18,
	},{
	"address":"0x26E75307Fc0C021472fEb8F727839531F112f317",
	"symbol":"C20",
	"decimal":18,
	},{
	"address":"0x7d4b8Cce0591C9044a22ee543533b72E976E36C3",
	"symbol":"CAG",
	"decimal":18,
	},{
	"address":"0x1d462414fe14cf489c7A21CaC78509f4bF8CD7c0",
	"symbol":"CAN",
	"decimal":6,
	},{
	"address":"0x423e4322cdda29156b49a17dfbd2acc4b280600d",
	"symbol":"CAR",
	"decimal":9,
	},{
	"address":"0xe8780B48bdb05F928697A5e8155f672ED91462F7",
	"symbol":"CAS",
	"decimal":18,
	},{
	"address":"0x1234567461d3f8db7496581774bd869c83d51c93",
	"symbol":"CAT (BitClave)",
	"decimal":18,
	},{
	"address":"0x68e14bb5A45B9681327E16E528084B9d962C1a39",
	"symbol":"CATs (BitClave)_Old",
	"decimal":18,
	},{
	"address":"0x56ba2Ee7890461f463F7be02aAC3099f6d5811A8",
	"symbol":"CAT (Blockcat)",
	"decimal":18,
	},{
	"address":"0xc166038705FFBAb3794185b3a9D925632A1DF37D",
	"symbol":"CC3",
	"decimal":18,
	},{
	"address":"0x28577A6d31559bd265Ce3ADB62d0458550F7b8a7",
	"symbol":"CCC (CryptoCrashCourse)",
	"decimal":18,
	},{
	"address":"0xbe11eeb186e624b8f26a5045575a1340e4054552",
	"symbol":"CCC (Iconomi)",
	"decimal":18,
	},{
	"address":"0xd348e07a2806505b856123045d27aeed90924b50",
	"symbol":"CCLC",
	"decimal":8,
	},{
	"address":"0x8a95ca448A52C0ADf0054bB3402dC5e09CD6B232",
	"symbol":"CDL",
	"decimal":18,
	},{
	"address":"0x177d39AC676ED1C67A2b268AD7F1E58826E5B0af",
	"symbol":"CDT",
	"decimal":18,
	},{
	"address":"0x6fFF3806Bbac52A20e0d79BC538d527f6a22c96b",
	"symbol":"CDX",
	"decimal":18,
	},{
	"address":"0x12FEF5e57bF45873Cd9B62E9DBd7BFb99e32D73e",
	"symbol":"CFI",
	"decimal":18,
	},{
	"address":"0x06012c8cf97bead5deae237070f9587f8e7a266d",
	"symbol":"CK",
	"decimal":0,
	},{
	"address":"0x7fce2856899a6806eeef70807985fc7554c66340",
	"symbol":"CLP",
	"decimal":9,
	},{
	"address":"0x7e667525521cF61352e2E01b50FaaaE7Df39749a",
	"symbol":"CMC",
	"decimal":18,
	},{
	"address":"0xf85fEea2FdD81d51177F6b8F35F0e6734Ce45F5F",
	"symbol":"CMT",
	"decimal":18,
	},{
	"address":"0xB4b1D2C217EC0776584CE08D3DD98F90EDedA44b",
	"symbol":"CO2",
	"decimal":18,
	},{
	"address":"0xb2f7eb1f2c37645be61d73953035360e768d81e6",
	"symbol":"COB",
	"decimal":18,
	},{
	"address":"0x65292eeadf1426cd2df1c4793a3d7519f253913b",
	"symbol":"COSS",
	"decimal":18,
	},{
	"address":"0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5",
	"symbol":"CRB",
	"decimal":8,
	},{
	"address":"0x672a1AD4f667FB18A333Af13667aa0Af1F5b5bDD",
	"symbol":"CRED",
	"decimal":18,
	},{
	"address":"0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be",
	"symbol":"CREDO",
	"decimal":18,
	},{
	"address":"0x80a7e048f37a50500351c204cb407766fa3bae7f",
	"symbol":"CRPT",
	"decimal":18,
	},{
	"address":"0xE4c94d45f7Aef7018a5D66f44aF780ec6023378e",
	"symbol":"CryptoCarbon",
	"decimal":6,
	},{
	"address":"0xbf4cfd7d1edeeea5f6600827411b41a21eb08abd",
	"symbol":"CTL",
	"decimal":2,
	},{
	"address":"0xE3Fa177AcecfB86721Cf6f9f4206bd3Bd672D7d5",
	"symbol":"CTT",
	"decimal":18,
	},{
	"address":"0x662aBcAd0b7f345AB7FfB1b1fbb9Df7894f18e66",
	"symbol":"CTX",
	"decimal":18,
	},{
	"address":"0xdA6cb58A0D0C01610a29c5A65c303e13e885887C",
	"symbol":"cV",
	"decimal":18,
	},{
	"address":"0x41e5560054824ea6b0732e656e3ad64e20e94e45",
	"symbol":"CVC",
	"decimal":8,
	},{
	"address":"0xdab0C31BF34C897Fb0Fe90D12EC9401caf5c36Ec",
	"symbol":"DAB",
	"decimal":0,
	},{
	"address":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
	"symbol":"DAI",
	"decimal":18,
	},{
	"address":"0x07d9e49ea402194bf48a8276dafb16e4ed633317",
	"symbol":"DALC",
	"decimal":8,
	},{
	"address":"0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413",
	"symbol":"DAO",
	"decimal":16,
	},{
	"address":"0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c",
	"symbol":"DAT",
	"decimal":18,
	},{
	"address":"0x1b5f21ee98eed48d292e8e2d3ed82b40a9728a22",
	"symbol":"DATABroker",
	"decimal":18,
	},{
	"address":"0x0cf0ee63788a0849fe5297f3407f701e122cc023",
	"symbol":"DATACoin",
	"decimal":18,
	},{
	"address":"0x399A0e6FbEb3d74c85357439f4c8AeD9678a5cbF",
	"symbol":"DCL",
	"decimal":3,
	},{
	"address":"0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
	"symbol":"DCN",
	"decimal":0,
	},{
	"address":"0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
	"symbol":"DCN",
	"decimal":0,
	},{
	"address":"0xcC4eF9EEAF656aC1a2Ab886743E98e97E090ed38",
	"symbol":"DDF",
	"decimal":18,
	},{
	"address":"0x3597bfd533a99c9aa083587b074434e61eb0a258",
	"symbol":"DENT",
	"decimal":8,
	},{
	"address":"0xdd94De9cFE063577051A5eb7465D08317d8808B6",
	"symbol":"Devcon2 Token",
	"decimal":0,
	},{
	"address":"0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
	"symbol":"DGD",
	"decimal":9,
	},{
	"address":"0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1",
	"symbol":"DGPT",
	"decimal":18,
	},{
	"address":"0x55b9a11c2e8351b4Ffc7b11561148bfaC9977855",
	"symbol":"DGX",
	"decimal":9,
	},{
	"address":"0x2e071D2966Aa7D8dECB1005885bA1977D6038A65",
	"symbol":"DICE",
	"decimal":16,
	},{
	"address":"0x13f11C9905A08ca76e3e853bE63D4f0944326C72",
	"symbol":"DIVX",
	"decimal":18,
	},{
	"address":"0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
	"symbol":"DLT",
	"decimal":18,
	},{
	"address":"0x2ccbFF3A042c68716Ed2a2Cb0c544A9f1d1935E1",
	"symbol":"DMT",
	"decimal":8,
	},{
	"address":"0x0abdace70d3790235af448c88547603b945604ea",
	"symbol":"DNT",
	"decimal":18,
	},{
	"address":"0xE43E2041dc3786e166961eD9484a5539033d10fB",
	"symbol":"DNX",
	"decimal":18,
	},{
	"address":"0xEEF6E90034eEa89E31Eb4B8eaCd323F28A92eaE4",
	"symbol":"DOW",
	"decimal":18,
	},{
	"address":"0x01b3Ec4aAe1B8729529BEB4965F27d008788B0EB",
	"symbol":"DPP",
	"decimal":18,
	},{
	"address":"0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
	"symbol":"DRGN",
	"decimal":18,
	},{
	"address":"0x3c75226555FC496168d48B88DF83B95F16771F37",
	"symbol":"DROP",
	"decimal":0,
	},{
	"address":"0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed",
	"symbol":"DRP",
	"decimal":2,
	},{
	"address":"0x1e09BD8Cadb441632e441Db3e1D79909EE0A2256",
	"symbol":"DSC",
	"decimal":1,
	},{
	"address":"0xd234bf2410a0009df9c3c63b610c09738f18ccd7",
	"symbol":"DTR",
	"decimal":8,
	},{
	"address":"0xd4cffeef10f60eca581b5e1146b5aca4194a4c3b",
	"symbol":"DUBI",
	"decimal":18,
	},{
	"address":"0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9",
	"symbol":"EAGLE",
	"decimal":18,
	},{
	"address":"0xafc39788c51f0c1ff7b55317f3e70299e521fff6",
	"symbol":"eBCH",
	"decimal":8,
	},{
	"address":"0xeb7c20027172e5d143fb030d50f91cece2d1485d",
	"symbol":"eBTC",
	"decimal":8,
	},{
	"address":"0xa578acc0cb7875781b7880903f4594d13cfa8b98",
	"symbol":"ECN",
	"decimal":2,
	},{
	"address":"0x17F93475d2A978f527c3f7c44aBf44AdfBa60D5C",
	"symbol":"ECO2",
	"decimal":2,
	},{
	"address":"0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c",
	"symbol":"EDG",
	"decimal":0,
	},{
	"address":"0xced4e93198734ddaff8492d525bd258d49eb388e",
	"symbol":"EDO",
	"decimal":18,
	},{
	"address":"0x5b26C5D0772E5bbaC8b3182AE9a13f9BB2D03765",
	"symbol":"EDU",
	"decimal":8,
	},{
	"address":"0xb53a96bcbdd9cf78dff20bab6c2be7baec8f00f8",
	"symbol":"eGAS",
	"decimal":8,
	},{
	"address":"0xf9F0FC7167c311Dd2F1e21E9204F87EBA9012fB2",
	"symbol":"EHT",
	"decimal":8,
	},{
	"address":"0xc8C6A31A4A806d3710A7B38b7B296D2fABCCDBA8",
	"symbol":"ELIX",
	"decimal":18,
	},{
	"address":"0x44197a4c44d6a059297caf6be4f7e172bd56caaf",
	"symbol":"ELTCOIN",
	"decimal":8,
	},{
	"address":"0xb67b88a25708a35ae7c2d736d398d268ce4f7f83",
	"symbol":"EMON",
	"decimal":8,
	},{
	"address":"0xB802b24E0637c2B87D2E8b7784C055BBE921011a",
	"symbol":"EMV",
	"decimal":2,
	},{
	"address":"0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
	"symbol":"ENJ",
	"decimal":18,
	},{
	"address":"0xd780Ae2Bf04cD96E577D3D014762f831d97129d0",
	"symbol":"EVN",
	"decimal":18,
	},{
	"address":"0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
	"symbol":"EOS",
	"decimal":18,
	},{
	"address":"0xe8a1df958be379045e2b46a31a98b93a2ecdfded",
	"symbol":"ESZ",
	"decimal":18,
	},{
	"address":"0x1b9743f556d65e757c4c650b4555baf354cb8bd3",
	"symbol":"ETBS",
	"decimal":12,
	},{
	"address":"0x3a26746Ddb79B1B8e4450e3F4FFE3285A307387E",
	"symbol":"ETHB",
	"decimal":8,
	},{
	"address":"0xabdf147870235fcfc34153828c769a70b3fae01f",
	"symbol":"EURT",
	"decimal":6,
	},{
	"address":"0x923108a439C4e8C2315c4f6521E5cE95B44e9B4c",
	"symbol":"EVE",
	"decimal":18,
	},{
	"address":"0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
	"symbol":"EVX",
	"decimal":4,
	},{
	"address":"0xc98e0639c6d2ec037a615341c369666b110e80e5",
	"symbol":"EXMR",
	"decimal":8,
	},{
	"address":"0x190e569bE071F40c704e15825F285481CB74B6cC",
	"symbol":"FAM",
	"decimal":12,
	},{
	"address":"0xf04a8ac553FceDB5BA99A64799155826C136b0Be",
	"symbol":"FLIXX",
	"decimal":18,
	},{
	"address":"0x3a1Bda28AdB5B0a812a7CF10A1950c920F79BcD3",
	"symbol":"FLP",
	"decimal":18,
	},{
	"address":"0x0ABeFb7611Cb3A01EA3FaD85f33C3C934F8e2cF4",
	"symbol":"FRD",
	"decimal":18,
	},{
	"address":"0xe6f74dcfa0e20883008d8c16b6d9a329189d0c30",
	"symbol":"FTC",
	"decimal":2,
	},{
	"address":"0xab16e0d25c06cb376259cc18c1de4aca57605589",
	"symbol":"FUCK",
	"decimal":4,
	},{
	"address":"0xEA38eAa3C86c8F9B751533Ba2E562deb9acDED40",
	"symbol":"FUEL",
	"decimal":18,
	},{
	"address":"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
	"symbol":"FUN",
	"decimal":8,
	},{
	"address":"0x88FCFBc22C6d3dBaa25aF478C578978339BDe77a",
	"symbol":"FYN",
	"decimal":18,
	},{
	"address":"0xf67451dc8421f0e0afeb52faa8101034ed081ed9",
	"symbol":"GAM",
	"decimal":8,
	},{
	"address":"0x708876f486e448ee89eb332bfbc8e593553058b9",
	"symbol":"GAVEL",
	"decimal":18,
	},{
	"address":"0x4F4f0Db4de903B88f2B1a2847971E231D54F8fd3",
	"symbol":"GEE",
	"decimal":8,
	},{
	"address":"0x24083bb30072643c3bb90b44b7285860a755e687",
	"symbol":"GELD",
	"decimal":18,
	},{
	"address":"0xaE4f56F072c34C0a65B3ae3E4DB797D831439D93",
	"symbol":"GIM",
	"decimal":8,
	},{
	"address":"0xb3Bd49E28f8F832b8d1E246106991e546c323502",
	"symbol":"GMT",
	"decimal":18,
	},{
	"address":"0x6810e776880C02933D47DB1b9fc05908e5386b96",
	"symbol":"GNO",
	"decimal":18,
	},{
	"address":"0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
	"symbol":"GNT",
	"decimal":18,
	},{
	"address":"0xeAb43193CF0623073Ca89DB9B712796356FA7414",
	"symbol":"GOLDX",
	"decimal":18,
	},{
	"address":"0x8C65e992297d5f092A756dEf24F4781a280198Ff",
	"symbol":"GZE",
	"decimal":18,
	},{
	"address":"0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
	"symbol":"GRID",
	"decimal":12,
	},{
	"address":"0xB70835D7822eBB9426B56543E391846C107bd32C",
	"symbol":"GTC",
	"decimal":18,
	},{
	"address":"0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa",
	"symbol":"GTKT",
	"decimal":0,
	},{
	"address":"0xf7B098298f7C69Fc14610bf71d5e02c60792894C",
	"symbol":"GUP",
	"decimal":3,
	},{
	"address":"0x103c3A209da59d3E7C4A89307e66521e081CFDF0",
	"symbol":"GVT",
	"decimal":18,
	},{
	"address":"0x58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8",
	"symbol":"GXC",
	"decimal":10,
	},{
	"address":"0x22F0AF8D78851b72EE799e05F54A77001586B18A",
	"symbol":"GXVC",
	"decimal":10,
	},{
	"address":"0x84543f868ec1b1fac510d49d13c069f64cd2d5f9",
	"symbol":"Hdp.ф",
	"decimal":18,
	},{
	"address":"0xffe8196bc259e8dedc544d935786aa4709ec3e64",
	"symbol":"HDG",
	"decimal":18,
	},{
	"address":"0xe9ff07809ccff05dae74990e25831d0bc5cbe575",
	"symbol":"Hdp",
	"decimal":18,
	},{
	"address":"0xba2184520A1cC49a6159c57e61E1844E085615B6",
	"symbol":"HGT",
	"decimal":8,
	},{
	"address":"0xa9240fBCAC1F0b9A6aDfB04a53c8E3B0cC1D1444",
	"symbol":"HIG",
	"decimal":18,
	},{
	"address":"0x14F37B574242D366558dB61f3335289a5035c506",
	"symbol":"HKG",
	"decimal":3,
	},{
	"address":"0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908",
	"symbol":"HMQ",
	"decimal":8,
	},{
	"address":"0xb45d7Bc4cEBcAB98aD09BABDF8C818B2292B672c",
	"symbol":"HODL",
	"decimal":18,
	},{
	"address":"0x554C20B7c486beeE439277b4540A434566dC4C02",
	"symbol":"HST",
	"decimal":18,
	},{
	"address":"0xC0Eb85285d83217CD7c891702bcbC0FC401E2D9D",
	"symbol":"HVN",
	"decimal":8,
	},{
	"address":"0x5a84969bb663fb64F6d015DcF9F622Aedc796750",
	"symbol":"ICE",
	"decimal":18,
	},{
	"address":"0x888666CA69E0f178DED6D75b5726Cee99A87D698",
	"symbol":"ICN",
	"decimal":18,
	},{
	"address":"0xa33e729bf4fdeb868b534e1f20523463d9c46bee",
	"symbol":"ICO",
	"decimal":10,
	},{
	"address":"0x014B50466590340D41307Cc54DCee990c8D58aa8",
	"symbol":"ICOS",
	"decimal":6,
	},{
	"address":"0xb5a5f22694352c15b00323844ad545abb2b11028",
	"symbol":"ICX",
	"decimal":18,
	},{
	"address":"0x814cafd4782d2e728170fda68257983f03321c58",
	"symbol":"IDEA",
	"decimal":0,
	},{
	"address":"0x7654915a1b82d6d2d0afc37c52af556ea8983c7e",
	"symbol":"IFT",
	"decimal":18,
	},{
	"address":"0x16662f73df3e79e54c6c5938b4313f92c524c120",
	"symbol":"IIC",
	"decimal":18,
	},{
	"address":"0x88AE96845e157558ef59e9Ff90E766E22E480390",
	"symbol":"IKB",
	"decimal":0,
	},{
	"address":"0xe3831c5A982B279A198456D577cfb90424cb6340",
	"symbol":"IMC",
	"decimal":6,
	},{
	"address":"0x22E5F62D0FA19974749faa194e3d3eF6d89c08d7",
	"symbol":"IMT",
	"decimal":0,
	},{
	"address":"0xf8e386EDa857484f5a12e4B5DAa9984E06E73705",
	"symbol":"IND",
	"decimal":18,
	},{
	"address":"0x5b2e4a700dfbc560061e957edec8f6eeeb74a320",
	"symbol":"INS",
	"decimal":10,
	},{
	"address":"0xa8006c4ca56f24d6836727d106349320db7fef82",
	"symbol":"INXT",
	"decimal":8,
	},{
	"address":"0x64CdF819d3E75Ac8eC217B3496d7cE167Be42e80",
	"symbol":"IPL",
	"decimal":18,
	},{
	"address":"0xc34b21f6f8e51cc965c2393b3ccfa3b82beb2403",
	"symbol":"IoT",
	"decimal":6,
	},{
	"address":"0x0aeF06DcCCC531e581f0440059E6FfCC206039EE",
	"symbol":"ITT",
	"decimal":8,
	},{
	"address":"0xfca47962d45adfdfd1ab2d972315db4ce7ccf094",
	"symbol":"IXT",
	"decimal":8,
	},{
	"address":"0x0Aaf561eFF5BD9c8F911616933F84166A17cfE0C",
	"symbol":"JBX",
	"decimal":0,
	},{
	"address":"0x8727c112c712c4a03371ac87a74dd6ab104af768",
	"symbol":"JET",
	"decimal":18,
	},{
	"address":"0x773450335eD4ec3DB45aF74f34F2c85348645D39",
	"symbol":"JetCoins",
	"decimal":18,
	},{
	"address":"0xa5Fd1A791C4dfcaacC963D4F73c6Ae5824149eA7",
	"symbol":"JNT",
	"decimal":18,
	},{
	"address":"0x72D32ac1c5E66BfC5b08806271f8eEF915545164",
	"symbol":"KEE",
	"decimal":0,
	},{
	"address":"0x4CC19356f2D37338b9802aa8E8fc58B0373296E7",
	"symbol":"KEY",
	"decimal":18,
	},{
	"address":"0x27695E09149AdC738A978e9A678F99E4c39e9eb9",
	"symbol":"KICK",
	"decimal":8,
	},{
	"address":"0x818Fc6C2Ec5986bc6E2CBf00939d90556aB12ce5",
	"symbol":"KIN",
	"decimal":18,
	},{
	"address":"0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
	"symbol":"KNC",
	"decimal":18,
	},{
	"address":"0x9541FD8B9b5FA97381783783CeBF2F5fA793C262",
	"symbol":"KZN",
	"decimal":8,
	},{
	"address":"0x2eb86e8fc520e0f6bb5d9af08f924fe70558ab89",
	"symbol":"LGR",
	"decimal":8,
	},{
	"address":"0xff18dbc487b4c2e3222d115952babfda8ba52f5f",
	"symbol":"LIFE",
	"decimal":18,
	},{
	"address":"0x514910771af9ca656af840dff83e8264ecf986ca",
	"symbol":"LINK - Chainlink",
	"decimal":18,
	},{
	"address":"0xe2e6d4be086c6938b53b22144855eef674281639",
	"symbol":"LINK - Link Platform",
	"decimal":18,
	},{
	"address":"0x24A77c1F17C547105E14813e517be06b0040aa76",
	"symbol":"LIVE",
	"decimal":18,
	},{
	"address":"0x63e634330A20150DbB61B15648bC73855d6CCF07",
	"symbol":"LNC",
	"decimal":18,
	},{
	"address":"0x6beb418fc6e1958204ac8baddcf109b8e9694966",
	"symbol":"LNC-Linker Coin",
	"decimal":18,
	},{
	"address":"0x5e3346444010135322268a4630d2ed5f8d09446c",
	"symbol":"LOC",
	"decimal":18,
	},{
	"address":"0x21ae23b882a340a22282162086bc98d3e2b73018",
	"symbol":"LOK",
	"decimal":18,
	},{
	"address":"0xEF68e7C694F40c8202821eDF525dE3782458639f",
	"symbol":"LRC",
	"decimal":18,
	},{
	"address":"0xFB12e3CcA983B9f59D90912Fd17F8D745A8B2953",
	"symbol":"LUCK",
	"decimal":0,
	},{
	"address":"0xa89b5934863447f6e4fc53b315a93e873bda69a3",
	"symbol":"LUM",
	"decimal":18,
	},{
	"address":"0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
	"symbol":"LUN",
	"decimal":18,
	},{
	"address":"0x3f4b726668da46f5e0e75aa5d478acec9f38210f",
	"symbol":"M-ETH",
	"decimal":18,
	},{
	"address":"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
	"symbol":"MANA",
	"decimal":18,
	},{
	"address":"0x386467f1f3ddbe832448650418311a479eecfc57",
	"symbol":"MBRS",
	"decimal":0,
	},{
	"address":"0x93E682107d1E9defB0b5ee701C71707a4B2E46Bc",
	"symbol":"MCAP",
	"decimal":8,
	},{
	"address":"0x138A8752093F4f9a79AaeDF48d4B9248fab93c9C",
	"symbol":"MCI",
	"decimal":18,
	},{
	"address":"0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d",
	"symbol":"MCO",
	"decimal":8,
	},{
	"address":"0x51DB5Ad35C671a87207d88fC11d593AC0C8415bd",
	"symbol":"MDA",
	"decimal":18,
	},{
	"address":"0x40395044ac3c0c57051906da938b54bd6557f212",
	"symbol":"MGO",
	"decimal":8,
	},{
	"address":"0xe23cd160761f63FC3a1cF78Aa034b6cdF97d3E0C",
	"symbol":"MIT",
	"decimal":18,
	},{
	"address":"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
	"symbol":"MKR",
	"decimal":18,
	},{
	"address":"0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
	"symbol":"MKR_OLD",
	"decimal":18,
	},{
	"address":"0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1",
	"symbol":"MLN",
	"decimal":18,
	},{
	"address":"0x1a95B271B0535D15fa49932Daba31BA612b52946",
	"symbol":"MNE",
	"decimal":8,
	},{
	"address":"0xA9877b1e05D035899131DBd1e403825166D09f92",
	"symbol":"MNT",
	"decimal":18,
	},{
	"address":"0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
	"symbol":"MNTP",
	"decimal":18,
	},{
	"address":"0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e",
	"symbol":"MOD",
	"decimal":0,
	},{
	"address":"0xAB6CF87a50F17d7F5E1FEaf81B6fE9FfBe8EBF84",
	"symbol":"MRV",
	"decimal":18,
	},{
	"address":"0x68AA3F232dA9bdC2343465545794ef3eEa5209BD",
	"symbol":"MSP",
	"decimal":18,
	},{
	"address":"0xaF4DcE16Da2877f8c9e00544c93B62Ac40631F16",
	"symbol":"MTH",
	"decimal":5,
	},{
	"address":"0xF433089366899D83a9f26A773D59ec7eCF30355e",
	"symbol":"MTL",
	"decimal":8,
	},{
	"address":"0x7FC408011165760eE31bE2BF20dAf450356692Af",
	"symbol":"MTR",
	"decimal":8,
	},{
	"address":"0x0AF44e2784637218dD1D32A322D44e603A8f0c6A",
	"symbol":"MTX",
	"decimal":18,
	},{
	"address":"0x6425c6be902d692ae2db752b3c268afadb099d3b",
	"symbol":"MWAT",
	"decimal":18,
	},{
	"address":"0xf7e983781609012307f2514f63D526D83D24F466",
	"symbol":"MYD",
	"decimal":16,
	},{
	"address":"0xa645264C5603E96c3b0B078cdab68733794B0A71",
	"symbol":"MYST",
	"decimal":8,
	},{
	"address":"0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970",
	"symbol":"NDC",
	"decimal":18,
	},{
	"address":"0xcfb98637bcae43C13323EAa1731cED2B716962fD",
	"symbol":"NET",
	"decimal":18,
	},{
	"address":"0xa823e6722006afe99e91c30ff5295052fe6b8e32",
	"symbol":"NEU",
	"decimal":18,
	},{
	"address":"0xe26517A9967299453d3F1B48Aa005E6127e67210",
	"symbol":"NIMFA",
	"decimal":18,
	},{
	"address":"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
	"symbol":"NMR",
	"decimal":18,
	},{
	"address":"0xec46f8207d766012454c408de210bcbc2243e71c",
	"symbol":"NOX",
	"decimal":18,
	},{
	"address":"0x45e42D659D9f9466cD5DF622506033145a9b89Bc",
	"symbol":"NxC",
	"decimal":3,
	},{
	"address":"0x7627de4b93263a6a7570b8dafa64bae812e5c394",
	"symbol":"NXX",
	"decimal":8,
	},{
	"address":"0x5c6183d10A00CD747a6Dbb5F658aD514383e9419",
	"symbol":"NXX OLD",
	"decimal":8,
	},{
	"address":"0x701C244b988a513c945973dEFA05de933b23Fe1D",
	"symbol":"OAX",
	"decimal":18,
	},{
	"address":"0x7F2176cEB16dcb648dc924eff617c3dC2BEfd30d",
	"symbol":"OHNI",
	"decimal":0,
	},{
	"address":"0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
	"symbol":"OMG",
	"decimal":18,
	},{
	"address":"0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
	"symbol":"onG",
	"decimal":18,
	},{
	"address":"0xb23be73573bc7e03db6e5dfc62405368716d28a8",
	"symbol":"ONEK",
	"decimal":18,
	},{
	"address":"0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0",
	"symbol":"OPT",
	"decimal":18,
	},{
	"address":"0x2C4e8f2D746113d0696cE89B35F0d8bF88E0AEcA",
	"symbol":"OST",
	"decimal":18,
	},{
	"address":"0x65a15014964f2102ff58647e16a16a6b9e14bcf6",
	"symbol":"Ox Fina",
	"decimal":3,
	},{
	"address":"0x694404595e3075a942397f466aacd462ff1a7bd0",
	"symbol":"PATENTS",
	"decimal":18,
	},{
	"address":"0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
	"symbol":"PAY",
	"decimal":18,
	},{
	"address":"0x55648de19836338549130b1af587f16bea46f66b",
	"symbol":"PBL",
	"decimal":18,
	},{
	"address":"0x53148Bb4551707edF51a1e8d7A93698d18931225",
	"symbol":"PCL",
	"decimal":8,
	},{
	"address":"0xec18f898b4076a3e18f1089d33376cc380bde61d",
	"symbol":"PETRO",
	"decimal":18,
	},{
	"address":"0x55c2A0C171D920843560594dE3d6EEcC09eFc098",
	"symbol":"PEXT",
	"decimal":4,
	},{
	"address":"0xE64509F0bf07ce2d29A7eF19A8A9bc065477C1B4",
	"symbol":"PIPL",
	"decimal":8,
	},{
	"address":"0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15",
	"symbol":"PIX",
	"decimal":0,
	},{
	"address":"0x59416A25628A76b4730eC51486114c32E0B582A1",
	"symbol":"PLASMA",
	"decimal":6,
	},{
	"address":"0xE477292f1B3268687A29376116B0ED27A9c76170",
	"symbol":"PLAY",
	"decimal":18,
	},{
	"address":"0x0AfFa06e7Fbe5bC9a764C979aA66E8256A631f02",
	"symbol":"PLBT",
	"decimal":6,
	},{
	"address":"0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
	"symbol":"PLR",
	"decimal":18,
	},{
	"address":"0xD8912C10681D8B21Fd3742244f44658dBA12264E",
	"symbol":"PLU",
	"decimal":18,
	},{
	"address":"0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
	"symbol":"POE",
	"decimal":8,
	},{
	"address":"0x43f6a1be992dee408721748490772b15143ce0a7",
	"symbol":"POIN",
	"decimal":0,
	},{
	"address":"0x779B7b713C86e3E6774f5040D9cCC2D43ad375F8",
	"symbol":"POOL",
	"decimal":8,
	},{
	"address":"0xee609fe292128cad03b786dbb9bc2634ccdbe7fc",
	"symbol":"POS",
	"decimal":18,
	},{
	"address":"0x595832f8fc6bf59c85c527fec3740a1b7a361269",
	"symbol":"POWR",
	"decimal":6,
	},{
	"address":"0xc42209accc14029c1012fb5680d95fbd6036e2a0",
	"symbol":"PPP",
	"decimal":18,
	},{
	"address":"0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a",
	"symbol":"PPT",
	"decimal":8,
	},{
	"address":"0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa",
	"symbol":"PRE",
	"decimal":18,
	},{
	"address":"0x7728dfef5abd468669eb7f9b48a7f70a501ed29d",
	"symbol":"PRG",
	"decimal":6,
	},{
	"address":"0x7641b2Ca9DDD58adDf6e3381c1F994Aac5f1A32f",
	"symbol":"PRPS",
	"decimal":18,
	},{
	"address":"0x1844b21593262668b7248d0f57a220caaba46ab9",
	"symbol":"PRL",
	"decimal":18,
	},{
	"address":"0x226bb599a12C826476e3A771454697EA52E9E220",
	"symbol":"PRO",
	"decimal":8,
	},{
	"address":"0x163733bcc28dbf26B41a8CfA83e369b5B3af741b",
	"symbol":"PRS",
	"decimal":18,
	},{
	"address":"0x0c04d4f331da8df75f9e2e271e3f3f1494c66c36",
	"symbol":"PRSP",
	"decimal":9,
	},{
	"address":"0x66497a283e0a007ba3974e837784c6ae323447de",
	"symbol":"PT",
	"decimal":18,
	},{
	"address":"0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06",
	"symbol":"PTOY",
	"decimal":8,
	},{
	"address":"0x5512e1d6a7be424b4323126b4f9e86d023f95764",
	"symbol":"PTWO",
	"decimal":18,
	},{
	"address":"0xc14830e53aa344e8c14603a91229a0b925b0b262",
	"symbol":"PXT",
	"decimal":8,
	},{
	"address":"0x671AbBe5CE652491985342e85428EB1b07bC6c64",
	"symbol":"QAU",
	"decimal":8,
	},{
	"address":"0x697beac28B09E122C4332D163985e8a73121b97F",
	"symbol":"QRL",
	"decimal":8,
	},{
	"address":"0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
	"symbol":"QSP",
	"decimal":18,
	},{
	"address":"0x2C3C1F05187dBa7A5f2Dd47Dca57281C4d4F183F",
	"symbol":"QTQ",
	"decimal":18,
	},{
	"address":"0x9a642d6b3368ddc662CA244bAdf32cDA716005BC",
	"symbol":"QTUM",
	"decimal":18,
	},{
	"address":"0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
	"symbol":"RDN",
	"decimal":18,
	},{
	"address":"0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf",
	"symbol":"REBL",
	"decimal":18,
	},{
	"address":"0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6",
	"symbol":"REP",
	"decimal":18,
	},{
	"address":"0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
	"symbol":"REQ",
	"decimal":18,
	},{
	"address":"0xf05a9382A4C3F29E2784502754293D88b835109C",
	"symbol":"REX",
	"decimal":18,
	},{
	"address":"0xdd007278b667f6bef52fd0a4c23604aa1f96039a",
	"symbol":"RIPT",
	"decimal":8,
	},{
	"address":"0x607F4C5BB672230e8672085532f7e901544a7375",
	"symbol":"RLC",
	"decimal":9,
	},{
	"address":"0xcCeD5B8288086BE8c38E23567e684C3740be4D48",
	"symbol":"RLT",
	"decimal":10,
	},{
	"address":"0x4a42d2c580f83dce404acad18dab26db11a1750e",
	"symbol":"RLX",
	"decimal":18,
	},{
	"address":"0x0996bfb5d057faa237640e2506be7b4f9c46de0b",
	"symbol":"RNDR",
	"decimal":18,
	},{
	"address":"0xc9de4b7f0c3d991e967158e4d4bfa4b51ec0b114",
	"symbol":"ROK",
	"decimal":18,
	},{
	"address":"0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5",
	"symbol":"ROUND",
	"decimal":18,
	},{
	"address":"0xb4efd85c19999d84251304bda99e90b92300bd93",
	"symbol":"RPL",
	"decimal":18,
	},{
	"address":"0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
	"symbol":"RVT",
	"decimal":18,
	},{
	"address":"0x1ec8fe51a9b6a3a6c427d17d9ecc3060fbc4a45c",
	"symbol":"S-A-PAT",
	"decimal":18,
	},{
	"address":"0x3eb91d237e491e0dee8582c402d85cb440fb6b54",
	"symbol":"S-ETH",
	"decimal":18,
	},{
	"address":"0x4156D3342D5c385a87D264F90653733592000581",
	"symbol":"SALT",
	"decimal":8,
	},{
	"address":"0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
	"symbol":"SAN",
	"decimal":18,
	},{
	"address":"0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8",
	"symbol":"SCL",
	"decimal":8,
	},{
	"address":"0x6745fAB6801e376cD24F03572B9C9B0D4EdDDCcf",
	"symbol":"SENSE",
	"decimal":8,
	},{
	"address":"0x4ca74185532dc1789527194e5b9c866dd33f4e82",
	"symbol":"SenSatorI",
	"decimal":18,
	},{
	"address":"0xe06eda7435ba749b047380ced49121dde93334ae",
	"symbol":"SET",
	"decimal":0,
	},{
	"address":"0x98f5e9b7f0e33956c0443e81bf7deb8b5b1ed545",
	"symbol":"SEXY",
	"decimal":18,
	},{
	"address":"0xa1ccc166faf0E998b3E33225A1A0301B1C86119D",
	"symbol":"SGEL",
	"decimal":18,
	},{
	"address":"0xd248B0D48E44aaF9c49aea0312be7E13a6dc1468",
	"symbol":"SGT",
	"decimal":1,
	},{
	"address":"0xEF2E9966eb61BB494E5375d5Df8d67B7dB8A780D",
	"symbol":"SHIT",
	"decimal":0,
	},{
	"address":"0x8a187d5285d316bcbc9adafc08b51d70a0d8e000",
	"symbol":"SIFT",
	"decimal":0,
	},{
	"address":"0x2bDC0D42996017fCe214b21607a515DA41A9E0C5",
	"symbol":"SKIN",
	"decimal":6,
	},{
	"address":"0x4994e81897a920c0FEA235eb8CEdEEd3c6fFF697",
	"symbol":"SKO1",
	"decimal":18,
	},{
	"address":"0x4c382F8E09615AC86E08CE58266CC227e7d4D913",
	"symbol":"SKR",
	"decimal":6,
	},{
	"address":"0x7A5fF295Dc8239d5C2374E4D894202aAF029Cab6",
	"symbol":"SLT",
	"decimal":3,
	},{
	"address":"0x6F6DEb5db0C4994A8283A01D6CFeEB27Fc3bBe9C",
	"symbol":"Smart",
	"decimal":0,
	},{
	"address":"0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404",
	"symbol":"SNC",
	"decimal":18,
	},{
	"address":"0x44F588aEeB8C44471439D1270B3603c66a9262F1",
	"symbol":"SNIP",
	"decimal":18,
	},{
	"address":"0xf333b2Ace992ac2bBD8798bF57Bc65a06184afBa",
	"symbol":"SND",
	"decimal":0,
	},{
	"address":"0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009",
	"symbol":"SNGLS",
	"decimal":0,
	},{
	"address":"0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63",
	"symbol":"SNM",
	"decimal":18,
	},{
	"address":"0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
	"symbol":"SNT",
	"decimal":18,
	},{
	"address":"0xbdc5bac39dbe132b1e030e898ae3830017d7d969",
	"symbol":"SNOV",
	"decimal":18,
	},{
	"address":"0x1f54638b7737193ffd86c19ec51907a7c41755d8",
	"symbol":"SOL",
	"decimal":6,
	},{
	"address":"0x42d6622dece394b54999fbd73d108123806f6a18",
	"symbol":"SPANK",
	"decimal":18,
	},{
	"address":"0x58bf7df57d9DA7113c4cCb49d8463D4908C735cb",
	"symbol":"SPARC",
	"decimal":18,
	},{
	"address":"0x24aef3bf1a47561500f9430d74ed4097c47f51f2",
	"symbol":"SPARTA",
	"decimal":4,
	},{
	"address":"0x85089389C14Bd9c77FC2b8F0c3d1dC3363Bf06Ef",
	"symbol":"SPF",
	"decimal":18,
	},{
	"address":"0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25",
	"symbol":"SRN",
	"decimal":18,
	},{
	"address":"0x9a005c9a89bd72a4bd27721e7a09a3c11d2b03c4",
	"symbol":"STAC",
	"decimal":18,
	},{
	"address":"0xF70a642bD387F94380fFb90451C2c81d4Eb82CBc",
	"symbol":"STAR",
	"decimal":18,
	},{
	"address":"0x7dd7f56d697cc0f2b52bd55c057f378f1fe6ab4b",
	"symbol":"$TEAK",
	"decimal":18,
	},{
	"address":"0x599346779e90fc3F5F997b5ea715349820F91571",
	"symbol":"STN",
	"decimal":4,
	},{
	"address":"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
	"symbol":"STORJ",
	"decimal":8,
	},{
	"address":"0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433",
	"symbol":"STORM",
	"decimal":18,
	},{
	"address":"0xecd570bBf74761b960Fa04Cc10fe2c4e86FfDA36",
	"symbol":"STP",
	"decimal":8,
	},{
	"address":"0x46492473755e8dF960F8034877F61732D718CE96",
	"symbol":"STRC",
	"decimal":8,
	},{
	"address":"0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
	"symbol":"STX",
	"decimal":18,
	},{
	"address":"0x12480E24eb5bec1a9D4369CaB6a80caD3c0A377A",
	"symbol":"SUB",
	"decimal":2,
	},{
	"address":"0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a",
	"symbol":"SWM",
	"decimal":18,
	},{
	"address":"0xB9e7F8568e08d5659f5D29C4997173d84CdF2607",
	"symbol":"SWT",
	"decimal":18,
	},{
	"address":"0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf",
	"symbol":"SXDT",
	"decimal":18,
	},{
	"address":"0x2c82c73d5b34aa015989462b2948cd616a37641f",
	"symbol":"SXUT",
	"decimal":18,
	},{
	"address":"0x10b123fddde003243199aad03522065dc05827a0",
	"symbol":"SYN",
	"decimal":18,
	},{
	"address":"0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C",
	"symbol":"TaaS",
	"decimal":6,
	},{
	"address":"0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
	"symbol":"TAU",
	"decimal":18,
	},{
	"address":"0xFACCD5Fc83c3E4C3c1AC1EF35D15adf06bCF209C",
	"symbol":"TBC2",
	"decimal":8,
	},{
	"address":"0xAFe60511341a37488de25Bef351952562E31fCc1",
	"symbol":"TBT",
	"decimal":8,
	},{
	"address":"0x85e076361cc813a908ff672f9bad1541474402b2",
	"symbol":"TEL",
	"decimal":2,
	},{
	"address":"0xa7f976C360ebBeD4465c2855684D1AAE5271eFa9",
	"symbol":"TFL",
	"decimal":8,
	},{
	"address":"0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53",
	"symbol":"TIME",
	"decimal":8,
	},{
	"address":"0x80bc5512561c7f85a3a9508c7df7901b370fa1df",
	"symbol":"TIO",
	"decimal":18,
	},{
	"address":"0xEa1f346faF023F974Eb5adaf088BbCdf02d761F4",
	"symbol":"TIX",
	"decimal":18,
	},{
	"address":"0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
	"symbol":"TKN",
	"decimal":8,
	},{
	"address":"0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
	"symbol":"TNT",
	"decimal":8,
	},{
	"address":"0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
	"symbol":"TRST",
	"decimal":6,
	},{
	"address":"0xf230b790e05390fc8295f4d3f60332c93bed42e2",
	"symbol":"TRX",
	"decimal":6,
	},{
	"address":"0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
	"symbol":"UKG",
	"decimal":18,
	},{
	"address":"0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
	"symbol":"Unicorn",
	"decimal":0,
	},{
	"address":"0xdac17f958d2ee523a2206206994597c13d831ec7",
	"symbol":"USDT",
	"decimal":6,
	},{
	"address":"0xd01db73e047855efb414e6202098c4be4cd2423b",
	"symbol":"UQC",
	"decimal":18,
	},{
	"address":"0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38",
	"symbol":"UTK",
	"decimal":18,
	},{
	"address":"0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
	"symbol":"VEE",
	"decimal":18,
	},{
	"address":"0xEbeD4fF9fe34413db8fC8294556BBD1528a4DAca",
	"symbol":"VENUS",
	"decimal":3,
	},{
	"address":"0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
	"symbol":"VERI",
	"decimal":18,
	},{
	"address":"0xD850942eF8811f2A866692A623011bDE52a462C1",
	"symbol":"VET (VEN)",
	"decimal":18,
	},{
	"address":"0xe8ff5c9c75deb346acac493c463c8950be03dfba",
	"symbol":"VIBE",
	"decimal":18,
	},{
	"address":"0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
	"symbol":"VIB",
	"decimal":18,
	},{
	"address":"0x882448f83d90b2bf477af2ea79327fdea1335d93",
	"symbol":"VIBEX",
	"decimal":18,
	},{
	"address":"0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5",
	"symbol":"VIU",
	"decimal":18,
	},{
	"address":"0x83eea00d838f92dec4d1475697b9f4d3537b56e3",
	"symbol":"VOISE",
	"decimal":8,
	},{
	"address":"0xeDBaF3c5100302dCddA53269322f3730b1F0416d",
	"symbol":"VRS",
	"decimal":5,
	},{
	"address":"0x5c543e7AE0A1104f78406C340E9C64FD9fCE5170",
	"symbol":"VSL",
	"decimal":18,
	},{
	"address":"0x286BDA1413a2Df81731D4930ce2F862a35A609fE",
	"symbol":"WaBi",
	"decimal":18,
	},{
	"address":"0x39Bb259F66E1C59d5ABEF88375979b4D20D98022",
	"symbol":"WAX",
	"decimal":8,
	},{
	"address":"0x74951B677de32D596EE851A233336926e6A2cd09",
	"symbol":"WBA",
	"decimal":7,
	},{
	"address":"0x6a0a97e47d15aad1d132a1ac79a480e3f2079063",
	"symbol":"WCT",
	"decimal":18,
	},{
	"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
	"symbol":"WETH",
	"decimal":18,
	},{
	"address":"0x5e4ABE6419650CA839Ce5BB7Db422b881a6064bB",
	"symbol":"WiC",
	"decimal":18,
	},{
	"address":"0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
	"symbol":"WINGS",
	"decimal":18,
	},{
	"address":"0xF6B55acBBC49f4524Aa48D19281A9A77c54DE10f",
	"symbol":"WLK",
	"decimal":18,
	},{
	"address":"0x728781E75735dc0962Df3a51d7Ef47E798A7107E",
	"symbol":"WOLK",
	"decimal":18,
	},{
	"address":"0x62087245087125d3db5b9a3d713d78e7bbc31e54",
	"symbol":"WPC",
	"decimal":18,
	},{
	"address":"0x910Dfc18D6EA3D6a7124A6F8B5458F281060fa4c",
	"symbol":"X8X",
	"decimal":18,
	},{
	"address":"0x4DF812F6064def1e5e029f1ca858777CC98D2D81",
	"symbol":"XAUR",
	"decimal":8,
	},{
	"address":"0x4d829f8c92a6691c56300d020c9e0db984cfe2ba",
	"symbol":"XCC",
	"decimal":18,
	},{
	"address":"0x533ef0984b2FAA227AcC620C67cce12aA39CD8CD",
	"symbol":"XGM",
	"decimal":8,
	},{
	"address":"0x30f4A3e0aB7a76733D8b60b89DD93c3D0b4c9E2f",
	"symbol":"XGT",
	"decimal":18,
	},{
	"address":"0xB110eC7B1dcb8FAB8dEDbf28f53Bc63eA5BEdd84",
	"symbol":"XID",
	"decimal":8,
	},{
	"address":"0xab95e915c123fded5bdfb6325e35ef5515f1ea69",
	"symbol":"XNN",
	"decimal":18,
	},{
	"address":"0x572e6f318056ba0c5d47a422653113843d250691",
	"symbol":"XNT",
	"decimal":0,
	},{
	"address":"0xB24754bE79281553dc1adC160ddF5Cd9b74361a4",
	"symbol":"XRL",
	"decimal":9,
	},{
	"address":"0x0F513fFb4926ff82D7F60A05069047AcA295C413",
	"symbol":"XSC",
	"decimal":18,
	},{
	"address":"0x0F33bb20a282A7649C7B3AFf644F084a9348e933",
	"symbol":"YUPIE",
	"decimal":18,
	},{
	"address":"0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
	"symbol":"ZAP",
	"decimal":18,
	},{
	"address":"0x05f4a42e251f2d52b8ed15E9FEdAacFcEF1FAD27",
	"symbol":"ZIL",
	"decimal":12,
	},{
	"address":"0xE41d2489571d322189246DaFA5ebDe1F4699F498",
	"symbol":"ZRX",
	"decimal":18,
	},{
	"address":"0xe386b139ed3715ca4b18fd52671bdcea1cdfe4b1",
	"symbol":"ZST",
	"decimal":8,
	}
];

/*
 2017-01-26
list of all tokens with a balance >1 on etherdelta (from ethplorer)
manually generated by allTokens.html as ethplorer api is too slow */
let allShitCoins = 
[{"addr":"0x003f79d7be15dc1ad90ce00e6ea68f335e2b789b","name":"TZT","decimals":"8"},{"addr":"0x006bea43baa3f7a6f765f14f10a1a1b08334ef45","name":"STX","decimals":18},{"addr":"0x006dcb587a467e0243318980e343937b7ad849ca","name":"STOCK","decimals":"18"},{"addr":"0x00a0cbe98e4d110b0fa82646152d77babf2951d0","name":"EETHER","decimals":"18"},{"addr":"0x00b9034425e357bf61b4abeb22299ec4a62c725b","name":"CE","decimals":"8"},{"addr":"0x00ba68fd9c80bdd136344471ea7d437cd5a6c27d","name":"HME","decimals":"18"},{"addr":"0x013a06558f07d9e6f9a00c95a33f3a0e0255176b","name":"BALI","decimals":"18"},{"addr":"0x0142c3b2fc51819b5af5dfc4aa52df9722790851","name":"PYN","decimals":"18"},{"addr":"0x014b50466590340d41307cc54dcee990c8d58aa8","name":"ICOS","decimals":6},{"addr":"0x017188526374f723ec66509ea0c44dd797a33c84","name":"FENX","decimals":0},{"addr":"0x01a7018e6d1fde8a68d12f59b6532fb523b6259d","name":"USD","decimals":8},{"addr":"0x01b3ec4aae1b8729529beb4965f27d008788b0eb","name":"DPP","decimals":"18"},{"addr":"0x01c587cecfa1e4dfb5fbb744b8ebdd835ca05716","name":"VCN","decimals":"18"},{"addr":"0x01c67791309c71aa4ed373025a0c089696d7c9e4","name":"CCB","decimals":"18"},{"addr":"0x0223fc70574214f65813fe336d870ac47e147fae","name":"CZR","decimals":"18"},{"addr":"0x0229cc0290da2a9d2a80a8c7cd283d046b1ada57","name":"VTN","decimals":"18"},{"addr":"0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa","name":"GTKT","decimals":0},{"addr":"0x02725836ebf3ecdb1cdf1c7b02fcbbfaa2736af8","name":"BTCA","decimals":"8"},{"addr":"0x02b6700c0282a687d66f3e09723bed55f23d5b83","name":"TTN","decimals":0},{"addr":"0x02b9806a64cb05f02aa8dcc1c178b88159a61304","name":"DEL","decimals":"18"},{"addr":"0x0312982be24b63344558d3b3d8c58119a22b1e63","name":"TET","decimals":0},{"addr":"0x0314c91f3359165baf32ba0c2a9631e09baf7317","name":"RICH","decimals":"18"},{"addr":"0x0371a82e4a9d0a4312f3ee2ac9c6958512891372","name":"STU","decimals":18},{"addr":"0x03806ce5ef69bd9780edfb04c29da1f23db96294","name":"TSL","decimals":18},{"addr":"0x038da599a137f89f49b43cd0d561d5e159058b60","name":"EDEX","decimals":"8"},{"addr":"0x03c18d649e743ee0b09f28a81d33575f03af9826","name":"WBC","decimals":"7"},{"addr":"0x03cd7d4706dfdb2c69efc12cabf2a9a1eb3fc981","name":"SNB","decimals":0},{"addr":"0x03d4d7e2cbaba7f86246bb94a35ba8e0e6fbedfa","name":"CRCL ","decimals":"18"},{"addr":"0x03dcbedc7f08f9fe276948d7b06a180834e80ece","name":"LTCD","decimals":"8"},{"addr":"0x03df4c372a29376d2c8df33a1b5f001cd8d68b0e","name":"BTCM","decimals":8},{"addr":"0x0425cbbc5ff784203fe8d82beefa2b02634351f5","name":"FBR","decimals":"18"},{"addr":"0x0445ae32d33066a29e4573bf15d4a2a9690ab754","name":"CBR","decimals":"18"},{"addr":"0x047055f35cb837e838dde0202b7b1a5a75757835","name":"ETHP","decimals":"18"},{"addr":"0x0474d1d1f9fb6b6db80b150512dbf12f6564c49e","name":"BFI","decimals":"18"},{"addr":"0x049509cb0e5720a3eadd7e7f736a5a05cf810070","name":"SHIT","decimals":"5"},{"addr":"0x04f2e7221fdb1b52a68169b25793e51478ff0329","name":"CAPP","decimals":"2"},{"addr":"0x056017c55ae7ae32d12aef7c679df83a85ca75ff","name":"WYV","decimals":"18"},{"addr":"0x059e3ead0a5675e4139c820d799e20be9c75bc3d","name":"LTCRED","decimals":"8"},{"addr":"0x05c7065d644096a4e4c3fe24af86e36de021074b","name":"LCT","decimals":"18"},{"addr":"0x05d379b48a8622ae4018309e116420db4a38a225","name":"ELYTE","decimals":"18"},{"addr":"0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27","name":"ZIL","decimals":"12"},{"addr":"0x060fabf423fbf58cce4f30501e5262020534b4bf","name":"ETH0","decimals":"18"},{"addr":"0x06129490f7fd125d331c49931d6a765b6223e4ee","name":"BCP","decimals":0},{"addr":"0x06147110022b768ba8f99a8f385df11a151a9cc8","name":"ACE","decimals":0},{"addr":"0x06a336b88d72f471bb54438c42ecb1f9f3cf7df7","name":"VNC","decimals":"8"},{"addr":"0x070c9244a54353a0f9c43670b21856df2cc4e439","name":"TREE","decimals":"8"},{"addr":"0x0766e79a6fd74469733e8330b3b461c0320ff059","name":"EXN","decimals":"18"},{"addr":"0x0767fa882b9634df15ff2f87c46e0e1a406a982f","name":"ETR","decimals":18},{"addr":"0x076a93a40bf9e0d21d3f75dd1e0584ddbe0f9d1a","name":"QURO","decimals":"18"},{"addr":"0x076c97e1c869072ee22f8c91978c99b4bcb02591","name":"CBT","decimals":"18"},{"addr":"0x076ce20cafa1eed53dea8f34079b4bb31cc5c503","name":"HALW","decimals":0},{"addr":"0x0784dbabb6c6834bddfb7cfee116ba049e5dafab","name":"IBTC","decimals":"18"},{"addr":"0x07be17b2695881fa100e92815edcff0b042b4a8c","name":"SMA","decimals":"6"},{"addr":"0x07c5b1e4391fcdfc6c12548448aeee30a3793079","name":"YOLO","decimals":0},{"addr":"0x07d9e49ea402194bf48a8276dafb16e4ed633317","name":"DALC","decimals":"8"},{"addr":"0x07e3c70653548b04f0a75970c1f81b4cbbfb606f","name":"DLT","decimals":18},{"addr":"0x07e76a4c93ea197cb578fef37d046972890df61b","name":"BIG","decimals":"18"},{"addr":"0x082e13494f12ebb7206fbf67e22a6e1975a1a669","name":"ARTIS","decimals":"8"},{"addr":"0x0835ecd15ddf08d4786304d71b4672dc5c40f011","name":"PLC","decimals":"18"},{"addr":"0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c","name":"EDG","decimals":0},{"addr":"0x0879e0c9822b75f31f0b0ed2a30be9f484a57c2f","name":"LTG","decimals":0},{"addr":"0x0886949c1b8c412860c4264ceb8083d1365e86cf","name":"BTCE","decimals":"8"},{"addr":"0x089a6d83282fb8988a656189f1e7a73fa6c1cac2","name":"PGL","decimals":18},{"addr":"0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6","name":"٨","decimals":0},{"addr":"0x08da80f28b960bdfab798c172ff20619540b9ce5","name":"OWN","decimals":18},{"addr":"0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8","name":"TNT","decimals":8},{"addr":"0x08f8117155aa9414b67113a47ad269d47974e9dc","name":"DHG","decimals":"18"},{"addr":"0x08fd34559f2ed8585d3810b4d96ab8a05c9f97c5","name":"CLRT","decimals":"18"},{"addr":"0x09101ba75c5e8aae3713e7d35629b7cd6009dc31","name":"ETHC","decimals":"18"},{"addr":"0x0994b7e142c0ac1b6554daa64c7865ddc4e54df7","name":"TSPD","decimals":"3"},{"addr":"0x0996bfb5d057faa237640e2506be7b4f9c46de0b","name":"RNDR","decimals":"18"},{"addr":"0x09c51ddf9246b767ef0aaba2535f92644dc13423","name":"QSP","decimals":"18"},{"addr":"0x09d8b66c48424324b25754a873e290cae5dca439","name":"NVT","decimals":"18"},{"addr":"0x09debe702678140c1be278213109719fab98d0d8","name":"MOL","decimals":"18"},{"addr":"0x0a2b7fd09f82b221f4704dc2501eb4c12cce346d","name":"LOQ","decimals":"18"},{"addr":"0x0a76aad21948ea1ef447d26dee91a54370e151e0","name":"ELITE","decimals":"18"},{"addr":"0x0abdace70d3790235af448c88547603b945604ea","name":"DNT","decimals":18},{"addr":"0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4","name":"FRD","decimals":"18"},{"addr":"0x0aef06dcccc531e581f0440059e6ffcc206039ee","name":"ITT","decimals":"8"},{"addr":"0x0af44e2784637218dd1d32a322d44e603a8f0c6a","name":"MTX","decimals":18},{"addr":"0x0affa06e7fbe5bc9a764c979aa66e8256a631f02","name":"PLBT","decimals":6},{"addr":"0x0b0eedce3568ab235cd1b69fcd23dd1d02782c72","name":"ETHBT","decimals":"18"},{"addr":"0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3","name":"RIYA","decimals":"8"},{"addr":"0x0b24fdf35876bbe2a1cc925321b8c301017474d4","name":"JWT","decimals":18},{"addr":"0x0b76544f6c413a555f309bf76260d1e02377c02a","name":"INT","decimals":"6"},{"addr":"0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e","name":"SWFTC","decimals":"8"},{"addr":"0x0bee5ca8dda2c0b8edd1c4369f7cc35d243e547f","name":"VCA","decimals":"8"},{"addr":"0x0c05bc80fa1b6cc4f4aa0647f9eb8408353fc5cb","name":"XRG","decimals":"1"},{"addr":"0x0c29c5a975e44eaaef500af91119d927bcd47376","name":"LNR","decimals":"2"},{"addr":"0x0c4ce0c0ce69bd1cf22dc196175f482f547b2bbd","name":"LAMBO","decimals":"10"},{"addr":"0x0cf0ee63788a0849fe5297f3407f701e122cc023","name":"DATA","decimals":18},{"addr":"0x0d454ef28bde62678d878921287660587a18cd89","name":"LINE","decimals":0},{"addr":"0x0d547f8b8d7201523a834addbb27e40140ee6f18","name":"∞","decimals":0},{"addr":"0x0d5516103752b3954d95621f470a8261151da2e4","name":"BZT","decimals":"18"},{"addr":"0x0d8775f648430679a709e98d2b0cb6250d2887ef","name":"BAT","decimals":"18"},{"addr":"0x0d88ed6e74bbfd96b831231638b66c05571e824f","name":"AVT","decimals":18},{"addr":"0x0db8d8b76bc361bacbb72e2c491e06085a97ab31","name":"IQN","decimals":"18"},{"addr":"0x0dbbb68713131186748d4b8b09bc3aa73d61c09e","name":"X3P","decimals":"18"},{"addr":"0x0dc28ced73c972a7b4759192c9fd000dbb05f715","name":"RCF","decimals":"4"},{"addr":"0x0df2f1b53ea0479952845f11d56efab3cd4eed97","name":"LTTC","decimals":0},{"addr":"0x0e06be8a0023f024bb18aa72864e3733b556f509","name":"PRFT","decimals":"18"},{"addr":"0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195","name":"POE","decimals":8},{"addr":"0x0e6e0796f6289d1d887b1067979bf724b50bac00","name":"NXX","decimals":"8"},{"addr":"0x0e935e976a47342a4aee5e32ecf2e7b59195e82f","name":"BMB","decimals":"18"},{"addr":"0x0e9c4d8610aa2cf0dabdabb19920a1c810b65720","name":"KC","decimals":"8"},{"addr":"0x0ea560c60f92c70b06974210f3ce54c0dcec4865","name":"RULE","decimals":"18"},{"addr":"0x0ebb614204e47c09b6c3feb9aaecad8ee060e23e","name":"CPAY","decimals":0},{"addr":"0x0ed74a3ecc90270d18a3b3a8eb0042a7cdd03b19","name":"MINEX","decimals":"8"},{"addr":"0x0ef27c7606a021457f161859d4952396aff9a92b","name":"FILC","decimals":"18"},{"addr":"0x0efc879783e3116306e21d25564e9254ab671ea2","name":"BCRB","decimals":"8"},{"addr":"0x0f06cd2465cce4d769554992f7e498dc3a4ac7de","name":"CTH","decimals":"18"},{"addr":"0x0f33bb20a282a7649c7b3aff644f084a9348e933","name":"YUP","decimals":"18"},{"addr":"0x0f4546bb7fdb5929eee6736ed5794d3e6f5a9fa1","name":"HCT","decimals":"18"},{"addr":"0x0f4ca92660efad97a9a70cb0fe969c755439772c","name":"LEV","decimals":"9"},{"addr":"0x0f513ffb4926ff82d7f60a05069047aca295c413","name":"XSC","decimals":"18"},{"addr":"0x0f587d0b7b1c1ef68b432936b75c4d6c4d12b647","name":"MAT","decimals":"18"},{"addr":"0x0f598112679b78e17a4a9febc83703710d33489c","name":"XMRG","decimals":"8"},{"addr":"0x0f5d2fb29fb7d3cfee444a200298f468908cc942","name":"MANA","decimals":18},{"addr":"0x0f9b1d1d39118480cf8b9575419ea4e5189c88dd","name":"WEA","decimals":0},{"addr":"0x0fa698f8b7464d6d9597ecfc8f44d353b1a735d1","name":"EPL","decimals":0},{"addr":"0x0fbed6ecf20ec8f8008d0d8784f5ffc9d82aa048","name":"HANNA","decimals":"18"},{"addr":"0x0fe3c885b9212abd7dee0f54a2616c1ca9572afd","name":"TTN02","decimals":"18"},{"addr":"0x0ffab58ea5a71cc3ca40217706c3c401407fa4a8","name":"INDI","decimals":"18"},{"addr":"0x100c56b3d32ec2d620ea0408b15e9b682de3c48a","name":"ETC","decimals":0},{"addr":"0x103c3a209da59d3e7c4a89307e66521e081cfdf0","name":"GVT","decimals":"18"},{"addr":"0x1063ce524265d5a3a624f4914acd573dd89ce988","name":"AIX","decimals":"18"},{"addr":"0x107c4504cd79c5d2696ea0030a8dd4e92601b82e","name":"BLT","decimals":"18"},{"addr":"0x108c05cac356d93b351375434101cfd3e14f7e44","name":"BEN","decimals":"4"},{"addr":"0x108caf59641fc5d27502a87e641872b62d606ae2","name":"GREEN","decimals":"8"},{"addr":"0x10c0337c42843e0b8ce743d7d5ff39b711f3ad82","name":"WND","decimals":"18"},{"addr":"0x11175e64c6082fa06daf689c59a510c2774253a1","name":"BCS","decimals":"2"},{"addr":"0x11468d142559f6ab61e69b47f30fa6a36c93ee92","name":"COMBI","decimals":"10"},{"addr":"0x1175a66a5c3343bbf06aa818bb482ddec30858e0","name":"CIX","decimals":"18"},{"addr":"0x1183f92a5624d68e85ffb9170f16bf0443b4c242","name":"QVT","decimals":"18"},{"addr":"0x119b839a1b8bfb735f65dcae2307db70e66bbf0a","name":"DATA","decimals":"18"},{"addr":"0x120c76a9cc4e4746ce37d31cfd493d99781e30e7","name":"MITO","decimals":"2"},{"addr":"0x122a86b5dff2d085afb49600b4cd7375d0d94a5f","name":"ITL","decimals":"8"},{"addr":"0x1234567461d3f8db7496581774bd869c83d51c93","name":"CAT","decimals":"18"},{"addr":"0x124448218ab51f333fef2a5ba3b84cfa9f67b9a3","name":"BOBP","decimals":"18"},{"addr":"0x1245de75147f5cd80a2826e7ff935f7aeefb6016","name":"ETD","decimals":"6"},{"addr":"0x1245ef80f4d9e02ed9425375e8f649b9221b31d8","name":"ARCT","decimals":"8"},{"addr":"0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a","name":"SUB","decimals":"2"},{"addr":"0x12a35383ca24ceb44cdcbbecbeb7baccb5f3754a","name":"CS","decimals":"6"},{"addr":"0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd","name":"GRID","decimals":"12"},{"addr":"0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf","name":"SXDT","decimals":"18"},{"addr":"0x12cf1cbadde369a01d58f31ff57e91db8c34364a","name":"EZM","decimals":"8"},{"addr":"0x12f2185474286a25fb766a965c824b18521fbc9a","name":"PPETH","decimals":"8"},{"addr":"0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e","name":"CFI","decimals":18},{"addr":"0x138a8752093f4f9a79aaedf48d4b9248fab93c9c","name":"MCI","decimals":18},{"addr":"0x13a39fd40fdf047beba6d4f9d05961b70d6b30a2","name":"STKX","decimals":"18"},{"addr":"0x13d6b121817d78fac403ebf2c59c0c93583991df","name":"MCC","decimals":"18"},{"addr":"0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed","name":"TFT","decimals":"8"},{"addr":"0x13f11c9905a08ca76e3e853be63d4f0944326c72","name":"DIVX","decimals":"18"},{"addr":"0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2","name":"ACC","decimals":"18"},{"addr":"0x14114ea8209bb8998f865a0cf3bacd0f6cab836d","name":"BTCONE","decimals":0},{"addr":"0x14338e7e14861c68984e5d5da191c31dd3309945","name":"CLC","decimals":"2"},{"addr":"0x1440147231cf81f08734e20bf171a48820527306","name":"UNV","decimals":"6"},{"addr":"0x1440643f2696c791d4c7dfeea8555635c33ea74b","name":"BLCX","decimals":"18"},{"addr":"0x1450903c63645de5ce4b281a2f00fc934fee77fa","name":"EB2X","decimals":"8"},{"addr":"0x14839bf22810f09fb163af69bd21bd5476f445cd","name":"CFD","decimals":"18"},{"addr":"0x1487f4195d9953f6930c959a683a49501a8cc8bc","name":"MNKY","decimals":"18"},{"addr":"0x149a23f3d1a1e61e1e3b7eddd27f32e01f9788c7","name":"CCT","decimals":"18"},{"addr":"0x14c99c14bc607cae9d1ca41f046e3fd8d6f076c0","name":"FOOD","decimals":"18"},{"addr":"0x14e44a0cb5a5302b742d13028dd854557dfe1490","name":"XMRD","decimals":0},{"addr":"0x14f37b574242d366558db61f3335289a5035c506","name":"HKG","decimals":3},{"addr":"0x14fffb1e001615b7fb7c7857bdf440a610022e5b","name":"SCX","decimals":0},{"addr":"0x1500205f50bf3fd976466d0662905c9ff254fc9c","name":"BBT","decimals":"4"},{"addr":"0x159dc1c54d409bd694bc1e756d6e17a02d6bf167","name":"CHT","decimals":"7"},{"addr":"0x15e5c9aa71b8154806038aefc587cfe19b0bc5d6","name":"DEK","decimals":"18"},{"addr":"0x15f173b7aca7cd4a01d6f8360e65fb4491d270c1","name":"eREAL","decimals":"18"},{"addr":"0x163733bcc28dbf26b41a8cfa83e369b5b3af741b","name":"PRS","decimals":18},{"addr":"0x164f64ef2a44444743c5472fa68fb3784060d286","name":"T8C","decimals":"3"},{"addr":"0x166810fb5cacf1ea15f3884db4f416ba85ac1d4a","name":"ICOS","decimals":0},{"addr":"0x168296bb09e24a88805cb9c33356536b980d3fc5","name":"RHOC","decimals":8},{"addr":"0x16b0a1a87ae8af5c792fabc429c4fe248834842b","name":"ALG","decimals":"18"},{"addr":"0x16b5a0de0520e1964a20ac8ef4034bd7d0920d8f","name":"TIO","decimals":"18"},{"addr":"0x16c6e19ea1b4965b5f852f2ec93b89fb90d8b037","name":"NEW","decimals":0},{"addr":"0x16f812be7fff02caf662b85d5d58a5da6572d4df","name":"UTT","decimals":"8"},{"addr":"0x174177908042e205729a73a8b7da37e5ec824105","name":"CATA","decimals":"18"},{"addr":"0x1757a46870388f3a1cd7007c8567e3d1b5d3e5d7","name":"LOOT018","decimals":"18"},{"addr":"0x1776e1f26f98b1a5df9cd347953a26dd3cb46671","name":"NMR","decimals":18},{"addr":"0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af","name":"CDT","decimals":18},{"addr":"0x179a2e413386db620d5b89a18550a3874385f726","name":"FIT","decimals":"5"},{"addr":"0x17c39ce58cc61b584817200f501ba5b0bbf58928","name":"GLOV010","decimals":"18"},{"addr":"0x17c432e543952f950e8cb05dd5107efe6864d1de","name":"MGT","decimals":0},{"addr":"0x17ce2e15246907e9d7029754f13783bab89951a7","name":"EMN","decimals":0},{"addr":"0x17f93475d2a978f527c3f7c44abf44adfba60d5c","name":"ECO2","decimals":"2"},{"addr":"0x17fd666fa0784885fa1afec8ac624d9b7e72b752","name":"FLIK","decimals":"14"},{"addr":"0x180e5087935a94fd5bbab00fd2249c5be0473381","name":"ZCG","decimals":"8"},{"addr":"0x1819cbbff734e10fd1af755fffdcede44121e841","name":"TIB","decimals":"18"},{"addr":"0x181a63746d3adcf356cbc73ace22832ffbb1ee5a","name":"ALCO","decimals":"8"},{"addr":"0x1844b21593262668b7248d0f57a220caaba46ab9","name":"PRL","decimals":"18"},{"addr":"0x189448c9709e766d08ff25278e9f4d2f1b4dbefd","name":"BTC9X","decimals":"18"},{"addr":"0x189c05c3c191015c694032e1b09c190d5db3fb50","name":"RCN","decimals":"8"},{"addr":"0x18cabd1e7db6c52406719cb72859ea2c2eea75d6","name":"eGO","decimals":"18"},{"addr":"0x190289e0f72dfd611121da7dd9f3e6c92b8f71e4","name":"HHT","decimals":"18"},{"addr":"0x190e569be071f40c704e15825f285481cb74b6cc","name":"FAM","decimals":12},{"addr":"0x190fb342aa6a15eb82903323ae78066ff8616746","name":"UMC","decimals":6},{"addr":"0x1961b3331969ed52770751fc718ef530838b6dee","name":"BDG","decimals":"18"},{"addr":"0x19aea60e2fd6ac54ecf2576292c8fc7046429c37","name":"HUB","decimals":"18"},{"addr":"0x19e7ce00e34ec1669371dd5751652edf9db5e13f","name":"NeoB","decimals":"18"},{"addr":"0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db","name":"APPC","decimals":"18"},{"addr":"0x1a86b24ca84aa7049a974bb6db83f0bd80c60713","name":"DTCN","decimals":"18"},{"addr":"0x1b1b94a8936bbd9d6a0d83b12eb51d7e09a05829","name":"TWC","decimals":"2"},{"addr":"0x1b3bde49d13aec2d3629be78c341f61fd21a7cc4","name":"MERI","decimals":"18"},{"addr":"0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa","name":"HQX","decimals":"18"},{"addr":"0x1b9743f556d65e757c4c650b4555baf354cb8bd3","name":"ETBS","decimals":"12"},{"addr":"0x1bb5ddcb02d98d30c2a42e018b99f96651e676eb","name":"ZCH","decimals":"18"},{"addr":"0x1bb9e8ea817d56eccc212ce63f7da95298f98719","name":"SHIT","decimals":"2"},{"addr":"0x1bca728c39d05529ad4257943f620734b151cade","name":"BMLT","decimals":"18"},{"addr":"0x1bcbc54166f6ba149934870b60506199b6c9db6d","name":"ROC","decimals":"10"},{"addr":"0x1c4481750daa5ff521a2a7490d9981ed46465dbd","name":"BCPT","decimals":"18"},{"addr":"0x1ca6ac0ce771094f0f8a383d46bf3acc9a5bf27f","name":"CRO6","decimals":0},{"addr":"0x1d10997e92011398a20612f9ee87e33449bc1fe4","name":"1KT","decimals":"18"},{"addr":"0x1d12a8f6e7fe8ed0a09beab166f04fa57bd2a9fb","name":"115","decimals":"18"},{"addr":"0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0","name":"CAN","decimals":"6"},{"addr":"0x1d9e20e581a5468644fe74ccb6a46278ef377f9e","name":"CDRT","decimals":"8"},{"addr":"0x1db186898bccde66fa64a50e4d81078951a30dbe","name":"LLA","decimals":"18"},{"addr":"0x1db42ceba6bdebf86d287e11b159ff97b083b8af","name":"GRMTK","decimals":"18"},{"addr":"0x1dcca85d79f29691a718741b7ee9b645b77d55f2","name":"WAN","decimals":"18"},{"addr":"0x1e287575d026fa3f8ed0c48c36b50ea3d9e2161b","name":"ICMG","decimals":0},{"addr":"0x1e89b045e633c80d2bd1e0dd6bb69a5e7fdfb21a","name":"FRNC","decimals":18},{"addr":"0x1eab19e6623e8cbcafc252e275f5b51c27656faf","name":"SPNK","decimals":"8"},{"addr":"0x1ee002b8e8bee60fad789dda0532ead145ee740f","name":"PUFF","decimals":"8"},{"addr":"0x1ef729b095d5c657099607a662c1ae29f932cb5a","name":"TAT","decimals":0},{"addr":"0x1f103fd7c4fa908c25387da70ed287b632bd22a2","name":"ELTC","decimals":"18"},{"addr":"0x1f2aa56106958762c20028f324e6b7366267eb35","name":"ALCT","decimals":"18"},{"addr":"0x1f54638b7737193ffd86c19ec51907a7c41755d8","name":"SOL","decimals":"6"},{"addr":"0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c","name":"BNT","decimals":18},{"addr":"0x1fc52f1abade452dd4674477d4711951700b3d27","name":"NOKU","decimals":"18"},{"addr":"0x1fe70be734e473e5721ea57c8b5b01e6caa52686","name":"RNTB","decimals":"18"},{"addr":"0x200f96afa416d6ad606e5f3953f287a7282b8551","name":"XSC","decimals":"18"},{"addr":"0x202e295df742befa5e94e9123149360db9d9f2dc","name":"NIH","decimals":"8"},{"addr":"0x206542027973b80463e8cfcd14c6f84a9c963a61","name":"CC ","decimals":"18"},{"addr":"0x20e94867794dba030ee287f1406e100d03c84cd3","name":"DEW","decimals":"18"},{"addr":"0x21692a811335301907ecd6343743791802ba7cfd","name":"ADU","decimals":"18"},{"addr":"0x219218f117dc9348b358b8471c55a073e5e0da0b","name":"GRX","decimals":18},{"addr":"0x21f6de6b0647775f7e95f9426870e56723c79023","name":"eAMAZON","decimals":"18"},{"addr":"0x2233799ee2683d75dfefacbcd2a26c78d34b470d","name":"NTWK","decimals":"18"},{"addr":"0x22467d25320dda37f254b0f56309c2bce673ba62","name":"NAT","decimals":18},{"addr":"0x22572d7fb23b5f7d35cadeee405ecb5e89b8ae9d","name":"HT","decimals":"18"},{"addr":"0x226141dc7a1ebee5a8551cbcc75d465501372d67","name":"WTC","decimals":"18"},{"addr":"0x226bb599a12c826476e3a771454697ea52e9e220","name":"PRO","decimals":"8"},{"addr":"0x22a3b451d60a72388a37c97bc517e44ad76a50f7","name":"XBTY","decimals":"18"},{"addr":"0x22c10728343e9d49ef25080f74a223878a3d4052","name":"DRP","decimals":"8"},{"addr":"0x22db56bfe6347bdfe4a8a45be5f18e0b10f5650d","name":"REKT","decimals":"18"},{"addr":"0x231be4c574b35a6fe3f4db5f77e3c7cd3a834c69","name":"SEAFOOD","decimals":"6"},{"addr":"0x233cea452c8b2e46f54d3772592edfeb8edbb763","name":"TKT","decimals":"18"},{"addr":"0x23aba988c3a61fbfbf58515d886f8f707b39190e","name":"888","decimals":"18"},{"addr":"0x23cb17d7d079518dbff4febb6efcc0de58d8c984","name":"TRV","decimals":"16"},{"addr":"0x2405cc17ba128bfa7117815e04a4da228013f5bc","name":"BNN","decimals":"8"},{"addr":"0x24083bb30072643c3bb90b44b7285860a755e687","name":"GELD","decimals":"18"},{"addr":"0x241684ef15683ca57c42d8f4bb0e87d3427ddf1c","name":"TRM","decimals":8},{"addr":"0x24203996dca9131aad08f7be29e227342a0946b9","name":"VEND","decimals":"8"},{"addr":"0x242d07ca5ff875101f91c4fab27a11218ea7f53c","name":"ERR","decimals":"18"},{"addr":"0x2449224f42ce230c5b67e1d48bdceb224b0f72d7","name":"DIVM","decimals":"18"},{"addr":"0x245740bcbde7fb21d6806fe519b19b612b6d4fc3","name":"PELO","decimals":"18"},{"addr":"0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b","name":"UKG","decimals":"18"},{"addr":"0x2469f31a34fcaac0debf73806ce39b2388874b13","name":"PPT","decimals":"18"},{"addr":"0x2496477fb081a0ee9d62e7c32d897872f28ae86c","name":"VRT","decimals":"9"},{"addr":"0x2498aa67cd08ac321085734a8570137ec2001731","name":"VRS","decimals":"18"},{"addr":"0x24a77c1f17c547105e14813e517be06b0040aa76","name":"LIVE","decimals":"18"},{"addr":"0x24aef3bf1a47561500f9430d74ed4097c47f51f2","name":"SPARTA","decimals":"4"},{"addr":"0x24ca6dff3f02037811e768de67177124c3a8fec3","name":"NC2","decimals":10},{"addr":"0x250279d95438d130fbbce6c1b57c56ddd776765b","name":"BOB","decimals":"6"},{"addr":"0x252e3fafe89fdf030bd188c0db8fe74927b973f3","name":"DKZ","decimals":"18"},{"addr":"0x254e9bb84c9118d1501f0b7c45aad6038b765735","name":"CTM","decimals":"18"},{"addr":"0x254f91949d4f57b22392ba0278069cf5a9105f05","name":"CAF","decimals":"6"},{"addr":"0x255332e35bfacb66ad6e1cda169ce07aeb7802b6","name":"BTCUNI","decimals":0},{"addr":"0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6","name":"RDN","decimals":"18"},{"addr":"0x25f8cbe932495f3f172547243edef200792ebb66","name":"BOPTI","decimals":"8"},{"addr":"0x2604fa406be957e542beb89e6754fcde6815e83f","name":"PKT","decimals":18},{"addr":"0x263c618480dbe35c300d8d5ecda19bbb986acaed","name":"MOT","decimals":"18"},{"addr":"0x26607f9bf9d62a37b0c78e1d3719fcd1fa32bef9","name":"GFL","decimals":"18"},{"addr":"0x268b7976e94e84a48bf8b2b57ba34b59ed836a74","name":"XAI","decimals":"8"},{"addr":"0x2690c2f544b28d99e05a2987d61b7becd4aaf15a","name":"GTM","decimals":"18"},{"addr":"0x2694e909e77e6c066870a29f54428fa369cbd633","name":"1ether","decimals":"18"},{"addr":"0x26b06b2b76220e36b40fa206543184fcf96ed362","name":"LUC","decimals":"8"},{"addr":"0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb","name":"ERC","decimals":"18"},{"addr":"0x26e75307fc0c021472feb8f727839531f112f317","name":"C20","decimals":"18"},{"addr":"0x26f4ab1443a9f6baa5737bbcdd75bafd5bc0cac3","name":"ePSB","decimals":"18"},{"addr":"0x27054b13b1b798b345b591a4d22e6562d47ea75a","name":"AST","decimals":"4"},{"addr":"0x270fb3bd1ad2678476d556b39053a5d148b91b69","name":"ZTH","decimals":"2"},{"addr":"0x2713fdfc558fbae3ad603e3504c73e668fe15aa1","name":"flkd","decimals":0},{"addr":"0x27472b12ee7ea0145ae6f8c8750c2284296c94d8","name":"RESO093","decimals":"18"},{"addr":"0x27537ff4df3081cef9bee9b29cac764067b42611","name":"SLIP","decimals":0},{"addr":"0x275fd328c3986be83f8b60f79c73cf63fde98ca5","name":"CSL","decimals":"18"},{"addr":"0x27688cbdc27f547e18faf85f33253d569c0e6d41","name":"RLT","decimals":"18"},{"addr":"0x27695e09149adc738a978e9a678f99e4c39e9eb9","name":"KICK","decimals":"8"},{"addr":"0x2787d949ef75a42e6651680877bfb4f85e4f1795","name":"TuDT","decimals":"8"},{"addr":"0x27aa2eefd593dbe90e386910c8bbb276e7d3e28e","name":"WEAP042","decimals":"18"},{"addr":"0x27dce1ec4d3f72c3e457cc50354f1f975ddef488","name":"AIR","decimals":"8"},{"addr":"0x27f610bf36eca0939093343ac28b1534a721dbb4","name":"WAND","decimals":"18"},{"addr":"0x283318860ce2654d4b5de61afa1e1cee8d39e902","name":"WCXT","decimals":"18"},{"addr":"0x28481cdc0e4fa79164491d47e8837edeb3993f20","name":"TSS","decimals":"18"},{"addr":"0x2859021ee7f2cb10162e67f33af2d22764b31aff","name":"SNTR","decimals":"4"},{"addr":"0x286bda1413a2df81731d4930ce2f862a35a609fe","name":"WaBi","decimals":"18"},{"addr":"0x28a40acf39b1d3c932f42dd8068ad00a5ad6448f","name":"LDM","decimals":"18"},{"addr":"0x28c8d01ff633ea9cd8fc6a451d7457889e698de6","name":"ETG","decimals":0},{"addr":"0x298d18f67a405a160f243e3e85feb6e71af01f69","name":"SCE","decimals":"18"},{"addr":"0x2997ab37017123cbda1529adcdc591ed81d58255","name":"GIFT","decimals":"11"},{"addr":"0x29d75277ac7f0335b2165d0895e8725cbf658d73","name":"CSNO","decimals":8},{"addr":"0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1","name":"BAS","decimals":"8"},{"addr":"0x2a093bcf0c98ef744bb6f69d74f2f85605324290","name":"FOOD","decimals":"8"},{"addr":"0x2a4d7071d2c8d300644287b3381375fa14e23bc2","name":"STN","decimals":"2"},{"addr":"0x2accab9cb7a48c3e82286f0b2f8798d201f4ec3f","name":"BTL","decimals":"18"},{"addr":"0x2ad921a8ec68bffc134cc0ee8ff760bc5864a99a","name":"LV","decimals":"2"},{"addr":"0x2add07c4d319a1211ed6362d8d0fbe5ef56b65f6","name":"RETN","decimals":"18"},{"addr":"0x2ae965cd3d2b6d186e87d9586fc3bdbfc667cacc","name":"GJC","decimals":"18"},{"addr":"0x2aec553d57e8ae9a526dc8ee01ba6c43f6d043a1","name":"CST","decimals":"8"},{"addr":"0x2ba6b1e4424e19816382d15937739959f7da5fd8","name":"MEX","decimals":"18"},{"addr":"0x2bbf4f7b8ab300db01d45662769821da6e400ef4","name":"STAR","decimals":8},{"addr":"0x2bdc0d42996017fce214b21607a515da41a9e0c5","name":"SKIN","decimals":"6"},{"addr":"0x2bf17cf1215cc5fb16c3c0e2ed49603eead1664e","name":"WILK","decimals":"8"},{"addr":"0x2c3243ef62d1ce837e74dae0a4d2b622f48906bf","name":"ANET","decimals":"18"},{"addr":"0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca","name":"ST","decimals":"18"},{"addr":"0x2c6537795def9ee3a4ff5a99dab508fe1c8d2d25","name":"GMC","decimals":2},{"addr":"0x2c665fd2678809aef8299688009ce01a56d38408","name":"KRO","decimals":"6"},{"addr":"0x2c82c73d5b34aa015989462b2948cd616a37641f","name":"SXUT","decimals":"18"},{"addr":"0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724","name":"VIB","decimals":18},{"addr":"0x2ca72c9699b92b47272c9716c664cad6167c80b0","name":"GUNS","decimals":18},{"addr":"0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1","name":"DMT","decimals":"8"},{"addr":"0x2cfd4c10c075fa51649744245ec1d0aa3d567e23","name":"IPY","decimals":"8"},{"addr":"0x2d027a650117167fe4332de748f213a9c5d46eb5","name":"SUCUK","decimals":"3"},{"addr":"0x2d6af8cbbda4ab8db554e9485cfbb3a36b102581","name":"HSC","decimals":"2"},{"addr":"0x2d922712f5e99428c65b44f09ea389373d185bb3","name":"CRO13","decimals":0},{"addr":"0x2daee1aa61d60a252dc80564499a69802853583a","name":"ATS","decimals":4},{"addr":"0x2dbe0f03f1dddbdbc87557e86df3878ae25af855","name":"RC","decimals":"8"},{"addr":"0x2dc43d9985eecc84ce4b4c7d9f7294f1297297f1","name":"XMRG","decimals":"18"},{"addr":"0x2df8286c9396f52e17dfee75d2e41e52609cf897","name":"SNTR","decimals":"4"},{"addr":"0x2e071d2966aa7d8decb1005885ba1977d6038a65","name":"ROL","decimals":16},{"addr":"0x2e44a779e17adc5032f33104224988a45376094e","name":"TSMUT","decimals":"18"},{"addr":"0x2e50c7e34ef32202a1b194d933ef152e9b2336e6","name":"MRG","decimals":0},{"addr":"0x2eb86e8fc520e0f6bb5d9af08f924fe70558ab89","name":"LGR","decimals":8},{"addr":"0x2edc6fcc641f0169d54abb842f96f701eae85e4e","name":"ADU","decimals":"18"},{"addr":"0x2ee9204def1bb5e20d5b16d014fa36051c1d7583","name":"777","decimals":"1"},{"addr":"0x2f4baef93489b09b5e4b923795361a65a26f55e5","name":"XHY","decimals":"8"},{"addr":"0x2f50ab197f950e0c2184cf5d804f4141502cd987","name":"CAJ","decimals":"18"},{"addr":"0x2f5e044ad4adac34c8d8df738fac7743eda1409c","name":"AGO","decimals":"18"},{"addr":"0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97","name":"PFR","decimals":"8"},{"addr":"0x2fc4f87665d68ce3c6eee906c10086ee61fbfb17","name":"WIND","decimals":"18"},{"addr":"0x2fd41f516fac94ed08e156f489f56ca3a80b04d0","name":"EBTC","decimals":"8"},{"addr":"0x2fe6ab85ebbf7776fee46d191ee4cea322cecf51","name":"CDT","decimals":"18"},{"addr":"0x2fff33e392a4a52f7fc56fe1081d3266052a2938","name":"DACKEL","decimals":"18"},{"addr":"0x3001d7b051fa7492ce3001d202f6844c4d664dd4","name":"PRX","decimals":"18"},{"addr":"0x30765406d51091ed78ff13c107731daf3be5ef16","name":"PRE","decimals":"18"},{"addr":"0x3079a6e12b813d5156cde41c5da7489d7139af68","name":"ZIBER","decimals":"18"},{"addr":"0x30aee7f259d6d1564ebef457847c672b30f13cbc","name":"DOM","decimals":0},{"addr":"0x30cc0e266cf33b8eac6a99cbd98e39b890cfd69b","name":"ClassyCoin","decimals":"16"},{"addr":"0x30cecb5461a449a90081f5a5f55db4e048397bab","name":"TRCT","decimals":8},{"addr":"0x30dc18dc12997b1476d8801c6fb78658b2228b86","name":"SPEC","decimals":"18"},{"addr":"0x30f1678c324d58b12af182ed58221723fbe0a6a4","name":"ETB","decimals":"18"},{"addr":"0x31299d34c0f0de05c43bb7e5b44903da23e8043b","name":"ECH","decimals":"18"},{"addr":"0x31414f9166291fc486965991264ec00eb1f60603","name":"B2BC","decimals":"18"},{"addr":"0x31705aa4933c106f3d15f64df0eb70d8d37fc36e","name":"COT","decimals":"8"},{"addr":"0x3191452a57d55f239a588c4e4a123aff2e81603f","name":"ETHDX","decimals":"18"},{"addr":"0x319b33456aa1248cc0e04b555c63c10b51423a5e","name":"FOPA","decimals":"8"},{"addr":"0x31b5e97294e1afd6fff6ffe4cba89a344555f753","name":"ALLY","decimals":18},{"addr":"0x31fdf78bd3b46925e185c814ed73c53295b42081","name":"BET","decimals":"18"},{"addr":"0x32272e3239f651a700c91f7348193665a6309f07","name":"EUROC","decimals":"18"},{"addr":"0x327682779bab2bf4d1337e8974ab9de8275a7ca8","name":"BPT","decimals":"18"},{"addr":"0x3293cc907fde439b39aedaf1b982785adaff186b","name":"TRIA","decimals":"10"},{"addr":"0x32b10bf1343d3d7ab9279de6ed571ae17b92eabd","name":"WCN","decimals":"2"},{"addr":"0x32f749b8152d83dcea809a4db4dedd89a618c5a9","name":"METH","decimals":"8"},{"addr":"0x331a550a2c7f96384eb69127aa0ea9ad4b5da099","name":"ATMT","decimals":"18"},{"addr":"0x33493d18bac3649f00163d3f0e1e2d374a7dd4c6","name":"MBT","decimals":"8"},{"addr":"0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22","name":"CCT","decimals":"18"},{"addr":"0x33803edf44a71b9579f54cd429b53b06c0eeab83","name":"BGG","decimals":"8"},{"addr":"0x338468b4253cca082bb0053a54275831147f58d5","name":"WaBi","decimals":"18"},{"addr":"0x33996dbd2741b74f93a41ff5a24ab6bd96110895","name":"RESO069","decimals":"18"},{"addr":"0x33af2f038c8b0dab2cba4aa7c16dfeee68f47d77","name":"SUPREME","decimals":"2"},{"addr":"0x33f90dee07c6e8b9682dd20f73e6c358b2ed0f03","name":"TRDT","decimals":0},{"addr":"0x3408424b1ea81d26094f04ac007e8cd00656b924","name":"TTTT02","decimals":"18"},{"addr":"0x340d2bde5eb28c1eed91b2f790723e3b160613b7","name":"VEE","decimals":"18"},{"addr":"0x341c5c553853ade9a83c8036b230c30ed4089d6f","name":"EVE","decimals":"18"},{"addr":"0x342ba159f988f24f0b033f3cc5232377ee500543","name":"RAC","decimals":"18"},{"addr":"0x342cdf3fbd50c1015d2d0918d5a3684cd48e56e3","name":"BTCBIZ","decimals":"18"},{"addr":"0x3460f675d521b4c673d437e6525164e2c189dd49","name":"BTCoE","decimals":"8"},{"addr":"0x346c3be6aebebaf5cb766a75adc9827efbb7e41a","name":"DEL","decimals":18},{"addr":"0x3485b9566097ad656c70d6ebbd1cd044e2e72d05","name":"PNK","decimals":0},{"addr":"0x34dbde62ce8af4ea2525fd0f10caf7acbf1af82c","name":"STY","decimals":"18"},{"addr":"0x34e14f46042eb8982c4b4c8118e0434dd1798c94","name":"DVY","decimals":8},{"addr":"0x353cb767a07972647a653fdfe36cd310abf85a26","name":"LOOT001","decimals":"18"},{"addr":"0x358d12436080a01a16f711014610f8a4c2c2d233","name":"PXS","decimals":"18"},{"addr":"0x3597bfd533a99c9aa083587b074434e61eb0a258","name":"DENT","decimals":8},{"addr":"0x3605fbf7529018d5b7d7ea38b3e6c73bfbd3fadf","name":"DCG","decimals":"2"},{"addr":"0x360d2a5a9fc457f084b1379056a1a36d4bf57546","name":"LHBC","decimals":"8"},{"addr":"0x36905fc93280f52362a1cbab151f25dc46742fb5","name":"BTO","decimals":"18"},{"addr":"0x36d39f4f53d8b5b10e370f3a7c8fa64a606a2bd3","name":"KITE","decimals":"8"},{"addr":"0x37256d58e298cacaa82aa0527d56521f1b19e1f5","name":"EALP","decimals":"18"},{"addr":"0x373b6ee45026b40eaa7edc9c68ef04f05b6b865b","name":"SPAI","decimals":0},{"addr":"0x379e2768e0631493dfcc9a560171e66f93cbcc69","name":"NDAO","decimals":0},{"addr":"0x379e391e3d2277b50ae2550fce2841f2f57ca008","name":"PYB","decimals":"18"},{"addr":"0x37aa63c4cbd06a57f1ea35bceee4e46f0a7ce924","name":"UCN","decimals":0},{"addr":"0x37e8789bb9996cac9156cd5f5fd32599e6b91289","name":"AID","decimals":"18"},{"addr":"0x37f014c64d186eaf879c0033846b51924ce42584","name":"MDT","decimals":0},{"addr":"0x38124611ac29a3d54eeaabb63742d5e62a5da0d4","name":"🏋️🍀🎉💰","decimals":"18"},{"addr":"0x3833dda0aeb6947b98ce454d89366cba8cc55528","name":"SPHTX","decimals":"18"},{"addr":"0x3839d8ba312751aa0248fed6a8bacb84308e20ed","name":"Bez","decimals":"18"},{"addr":"0x386467f1f3ddbe832448650418311a479eecfc57","name":"MBRS","decimals":0},{"addr":"0x3883f5e181fccaf8410fa61e12b59bad963fb645","name":"THETA","decimals":"18"},{"addr":"0x3886cdb64c030f6385ce4b1e56b779db279ed02a","name":"PLA","decimals":"8"},{"addr":"0x38953123a87e8f92fd2a3477f8bfe572104f08ec","name":"ETHQ","decimals":"6"},{"addr":"0x38968746147bbaeb882f356ad9a57594bb158235","name":"BENJA","decimals":"8"},{"addr":"0x38a257e224ad8279c5f6d9835392ed2dfa28eb1d","name":"CCE","decimals":"18"},{"addr":"0x38a8b3d64212e01d285b78ea99dfb5b477e58cec","name":"KBC","decimals":"8"},{"addr":"0x38e2e462f772b40514cbf511c6492419a36de067","name":"ACCE003","decimals":"18"},{"addr":"0x39013f961c378f02c2b82a6e1d31e9812786fd9d","name":"SMS","decimals":"3"},{"addr":"0x393328540c330bfdfce3e3c4424508f726ae1712","name":"RPZ","decimals":"4"},{"addr":"0x395c2a324a93ab31475b5f0a9e3cfaded761fb92","name":"MYBET","decimals":"18"},{"addr":"0x398a9630c57775f77bd661474e112b6cf1941d1f","name":"DOGEG","decimals":"18"},{"addr":"0x39957a6624cabde2114c36e6dd8cf4930236a3da","name":"300","decimals":"18"},{"addr":"0x399a0e6fbeb3d74c85357439f4c8aed9678a5cbf","name":"DCL","decimals":"3"},{"addr":"0x39bb259f66e1c59d5abef88375979b4d20d98022","name":"WAX","decimals":"8"},{"addr":"0x39de38ba63d172b962db2fc2ee5e4376287c50bf","name":"IML","decimals":"18"},{"addr":"0x39e505e1518813ab3834d57d06c22b2e5a7fb9f2","name":"EWHITE","decimals":"8"},{"addr":"0x39e5bd6ae0f2aa9240d2ae7fbf49e36f05dd339f","name":"ETHU","decimals":"18"},{"addr":"0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3","name":"FLP","decimals":"18"},{"addr":"0x3a26746ddb79b1b8e4450e3f4ffe3285a307387e","name":"ETHB","decimals":8},{"addr":"0x3a43195391ddc94e153416de39ee046af90919c3","name":"ELI","decimals":"18"},{"addr":"0x3a7cfd01da5b506bffcc1b1d6df28c7d8c127936","name":"ID-TOKENOMY","decimals":"18"},{"addr":"0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b","name":"TBX","decimals":"18"},{"addr":"0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a","name":"PRIX","decimals":"8"},{"addr":"0x3b4e1320c4a8275f9a660e263ea3df3bd6a1139b","name":"ebit","decimals":"8"},{"addr":"0x3b66e31e18634ddce4224154d17ec4d4b396fa13","name":"NIGGER","decimals":"1"},{"addr":"0x3ba02d651116dfedfb996700fee13137305714b4","name":"eDOGE","decimals":"4"},{"addr":"0x3bb72e05402c45198c0ceb76354205deaa65542c","name":"KPT","decimals":18},{"addr":"0x3c0461bfce440aaa78f4967b8b84e23d3fddfc0e","name":"APLC","decimals":"4"},{"addr":"0x3c07b3f4a6e253915d83c86707f0af07521d1cd8","name":"☁","decimals":0},{"addr":"0x3c22ae85b4ee099f4fd656872343c95ff74d57d4","name":"N1D","decimals":18},{"addr":"0x3c6a7ab47b5f058be0e7c7fe1a4b7925b8aca40e","name":"CAJ","decimals":"18"},{"addr":"0x3c75226555fc496168d48b88df83b95f16771f37","name":"DROP","decimals":0},{"addr":"0x3cf090c5e5a30177e94156d0a7f026f47e253464","name":"ELTCoin","decimals":"8"},{"addr":"0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244","name":"RVT","decimals":18},{"addr":"0x3d3ed0a4f0af930955806b34367e7c64a0e1c84a","name":"ASS","decimals":"4"},{"addr":"0x3d46454212c61ecb7b31248047fa033120b88668","name":"MVT","decimals":"18"},{"addr":"0x3da1474c4e72304645e71341fcec84e39c7a5a99","name":"AFS","decimals":"10"},{"addr":"0x3e02b51439cb90698d54aee36bb29ff8bb76b74d","name":"VOXXO","decimals":"4"},{"addr":"0x3e250a4f78410c29cfc39463a81f14a226690eb4","name":"DRPS","decimals":"8"},{"addr":"0x3e540703d10d5db379c4bd3b26b94398e5d3e720","name":"eIOTA","decimals":"18"},{"addr":"0x3f0722a416e5102304ced3f3d1e22c787954b4e2","name":"BTCP","decimals":"8"},{"addr":"0x3f6b27c2ca7cdbfd27eb65523a9214031f1ba8d9","name":"TENB","decimals":8},{"addr":"0x3f8131b6e62472ceea9cb8aa67d87425248a3702","name":"CRO3","decimals":0},{"addr":"0x3f82d8059baa296d5357ff4e34b6e49daf185db6","name":"OC","decimals":"8"},{"addr":"0x40395044ac3c0c57051906da938b54bd6557f212","name":"MGO","decimals":8},{"addr":"0x4046a3b951a7c3e2e4a366ff778b5a60a585107a","name":"GEM","decimals":"18"},{"addr":"0x404b9ed251aacad88c0c979cbd1216f098838472","name":"ARB","decimals":"18"},{"addr":"0x4061d2644437dab7d8c0a3aac30ed78e50db6905","name":"SANTA","decimals":"18"},{"addr":"0x4092678e4e78230f46a1534c0fbc8fa39780892b","name":"OCN","decimals":"18"},{"addr":"0x41104c8d51a80d9e2969dc23256a352de4b0ec33","name":"PLUM","decimals":"18"},{"addr":"0x412d7462c72eaa8fa5068f4dc5082270eb89014f","name":"DDT","decimals":"9"},{"addr":"0x4156d3342d5c385a87d264f90653733592000581","name":"SALT","decimals":"8"},{"addr":"0x41643089590c305b56521b06563954447019f5e6","name":"PAN","decimals":"18"},{"addr":"0x416dd1d4fb22f6ae73651d5c2c5475087df4ea26","name":"GMP","decimals":"18"},{"addr":"0x4196a9b2f1b73261ad81efa7e70636a4d0b652af","name":"CHL","decimals":"18"},{"addr":"0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e","name":"DRGN","decimals":"18"},{"addr":"0x419d0d8bdd9af5e606ae2232ed285aff190e711b","name":"FUN","decimals":8},{"addr":"0x41dec67b703a8d4b5bcbb7e37090e238b949f7dc","name":"ASPV","decimals":0},{"addr":"0x41e5560054824ea6b0732e656e3ad64e20e94e45","name":"CVC","decimals":8},{"addr":"0x420335d3deef2d5b87524ff9d0fb441f71ea621f","name":"BITINDIA","decimals":18},{"addr":"0x4205aaa09f06b343bc2cddad4ca48421198b6171","name":"TNG","decimals":"18"},{"addr":"0x420c42ce1370c0ec3ca87d9be64a7002e78e6709","name":"STCn","decimals":0},{"addr":"0x422866a8f0b032c5cf1dfbdef31a20f4509562b0","name":"ADST","decimals":0},{"addr":"0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c","name":"FOTA","decimals":"18"},{"addr":"0x42a8bef25391d7cbc476309783e90303d99cda81","name":"C47","decimals":"8"},{"addr":"0x42c24b96d363fb2f06e6bd31be8dcbceee2a77a5","name":"EPY","decimals":"18"},{"addr":"0x42d6622dece394b54999fbd73d108123806f6a18","name":"SPANK","decimals":"18"},{"addr":"0x4318142b71ac84ef8c2c322db236ea99a91daf44","name":"PRFT Test","decimals":"18"},{"addr":"0x4355fc160f74328f9b383df2ec589bb3dfd82ba0","name":"OPT","decimals":18},{"addr":"0x437cf0bf53634e3dfa5e3eaff3104004d50fb532","name":"BTN","decimals":"4"},{"addr":"0x43ed44c782ca3b3e3e3038ce26f196aaf8010c08","name":"DRIP","decimals":"18"},{"addr":"0x43ee79e379e7b78d871100ed696e803e7893b644","name":"UGT","decimals":"18"},{"addr":"0x44197a4c44d6a059297caf6be4f7e172bd56caaf","name":"ELTCOIN","decimals":8},{"addr":"0x442bc47357919446eabc18c7211e57a13d983469","name":"CHAT","decimals":"18"},{"addr":"0x4461778cc8bc26abb611ff9cdb2c8248ba128caf","name":"ESFT","decimals":"1"},{"addr":"0x4464c3de9018937e59996510845ce0934033cd4e","name":"EPT","decimals":"18"},{"addr":"0x4470bb87d77b963a013db939be332f927f2b992e","name":"ADX","decimals":4},{"addr":"0x44830e5fbe354af3c1c8d405170c08d3bc8a2cd9","name":"ETHC","decimals":8},{"addr":"0x449574c69f3a658794829ed81639a7a9ece041e1","name":"NEOG","decimals":0},{"addr":"0x44a5ef140547e46c8cf73fe2b39e3374fb4651c4","name":"ECH","decimals":"18"},{"addr":"0x44cba3a62a15ac8f66ff75bf7abd058dcca7d7ed","name":"EDOGE","decimals":"8"},{"addr":"0x44f588aeeb8c44471439d1270b3603c66a9262f1","name":"SNIP","decimals":"18"},{"addr":"0x450711d5da9f7cadb0e4d3472be550328b37bdda","name":" DTCN","decimals":"4"},{"addr":"0x4523f19c7618cdbfc564f445ec92f8b8d1723c62","name":"ULTC","decimals":"18"},{"addr":"0x45245bc59219eeaaf6cd3f382e078a461ff9de7b","name":"BKX","decimals":"18"},{"addr":"0x45321004790a4dae7ba19217a10574d55739efc7","name":"DEEM","decimals":"18"},{"addr":"0x4545750f39af6be4f237b6869d4ecca928fd5a85","name":"CTF","decimals":"18"},{"addr":"0x4552f941f1bbf4ea3489c775d98ef478a001f120","name":"ACT","decimals":"8"},{"addr":"0x45af37792fac5613cdc84dfc39265f1a8d70b97b","name":"GRS","decimals":"4"},{"addr":"0x45d993af0a16b0419f06fe23a508cc75bfdb447d","name":"HTLR","decimals":"18"},{"addr":"0x45e42d659d9f9466cd5df622506033145a9b89bc","name":"NxC","decimals":3},{"addr":"0x4632091b0dd0e0902d1fe0534e16eb7b20328d70","name":"ULT","decimals":"18"},{"addr":"0x46492473755e8df960f8034877f61732d718ce96","name":"STRC","decimals":8},{"addr":"0x466459796aa497651d556362eaea3c807c1d2fee","name":"INTC","decimals":"18"},{"addr":"0x46b1f83b0583d500f42743278e2f8d06dace0fdb","name":"RESTORE","decimals":"4"},{"addr":"0x4763a99c42ab4cec9d18b39dbc4a9f4226289563","name":"XPPX","decimals":"8"},{"addr":"0x4783b23e5c708e77820282e6e7c593eab1a38d7e","name":"ePLN","decimals":"8"},{"addr":"0x47c14e3d3e615468d8808ad031595f83dcefc9cb","name":"VNN","decimals":"18"},{"addr":"0x47c8f6f026472f257207b2a1df3e48d1baba9d64","name":"EMP","decimals":5},{"addr":"0x47d4375c9b83857d8ce478f70d0e63d746d3afe6","name":"DASHG","decimals":"18"},{"addr":"0x47dd62d4d075dead71d0e00299fc56a2d747bebb","name":"EQL","decimals":"18"},{"addr":"0x4805e471dd86dc0e3cbe44305391e37e491b579e","name":"FINS","decimals":"4"},{"addr":"0x48242a68247909f1bfd380dc6b3010c1d9cd969e","name":"GOAT","decimals":0},{"addr":"0x4830edc293142f8af4ee5ae26109adb72a3d2da8","name":"DME","decimals":"18"},{"addr":"0x4866906760006017d03083140b169ed36bac6956","name":"PRFT Test","decimals":"18"},{"addr":"0x48a2378df3b5f4687ae918ae688cb7821627887f","name":"NSFW","decimals":"18"},{"addr":"0x48b44a7a1ebb16fec72893fd86bb66bdefd3f3ef","name":"CRIMSON","decimals":"18"},{"addr":"0x48f775efbe4f5ece6e0df2f7b5932df56823b990","name":"R","decimals":0},{"addr":"0x494bbaf0124285e6ecb4dfd9eac76e18a9bf470f","name":"ETHX","decimals":"18"},{"addr":"0x4954df335d828255d24decc860d77d2a0d8de0f1","name":"TAV","decimals":"2"},{"addr":"0x4993cb95c7443bdc06155c5f5688be9d8f6999a5","name":"ROUND","decimals":"18"},{"addr":"0x49ad97585681ffd73af9e371241899de5cff7fc3","name":"TNK","decimals":"2"},{"addr":"0x49aec0752e68d0282db544c677f6ba407ba17ed7","name":"XBL","decimals":"18"},{"addr":"0x49ba4d042443afe853c8407bf2eeb62501978115","name":"PNTH","decimals":"18"},{"addr":"0x49bb48456405738ebbd7bd5d963bea19abfa5377","name":"STV","decimals":"18"},{"addr":"0x49dcd92f701db0fef57c068b31daa4470b051f35","name":"JKC","decimals":"18"},{"addr":"0x4a0703d1d250ceff2912c78844f35cd7e764c577","name":"SQ1","decimals":0},{"addr":"0x4a42d2c580f83dce404acad18dab26db11a1750e","name":"RLX","decimals":"18"},{"addr":"0x4a472ebceca39d6ad87ef9bfaa629cab9639604a","name":"ECNY","decimals":"2"},{"addr":"0x4a536c1ce7ad7f6e8d2e59135e17aef5ef4dd4e6","name":"GEC","decimals":"3"},{"addr":"0x4a598d5b6ec08c03766e5730bf41540946021dd3","name":"LPX","decimals":"8"},{"addr":"0x4a96251dc14ca0badc96435fcb75f05f97929106","name":"MRB","decimals":"18"},{"addr":"0x4aa285cd1caf28ef41eb18c29dda284ae0bab26c","name":"et","decimals":"18"},{"addr":"0x4add749fcd5a44ecad43dc6f3dafdd306bd931f8","name":"ETCC","decimals":"18"},{"addr":"0x4af4e86dcc1e2c63072a3fe594a1a3bfa17a038f","name":"ECOIN","decimals":"18"},{"addr":"0x4afeb9cce471e2cc0e98ebf6d0bbfc0142ddc6d0","name":"LTE","decimals":0},{"addr":"0x4b1b222e40c549887e64349a3a8762a7403edd8d","name":"antra","decimals":"18"},{"addr":"0x4b3188d40b1e1ea1049bfcc0210bc3606f8ef085","name":"UNCONF","decimals":"2"},{"addr":"0x4b35e0ab998ebe8414871c13cf778f9d0bbdf609","name":"SWP","decimals":"18"},{"addr":"0x4b3dba23914665a40b47805cf1cdfd2e7087d20e","name":"SUPR","decimals":"18"},{"addr":"0x4b3eacb500955d22ee8bcdd8dd3d9009e29f2d24","name":"KMC","decimals":"8"},{"addr":"0x4b480c1abef305c0e21644d083f677405ab8250c","name":"TIP","decimals":"8"},{"addr":"0x4b4e611823702285fd526d7a8a3b0aa99ab2dbcd","name":"HDLT","decimals":"18"},{"addr":"0x4bf215086c05c0384bdf3731bdb2b37799e9bb5b","name":"LTE","decimals":0},{"addr":"0x4bf3e4d2378a1256cbe1cd1c2a8bc9857b811282","name":"DTB","decimals":18},{"addr":"0x4c251de85ad3498c5b89388d8efc696ddd0b0fe7","name":"FiC","decimals":"18"},{"addr":"0x4c382f8e09615ac86e08ce58266cc227e7d4d913","name":"SKR","decimals":"6"},{"addr":"0x4c5601164e2048a4154de91fa5e0b07e626cab7f","name":"FNL","decimals":"3"},{"addr":"0x4cc19356f2d37338b9802aa8e8fc58b0373296e7","name":"KEY","decimals":"18"},{"addr":"0x4cd988afbad37289baaf53c13e98e2bd46aaea8c","name":"KEY","decimals":"18"},{"addr":"0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466","name":"AION","decimals":"8"},{"addr":"0x4d11061ec8f401edc2395b5f439a05eee6ccfa50","name":"BOTA","decimals":"18"},{"addr":"0x4d829f8c92a6691c56300d020c9e0db984cfe2ba","name":"XCC","decimals":"18"},{"addr":"0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce","name":"AMB","decimals":"18"},{"addr":"0x4dc6aa1cdb64f3efa8246c4a9f93e0a337e86d89","name":"8888","decimals":"18"},{"addr":"0x4df812f6064def1e5e029f1ca858777cc98d2d81","name":"XAUR","decimals":8},{"addr":"0x4e005a760e00e17c4912a8070eec047cfecbabbb","name":"NEXT","decimals":"18"},{"addr":"0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be","name":"CREDO","decimals":"18"},{"addr":"0x4e1d9a76c688a6dfca4c692f1b9c5be2d2d88311","name":"RCF","decimals":"18"},{"addr":"0x4e260e3ca268e40133c84b142de73108a7c1ec99","name":"YC","decimals":0},{"addr":"0x4e279d8638e8669fad40e018fc181d26ee780380","name":"eTV","decimals":"8"},{"addr":"0x4ecdc839fcfe8d80c69877acf692e6a65b364b38","name":"W3C","decimals":"18"},{"addr":"0x4eecbf6534d10957e53f4bfe1ae10df2021c1684","name":"IOTAG","decimals":"2"},{"addr":"0x4f1694be039e447b729ab11653304232ae143c69","name":"CRO4","decimals":0},{"addr":"0x4f3f28cc9d5fe41e87e02d7434dd6461df1770c6","name":"ETHS","decimals":"18"},{"addr":"0x4f4f0db4de903b88f2b1a2847971e231d54f8fd3","name":"GEE","decimals":"8"},{"addr":"0x4f9b160ec27c75797c0acf0198a221ed8a1dc32f","name":"eETN","decimals":"8"},{"addr":"0x4fbc28e3b3c1c50ee05dcd66d9fc614a0cb99705","name":"HHT","decimals":"18"},{"addr":"0x4fe6ea636abe664e0268af373a10ca3621a0b95b","name":"ETB","decimals":12},{"addr":"0x4ffc3a02783e419dbc2ab71b953ede1d72350937","name":"BILLY","decimals":"4"},{"addr":"0x5005149adcc611c47676dafdbd7d62756b4432e0","name":"🏋️","decimals":"18"},{"addr":"0x5046e860ff274fb8c66106b0ffb8155849fb0787","name":"JS","decimals":"8"},{"addr":"0x505a098ecc396b2974e57d106e2523497c36c3c2","name":"QUC","decimals":"8"},{"addr":"0x50d2e7bcd0bffa5c1cde4b63d6ffee6d1cdac0ae","name":"ETRUST","decimals":"18"},{"addr":"0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d","name":"EPY","decimals":"8"},{"addr":"0x50f5c7d93cfee68d5a7cd431b11d339cd5055f7c","name":"REHTX","decimals":"4"},{"addr":"0x50ffa3cdcc3b8993c1b9ba25171fd7fd4f13e18a","name":"MGO","decimals":"8"},{"addr":"0x51096392ce0c2351337e27875dfaaf455d337f98","name":"CHRM016","decimals":"18"},{"addr":"0x510e2721ffa9ee6e2be662dbf95136508925c938","name":"FRPUSD$","decimals":"9"},{"addr":"0x5121e348e897daef1eef23959ab290e5557cf274","name":"AI","decimals":18},{"addr":"0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0","name":"IDH","decimals":"6"},{"addr":"0x514910771af9ca656af840dff83e8264ecf986ca","name":"LINK","decimals":"18"},{"addr":"0x516e5436bafdc11083654de7bb9b95382d08d5de","name":"ORME","decimals":"8"},{"addr":"0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5","name":"VIU","decimals":"18"},{"addr":"0x51db5ad35c671a87207d88fc11d593ac0c8415bd","name":"MDA","decimals":18},{"addr":"0x51ee82641ac238bde34b9859f98f5f311d6e4954","name":"IQT","decimals":"8"},{"addr":"0x51fa9cfd13a33d7d6bfe7ed4ff4a64e9096df4f4","name":"ETUP","decimals":0},{"addr":"0x52161ab56f3efcaad778c186dcd3ae56598d1f40","name":"ESH","decimals":"18"},{"addr":"0x52514e3acaeb06cab050a69b025083082ebe5b54","name":"CTC","decimals":"4"},{"addr":"0x52903256dd18d85c2dc4a6c999907c9793ea61e3","name":"INSP","decimals":0},{"addr":"0x52a5e1a56a124dce84e548ff96122246e46d599f","name":"MLT","decimals":"18"},{"addr":"0x52a669d086a8df6f57074b0740997b24e6fda530","name":"EBC","decimals":"18"},{"addr":"0x52a7cb918c11a16958be40cba7e31e32a499a465","name":"fdX","decimals":"18"},{"addr":"0x52d731d5610a9b488fa9847eca0568f2554093b2","name":"RESO085","decimals":"18"},{"addr":"0x52e30201f31283dc5f7928b4198896083f604416","name":"MLD","decimals":"18"},{"addr":"0x533ef0984b2faa227acc620c67cce12aa39cd8cd","name":"XGM","decimals":"8"},{"addr":"0x539efe69bcdd21a83efd9122571a64cc25e0282b","name":"BLUE","decimals":8},{"addr":"0x540449e4d172cd9491c76320440cd74933d5691a","name":"DBET","decimals":"18"},{"addr":"0x54186df214506ff5613196170d1bd576895193ab","name":"BTCP","decimals":"18"},{"addr":"0x541ed2600fac28e7ab5d22c3bd3ad4361aa82591","name":"DPRK","decimals":"18"},{"addr":"0x5426e544f498f4bb3c73989287d7406a1cb6a1aa","name":"afc","decimals":"18"},{"addr":"0x544f40cd3544a3001b1a3ff6d9677823de0268fb","name":"3EMU","decimals":"18"},{"addr":"0x5479ef180eceaa278c964a526df2b83bd4007505","name":"PLCN","decimals":"18"},{"addr":"0x54a3f499f3e9ec22cbdec21bd38619561475da75","name":"XPR","decimals":"18"},{"addr":"0x54f36e77be58f73948d72a87541854f61bc07ac4","name":"WAN","decimals":"18"},{"addr":"0x553e18218be0b07de569fe71b4258074c0e1d313","name":"EZD","decimals":0},{"addr":"0x554c20b7c486beee439277b4540a434566dc4c02","name":"HST","decimals":"18"},{"addr":"0x554c98b3ec772f79ee5b96d47a1d10852ed274c8","name":"SXD","decimals":"6"},{"addr":"0x5554e04e76533e1d14c52f05beef6c9d329e1e30","name":"NIO","decimals":0},{"addr":"0x556241b90b4c55457a31e27eb612bdc11815d989","name":"EMX","decimals":"18"},{"addr":"0x55648de19836338549130b1af587f16bea46f66b","name":"PBL","decimals":"18"},{"addr":"0x558a0fb2952a8743adbf45e073396245751f5b8a","name":"LTCW","decimals":"8"},{"addr":"0x558ec3152e2eb2174905cd19aea4e34a23de9ad6","name":"BRD","decimals":"18"},{"addr":"0x559201fa75902cdc4055e40f0c90e3d702049987","name":"BTCP","decimals":"18"},{"addr":"0x55c1f29c2ecb8021f5a12f58b120af2f91d7fb66","name":"CSN","decimals":"4"},{"addr":"0x55c2a0c171d920843560594de3d6eecc09efc098","name":"PEXT","decimals":"4"},{"addr":"0x55c30ae7a9ad5861394e971327b6bf35d147119d","name":"ETD","decimals":"18"},{"addr":"0x55f93985431fc9304077687a35a1ba103dc1e081","name":"SMT","decimals":"18"},{"addr":"0x55f967c329bcb244dfc7d11c5ba597f73665630f","name":"SMEC","decimals":0},{"addr":"0x55fc04a73f058832b4f3498dc83ceb6e53a9e314","name":"TCT","decimals":0},{"addr":"0x562952c749d05dca4cd004489a153c7ee7e58240","name":"PAL","decimals":"18"},{"addr":"0x56ba2ee7890461f463f7be02aac3099f6d5811a8","name":"CAT","decimals":18},{"addr":"0x56e7f2cd7d5382506aab084a67d70e603cdb23f7","name":"CODE","decimals":"8"},{"addr":"0x574c44e81f272514e29c6adc411b8c53a856fbe5","name":"DFS","decimals":"18"},{"addr":"0x577feb0b1805ec2dda594e1cf5e40d29893d49dc","name":"EYO","decimals":"18"},{"addr":"0x5783862cef49094be4de1fe31280b2e33cf87416","name":"KRT","decimals":"4"},{"addr":"0x57a00eda6b251d98b52ccdef777bfaf671c7d339","name":"BPESO","decimals":"18"},{"addr":"0x57a3dc224dccc0526954ff60ca6badd19c274d88","name":"MTIP","decimals":"18"},{"addr":"0x57b80367c27b93da6ad9b6499dfb914790006101","name":"HWC","decimals":"8"},{"addr":"0x580d69737e11cf2fb306c8fc0161b86f7c9f03ba","name":"NEBO","decimals":"3"},{"addr":"0x5824f275dab2c59b8972a1fda45ff404c9a703e3","name":"EQL","decimals":"18"},{"addr":"0x5840380b0477884abfef20e888bd61bd434a2d94","name":"PPC","decimals":"17"},{"addr":"0x584aa8297edfcb7d8853a426bb0f5252c4af9437","name":"R$","decimals":"8"},{"addr":"0x584b44853680ee34a0f337b712a8f66d816df151","name":"AIDOC","decimals":"18"},{"addr":"0x587c549c4113127340ac0f5e996cab7a4f35bb49","name":"SOCX","decimals":"8"},{"addr":"0x58976fffbc75ae75fd2430fd67e65a4abc5e62d5","name":"PPY","decimals":0},{"addr":"0x58bf7df57d9da7113c4ccb49d8463d4908c735cb","name":"SPARC","decimals":"18"},{"addr":"0x58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8","name":"GXC","decimals":"10"},{"addr":"0x5925f67d2767d937f47141dac24166b469558222","name":"OLXA","decimals":"2"},{"addr":"0x5953628b88e67935c70be95d8d3bd8655cedc996","name":"BTEU","decimals":0},{"addr":"0x595832f8fc6bf59c85c527fec3740a1b7a361269","name":"POWR","decimals":"6"},{"addr":"0x59de38752b22c13cb45da2105cd769e57ff615a8","name":"AST","decimals":"18"},{"addr":"0x5a278520af82ecd29ab6ad6f132c7fd6865d6454","name":"SUP","decimals":0},{"addr":"0x5a3d4a8575a688b53e8b270b5c1f26fd63065219","name":"CRO5","decimals":0},{"addr":"0x5a758e5a34e5c9258198b2b6d186a92056ae0b19","name":"COOIN","decimals":"4"},{"addr":"0x5a82de3515fc4a4db9ba9e869f269a1e85300092","name":"BTCx","decimals":"8"},{"addr":"0x5a84969bb663fb64f6d015dcf9f622aedc796750","name":"ICE","decimals":18},{"addr":"0x5acd19b9c91e596b1f062f18e3d02da7ed8d1e50","name":"BTCL","decimals":"8"},{"addr":"0x5af2be193a6abca9c8817001f45744777db30756","name":"BQX","decimals":8},{"addr":"0x5afda18caba69fe3af5e6d56e42e1c9f92c40d77","name":"MCD","decimals":"18"},{"addr":"0x5b0751713b2527d7f002c0c4e2a37e1219610a6b","name":"HORSE","decimals":"18"},{"addr":"0x5b2e4a700dfbc560061e957edec8f6eeeb74a320","name":"INS","decimals":"10"},{"addr":"0x5b7093fe2491dfb058c94bcd62a1cd4d822f884c","name":"AUN","decimals":"18"},{"addr":"0x5ba49fcf7c9dce67d6a9fc92cc51c8e77cba5b7a","name":"CLOUT","decimals":"18"},{"addr":"0x5bafcac10ee06a7a0e6227f896aa5352f947a39e","name":"CNTR","decimals":"18"},{"addr":"0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3","name":"ENTRP","decimals":"18"},{"addr":"0x5be10663de76c72aa40b80fce64acc8879316404","name":"IGNT","decimals":"18"},{"addr":"0x5c227eb319c24249df66d0c5879515aa59787471","name":"BITA","decimals":"8"},{"addr":"0x5c5413bad5f6fdb0f4fcd1457e46ead8e01d73d3","name":"UAH","decimals":"18"},{"addr":"0x5c543e7ae0a1104f78406c340e9c64fd9fce5170","name":"VSL","decimals":18},{"addr":"0x5c5fa9c5e0fb137509a7569c39ead47df079014c","name":"SHM","decimals":"1"},{"addr":"0x5c6183d10a00cd747a6dbb5f658ad514383e9419","name":"NXX","decimals":"8"},{"addr":"0x5c773e58b246df9e1bfc667977d9df2d4257107e","name":"EBNB","decimals":"18"},{"addr":"0x5ca71ea65acb6293e71e62c41b720698b0aa611c","name":"BBD","decimals":"18"},{"addr":"0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d","name":"AE","decimals":18},{"addr":"0x5caae332dd0a17827052de681f6f2155e00394f0","name":"SRT","decimals":"18"},{"addr":"0x5cde5338fdf2002dc04691617c66ef307acbdbca","name":"FTT","decimals":"18"},{"addr":"0x5cf4e9dfd975c52aa523fb5945a12235624923dc","name":"MPRM","decimals":0},{"addr":"0x5d21ef5f25a985380b65c8e943a0082feda0db84","name":"ECASH","decimals":"18"},{"addr":"0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393","name":"B2BX","decimals":"18"},{"addr":"0x5d65d971895edc438f465c17db6992698a52318d","name":"NAS","decimals":"18"},{"addr":"0x5d8fd1bfdb64b39c7a6ca79a5bb6ed75d730d2d3","name":"KWC","decimals":0},{"addr":"0x5da8f9b476d9ecc3b437264e2919daa51f765365","name":"LETH","decimals":"10"},{"addr":"0x5ddab66da218fb05dfeda07f1afc4ea0738ee234","name":"RARE","decimals":8},{"addr":"0x5e3346444010135322268a4630d2ed5f8d09446c","name":"LOC","decimals":"18"},{"addr":"0x5e4abe6419650ca839ce5bb7db422b881a6064bb","name":"WiC","decimals":"18"},{"addr":"0x5e568d8a9b91675285561b15f078a18935bd01cf","name":"UTN","decimals":"18"},{"addr":"0x5e654681cb386a9a8191a11a2c4ed8042bc408ac","name":"BTP","decimals":"8"},{"addr":"0x5e6b6d9abad9093fdc861ea1600eba1b355cd940","name":"ITC","decimals":"18"},{"addr":"0x5ecd84482176db90bb741ddc8c2f9ccc290e29ce","name":"BTL","decimals":"6"},{"addr":"0x5f1f7a9e78155258f2eb9d41b02d4aa56f4c8980","name":"Dmt","decimals":"4"},{"addr":"0x5f2ec9cf1ec1c0e2c880b6584921e812a4225395","name":"BTCUI","decimals":"8"},{"addr":"0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf","name":"REBL","decimals":"18"},{"addr":"0x5f6e7fb7fe92ea7822472bb0e8f1be60d6a4ea50","name":"ARTE","decimals":18},{"addr":"0x5fa1ea99eb3acc1f9e84cf28fde6431b8fdc9dc0","name":"UAT","decimals":"8"},{"addr":"0x5fc6de61258e63706543bb57619b99cc0e5a5a1f","name":"WAN","decimals":"18"},{"addr":"0x5fc8582bb390e1232dc50908cd35b38f540c72fd","name":"BTCQ","decimals":"8"},{"addr":"0x600a28b93bb6e650e43989f845f2e32843f526a3","name":"eGBP","decimals":"8"},{"addr":"0x60200c0fefc1d0ade1e19a247b703cf3ccdc915a","name":"TWIT","decimals":"8"},{"addr":"0x6025f65f6b2f93d8ed1efedc752acfd4bdbcec3e","name":"EGOLD","decimals":"18"},{"addr":"0x607122d68925c9d5deddde4b284fdef81ad27af6","name":"EXRN","decimals":0},{"addr":"0x607cbd284681db257a360d384a937ce149363760","name":"SRG","decimals":"6"},{"addr":"0x607f4c5bb672230e8672085532f7e901544a7375","name":"RLC","decimals":9},{"addr":"0x607fb630f2ddf7aeb1a207d7cb6ba6ec9f10c308","name":"Word","decimals":"8"},{"addr":"0x61402276c74c1def19818213dfab2fdd02361238","name":"SPA","decimals":"8"},{"addr":"0x614ea929892ea43d3ea2c5e3311b01cc589bad6c","name":"ENO","decimals":"18"},{"addr":"0x6160a7c801ca7005b1086cd0f8a68d7924fc40ab","name":"LOOT019","decimals":"18"},{"addr":"0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6","name":"QASH","decimals":"6"},{"addr":"0x619387077de572c1e1395e6ca51105e4ae27dc68","name":"HADB","decimals":"18"},{"addr":"0x61ac749e0f616c3bf3dde79da24d2178bb62d11a","name":"PARTY","decimals":"18"},{"addr":"0x61d0407edb149dc453c47fe31139fae9c1472da6","name":"GODZ","decimals":"18"},{"addr":"0x620da804143803c72b78a7b419552f9a2bab9877","name":"FRS","decimals":"12"},{"addr":"0x620e2e1c44a96bf73439633b43ce26f7640ab41c","name":"CR!","decimals":"3"},{"addr":"0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed","name":"DRP","decimals":2},{"addr":"0x6295ab2be04a617747481b292c390bfca592cf28","name":"TDS","decimals":"18"},{"addr":"0x62a56a4a2ef4d355d34d10fbf837e747504d38d4","name":"PAYX","decimals":2},{"addr":"0x62c60052eaef29c21bfb5c238aec6191ada75bc5","name":"COSA","decimals":"18"},{"addr":"0x62cdfb9c8e0eb4318de999d5c9aa31ca25b56603","name":"BC2B","decimals":"18"},{"addr":"0x62d212250ed94f1bcca0bcf018b77a9ee36b071c","name":"SHIT","decimals":"5"},{"addr":"0x633a8f8e557702039463f9f2eb20b7936fff8c05","name":"BCR","decimals":"18"},{"addr":"0x636d6cf2933353d74a8e8f1dc795390cf149309f","name":"DSHP","decimals":"8"},{"addr":"0x638ac149ea8ef9a1286c41b977017aa7359e6cfa","name":"ALTS","decimals":"18"},{"addr":"0x63b992e6246d88f07fc35a056d2c365e6d441a3d","name":"SCT","decimals":"18"},{"addr":"0x63bfb3f9e8468f1f9a540acd66df56bea878808b","name":"ETM","decimals":"2"},{"addr":"0x63cdfd5e44b4256416fc551fde5c367628e1f804","name":"CHAINGE","decimals":"18"},{"addr":"0x63d3ad3624bfc8149782fb040699ec8dacc9e272","name":"BMP","decimals":"8"},{"addr":"0x63da8d2d6dea6635e5aeb2150cf3e7d2bb23d604","name":"HIGH","decimals":"3"},{"addr":"0x63e7eed4c0b1eaa2c8b21195e5255ab227fe3d2a","name":"ICO","decimals":"18"},{"addr":"0x64148c4492804e38a4c6a037d13994cde3bfe55c","name":"IAR","decimals":"6"},{"addr":"0x64340ed116881e2b435b7240b3a60cf224630e01","name":"SIGMA","decimals":18},{"addr":"0x645f839ac8a352c2234c46f69f04e0b02abf8f22","name":"CSLD","decimals":"4"},{"addr":"0x6467882316dc6e206feef05fba6deaa69277f155","name":"FAP","decimals":"18"},{"addr":"0x64c86899bc02dd9af823b131e5acd4369f72bd39","name":"RENT","decimals":"18"},{"addr":"0x64cdf819d3e75ac8ec217b3496d7ce167be42e80","name":"IPL","decimals":"18"},{"addr":"0x651347bc940355451e02174ae5f0ba2475de5638","name":"ANNUM","decimals":"8"},{"addr":"0x65292eeadf1426cd2df1c4793a3d7519f253913b","name":"COSS","decimals":"18"},{"addr":"0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53","name":"TIME","decimals":8},{"addr":"0x65a15014964f2102ff58647e16a16a6b9e14bcf6","name":"OX","decimals":"3"},{"addr":"0x65b9d9b96bcce0b89d807413e4703d2c7451593a","name":"TKN","decimals":"8"},{"addr":"0x65ff8042cd27c6bd339ae8bc5a7d5edd80c78a90","name":"LTCP","decimals":"18"},{"addr":"0x660b612ec57754d949ac1a09d0c2937a010dee05","name":"BCD","decimals":"6"},{"addr":"0x662abcad0b7f345ab7ffb1b1fbb9df7894f18e66","name":"CTX","decimals":"18"},{"addr":"0x66315af28d74e09e049673b4cd30b79db5a47f0a","name":"VZT","decimals":"18"},{"addr":"0x66497a283e0a007ba3974e837784c6ae323447de","name":"PT","decimals":"18"},{"addr":"0x667088b212ce3d06a1b553a7221e1fd19000d9af","name":"WINGS","decimals":18},{"addr":"0x66a795d2d285c542df00ebcaa7c42fa8897c2c55","name":"GRCE","decimals":"18"},{"addr":"0x66c36272a1609c582b4211becadf9dba5b913893","name":"LCC","decimals":0},{"addr":"0x66e3ad9f57f23564a3f7aec06d2fc2a55380dfa7","name":"A","decimals":"18"},{"addr":"0x671abbe5ce652491985342e85428eb1b07bc6c64","name":"QAU","decimals":8},{"addr":"0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd","name":"CRED","decimals":"18"},{"addr":"0x6733d909e10ddedb8d6181b213de32a30ceac7ed","name":"BTE","decimals":"18"},{"addr":"0x6745fab6801e376cd24f03572b9c9b0d4edddccf","name":"SENSE","decimals":"8"},{"addr":"0x6781a0f84c7e9e846dcb84a9a5bd49333067b104","name":"ZAP","decimals":"18"},{"addr":"0x679badc551626e01b23ceecefbc9b877ea18fc46","name":"CCO","decimals":"18"},{"addr":"0x67fdc2c4fe8718af73e8525863daba5298897cd9","name":"NO2X","decimals":"18"},{"addr":"0x6810e776880c02933d47db1b9fc05908e5386b96","name":"GNO","decimals":18},{"addr":"0x6827a2fac3b4be1ba1f22d5802bb13c1ed7af405","name":"Eeu","decimals":"8"},{"addr":"0x687174f8c49ceb7729d925c3a961507ea4ac7b28","name":"GAT","decimals":"18"},{"addr":"0x68aa3f232da9bdc2343465545794ef3eea5209bd","name":"MSP","decimals":18},{"addr":"0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25","name":"SRN","decimals":"18"},{"addr":"0x68db10ecc599d9f5e657acdafdbf6449d658bb2d","name":"GGS","decimals":18},{"addr":"0x68e14bb5a45b9681327e16e528084b9d962c1a39","name":"CAT","decimals":"18"},{"addr":"0x69248a9bef966eae1e7a7b44d582db52c39f477c","name":"VAND","decimals":"18"},{"addr":"0x698d32b991eeff6f08d0af10e65c0219fd2f225e","name":"TKC","decimals":"6"},{"addr":"0x69971e2681de26a5327482b548b8e47d37db7334","name":"YFG","decimals":2},{"addr":"0x69cd4e1e2e1cec76eb7f3b1acdddaddcc6d60fc1","name":"TBX","decimals":"18"},{"addr":"0x6a0355a279aefa5358fe20b74fef4d19583a4a4a","name":"SAVR","decimals":"18"},{"addr":"0x6a03b9455d16de95139b67a0f593ceea64773ee1","name":"BLACK","decimals":0},{"addr":"0x6a81ae504e95b99d8f9126ad6295224f07d0ca18","name":"ALB","decimals":"8"},{"addr":"0x6aa2044c7a0f9e2758edae97247b03a0d7e73d6c","name":"CRO1","decimals":0},{"addr":"0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11","name":"BTCR","decimals":"8"},{"addr":"0x6b14c373c24556165002a00cba4174fd96fe28f0","name":"ssn","decimals":"8"},{"addr":"0x6b9e8076a536459303db301ba4430913a7f14c5a","name":"JDI","decimals":"2"},{"addr":"0x6ba460ab75cd2c56343b3517ffeba60748654d26","name":"UP","decimals":"8"},{"addr":"0x6bd32bd5269858d81564bedc3a46d5ad45bfa0d5","name":"EEC","decimals":"18"},{"addr":"0x6beb418fc6e1958204ac8baddcf109b8e9694966","name":"LNC","decimals":"18"},{"addr":"0x6c2adc2073994fb2ccc5032cc2906fa221e9b391","name":"DPY","decimals":"18"},{"addr":"0x6c437ddf9397be0708d13e6b063fb564fa8cbf5d","name":"COCK","decimals":"18"},{"addr":"0x6cdc55813f10ace2b056cb52338adc623a83ef22","name":"ZBO","decimals":"8"},{"addr":"0x6d223289976c54b7a54a03ce5d6d4ff719808608","name":"WEAP043","decimals":"18"},{"addr":"0x6d4667f1c2d1ad6688176f1ed529f433969654f4","name":"LAMBO","decimals":0},{"addr":"0x6d5cac36c1ae39f41d52393b7a425d0a610ad9f2","name":"LLT","decimals":8},{"addr":"0x6d5cbbef8e93eda681c956ad06abf9ef3e20eeab","name":"END","decimals":"18"},{"addr":"0x6d7a4c14c997333e304d5aef2aece73fd60ecc59","name":"WND","decimals":"18"},{"addr":"0x6dc5880bad03f0eeb6e6b60954074cd3739563d0","name":"Moi","decimals":"18"},{"addr":"0x6e3abc74a5f6d71be82862bcd5b64c88ad612691","name":"FALCON","decimals":"18"},{"addr":"0x6e58b4c41cab75dc0239938bf5455ab8823ee4de","name":"B2X","decimals":"8"},{"addr":"0x6e6b11deabea965db56a7893e6acc47313027250","name":"RESO082","decimals":"18"},{"addr":"0x6eb9ad30df333269cd3828204a368b0574457fa1","name":"eMAD","decimals":"2"},{"addr":"0x6ec8a24cabdc339a06a172f8223ea557055adaa5","name":"GNX","decimals":"9"},{"addr":"0x6ecccf7ebc3497a9334f4fe957a7d5fa933c5bcc","name":"BULLISH","decimals":0},{"addr":"0x6ed3efe43df09313c6de6059b9a443c4fd1ca535","name":"TOKE","decimals":"18"},{"addr":"0x6ef5b9ae723fe059cac71ad620495575d19dac42","name":"UCN","decimals":0},{"addr":"0x6f1a769952c60b2d03f46419adeda91d87866dab","name":"ELTC","decimals":"18"},{"addr":"0x6f38169cc63e97f5c258965c67ac11f052f288f2","name":"EQL","decimals":"18"},{"addr":"0x6f5362acaf1a58d3ad92e3c64f98cdb4e3ebc9b8","name":"RNB","decimals":0},{"addr":"0x6f6deb5db0c4994a8283a01d6cfeeb27fc3bbe9c","name":"Smart","decimals":0},{"addr":"0x6fc9c554c2363805673f18b3a2b1912cce8bfb8a","name":"XRC","decimals":"18"},{"addr":"0x6fdfce60998725f4cfb4cc57505a3abdbb6d0646","name":"KEY","decimals":"18"},{"addr":"0x6febe608481477c1adf0e86888374e7555f7d534","name":"ALW","decimals":"18"},{"addr":"0x6fff3806bbac52a20e0d79bc538d527f6a22c96b","name":"CDX","decimals":"18"},{"addr":"0x701c244b988a513c945973defa05de933b23fe1d","name":"OAX","decimals":18},{"addr":"0x705ee96c1c160842c92c1aecfcffccc9c412e3d9","name":"POLL","decimals":"18"},{"addr":"0x707b58d789b0cc68a2df5a699ceb74f321ee5146","name":"SUB1X","decimals":"18"},{"addr":"0x70838403ecc194b73e50b70a177b2ef413a2f421","name":"BZX","decimals":"18"},{"addr":"0x709860f28e8868b70baa204ab4964592fdc56e93","name":"MAX","decimals":"18"},{"addr":"0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38","name":"UTK","decimals":"18"},{"addr":"0x70c53db0621c4428e5022fe099ea76e0b213bb1d","name":"BEE","decimals":"8"},{"addr":"0x70d0b338db31125f2324cdfdad10b096a6697c99","name":"PSC","decimals":"18"},{"addr":"0x70f7cb8e3a7d52e8be9611ce20e1677aebcf027b","name":"ECOMT","decimals":"18"},{"addr":"0x716b87619d0c06c5868837cca18b2dd9d64a29d5","name":"ETF","decimals":"18"},{"addr":"0x717f0cc11366818ba350aba9e7c7515ded8f8474","name":"AiO","decimals":6},{"addr":"0x71f1bc89f38b241f3ebf0d5a013fa2850c63a1d4","name":"ZDR","decimals":"8"},{"addr":"0x71f7b56f9f8641f73ca71512a93857a7868d1443","name":"KMR","decimals":"18"},{"addr":"0x725803315519de78d232265a8f1040f054e70b98","name":"BET","decimals":18},{"addr":"0x7259fddca8d5f0184b3b12aa7e8401964b703a4f","name":"HYTV","decimals":"3"},{"addr":"0x7268f9c2bc9c9e65b4a16888cb5672531ce8e945","name":"YESTERDAY","decimals":18},{"addr":"0x728781e75735dc0962df3a51d7ef47e798a7107e","name":"WOLK","decimals":18},{"addr":"0x7288c72af505e3a6ff2712699e2a695465d353b3","name":"MTP","decimals":"18"},{"addr":"0x72adadb447784dd7ab1f472467750fc485e4cb2d","name":"WRC","decimals":"6"},{"addr":"0x72dc1c8cdca6a7cbc32275866e84a96d84609f95","name":"BIGLY","decimals":"18"},{"addr":"0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131","name":"NGC","decimals":"18"},{"addr":"0x72f6314f0e9b835a010c6101ad06e40cf5317056","name":"RESO080","decimals":"18"},{"addr":"0x7367a68039d4704f30bfbf6d948020c3b07dfc59","name":"🍺","decimals":"18"},{"addr":"0x7368defb286829d538e65b881d1143283bb422c7","name":"GSC","decimals":"2"},{"addr":"0x739c71235a9669f6b900490ab1c95310c19abc71","name":"TKN","decimals":"8"},{"addr":"0x739cd11c97c44cc5df8e5d67ed8085f376e54a9c","name":"MUH","decimals":"18"},{"addr":"0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7","name":"SDRN","decimals":"18"},{"addr":"0x73dd069c299a5d691e9836243bcaec9c8c1d8734","name":"BTE","decimals":"8"},{"addr":"0x742686bb1b136b396b59818f42e47a4fc3509394","name":"WCM tokens","decimals":"18"},{"addr":"0x744d70fdbe2ba4cf95131626614a1763df805b9e","name":"SNT","decimals":18},{"addr":"0x749128a5c72c10bbb9a67f7abb3fe0269fa448da","name":"DYN","decimals":"2"},{"addr":"0x74a492720ab2cf59261b14bc89e78f8147a96f61","name":"VOTES","decimals":"2"},{"addr":"0x74ceda77281b339142a36817fa5f9e29412bab85","name":"ERO","decimals":"8"},{"addr":"0x74f276ca78133e156f52f8fe7b2d003f4e321aaa","name":"GAI","decimals":"5"},{"addr":"0x74fe5f01f6f82e6feddacad6c0f09cf6933c43de","name":"COGNX","decimals":"18"},{"addr":"0x7501a4f0b6fcf5ab8d682a57e668214edc3d3ea4","name":"BRC","decimals":"8"},{"addr":"0x752e5a3ee2d94535fde1624771a844cbe7d4ae7e","name":"ZCASHC","decimals":"18"},{"addr":"0x753af9dbe862fdb00db5bc9455063e3aad3674bd","name":"preWabi","decimals":0},{"addr":"0x75c5ee419331b6150879530d06f9ba054755f1da","name":"SAL","decimals":"18"},{"addr":"0x75d34b30a9a2405b7e2bbff94badcc0ce6c934ad","name":"WAP","decimals":"18"},{"addr":"0x76195ffd0cfedf68625b3e5b64c7bd904eeb9d6c","name":"WET","decimals":"18"},{"addr":"0x7627de4b93263a6a7570b8dafa64bae812e5c394","name":"NXX","decimals":"8"},{"addr":"0x763186eb8d4856d536ed4478302971214febc6a9","name":"BETR","decimals":"18"},{"addr":"0x7641b2ca9ddd58addf6e3381c1f994aac5f1a32f","name":"PRPS","decimals":"18"},{"addr":"0x7642f2c9670eaddafbbb2f1c93727dea61a9a052","name":"ANON","decimals":"18"},{"addr":"0x7654915a1b82d6d2d0afc37c52af556ea8983c7e","name":"IFT","decimals":18},{"addr":"0x766706a29923217bad5be36dcc2ba284d157b634","name":"NGR","decimals":"18"},{"addr":"0x767ba2915ec344015a7938e3eedfec2785195d05","name":"REA","decimals":"18"},{"addr":"0x769e1d60e7ae9be3239125fb79a30f028b7f23df","name":"XXX","decimals":"18"},{"addr":"0x76e82406a5040b605c6d30caf4802e7eb3184bbc","name":"eBCC","decimals":"6"},{"addr":"0x77140fd91053d4613407d5253d3151e717d211fc","name":"ETNP","decimals":"2"},{"addr":"0x7728dfef5abd468669eb7f9b48a7f70a501ed29d","name":"PRG","decimals":6},{"addr":"0x772b1692e87f8df4625c43b9ea20ee098b57b726","name":"MIPS","decimals":"18"},{"addr":"0x7731ee8b0b0ab88977be7922849eb767bbe8da15","name":"ABS","decimals":"18"},{"addr":"0x7747aeb32d89e527e5ebbf646871ca79805989ad","name":"LCASH","decimals":"8"},{"addr":"0x779b7b713c86e3e6774f5040d9ccc2d43ad375f8","name":"POOL","decimals":"8"},{"addr":"0x77a4a5b3007efa19b5d049b914a1271367e27fe4","name":"OTG","decimals":"8"},{"addr":"0x77ace05b1a35dacf2536f7a4ca340bae268b7020","name":"CDT","decimals":"18"},{"addr":"0x77e89cb283f39ed72f4383c6eec786bd7e7c12d5","name":"EBCC","decimals":"18"},{"addr":"0x77f8347f5007dfd2f91feba3085331373ad44c3b","name":"PRFT Test","decimals":"18"},{"addr":"0x77faed976e187f26b49e78be8418ab074a341f26","name":"IWT","decimals":"18"},{"addr":"0x7816773556a09d06670a734caf5fa22562427b0c","name":"KCN","decimals":"18"},{"addr":"0x781b8cd310ab3f837223d11ddf4e227843ee5b8d","name":"PIETY","decimals":"6"},{"addr":"0x787c2fffb74f559219836a77fad6181f808b6f73","name":"KLC","decimals":"18"},{"addr":"0x78b039921e84e726eb72e7b1212bb35504c645ca","name":"SETH","decimals":"18"},{"addr":"0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05","name":"ATL","decimals":"18"},{"addr":"0x78cb641ed233beea4827b8b148e4bf0b17289eca","name":"ETHG","decimals":0},{"addr":"0x78fc55d0b12a59539adb8afe4540ab411e2acb6e","name":"AMD","decimals":"4"},{"addr":"0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63","name":"ZSC","decimals":"18"},{"addr":"0x7a79abd3905ef37b8d243c4c28cee73a751eb076","name":"CM","decimals":"18"},{"addr":"0x7a7f7dd9c4acd198617c72f54623bdb0c1dff343","name":"VNC","decimals":"8"},{"addr":"0x7b22938ca841aa392c93dbb7f4c42178e3d65e88","name":"ASTRO","decimals":"4"},{"addr":"0x7b39940dbac110f1227d37c395675def270afcd7","name":"EOSG","decimals":0},{"addr":"0x7b69b78cc7fee48202c208609ae6d1f78ce42e13","name":"GOAL","decimals":"18"},{"addr":"0x7b6e57d2139dd5f38012cd641cebb8aff0d8953a","name":"TDM","decimals":"8"},{"addr":"0x7c53f13699e1f6ef5c699e893a20948bdd2e4de9","name":"DVD","decimals":"18"},{"addr":"0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098","name":"SAN","decimals":18},{"addr":"0x7c81cc5d18e857fab63afb0b6c2b4aace57480fa","name":"OMG+","decimals":"8"},{"addr":"0x7c833af22bd7da8ad29541c35230d1c822e23889","name":"ECN","decimals":"2"},{"addr":"0x7cdec53fe4770729dac314756c10e2f37b8d2b2f","name":"BOLD","decimals":"8"},{"addr":"0x7d0a23df60f45d97c61649b6b3bb902414657db1","name":"EMVote_for_2018","decimals":0},{"addr":"0x7d3e7d41da367b4fdce7cbe06502b13294deb758","name":"SSS","decimals":"8"},{"addr":"0x7d49eaac4c70abc1a659122f08c0806ae44703ef","name":"DET","decimals":18},{"addr":"0x7d4b8cce0591c9044a22ee543533b72e976e36c3","name":"CAG","decimals":18},{"addr":"0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d","name":"EBET","decimals":"2"},{"addr":"0x7d86c652c3116ce32ee66356cdce1b9a52dcfe71","name":"BIGE","decimals":"2"},{"addr":"0x7d9238e1c39e91089bfe5e72a503e32f2dac526e","name":"CHKN","decimals":"8"},{"addr":"0x7db5e506a6d24a1557682467104e30758aa93b96","name":"HLT","decimals":"6"},{"addr":"0x7df61c9ceb2cc77213554ebf90cafe7258b4d094","name":"MLOT","decimals":"18"},{"addr":"0x7e7aa6a037bc056ae5bd6a399553cbac1b680602","name":"CE7","decimals":"4"},{"addr":"0x7e8539d1e5cb91d63e46b8e188403b3f262a949b","name":"SMDX","decimals":"18"},{"addr":"0x7e9d62e1ff4e34096f91ee0153222ab81f7184f0","name":"ELTC","decimals":"8"},{"addr":"0x7ea4c29d3d37f9b259be610b67b3125c4d095d02","name":"CANADA","decimals":"18"},{"addr":"0x7f1e2c7d6a69bf34824d72c53b4550e895c0d8c2","name":"BOP","decimals":"8"},{"addr":"0x7f2176ceb16dcb648dc924eff617c3dc2befd30d","name":"Ohni","decimals":0},{"addr":"0x7f5b230dc580d1e67df6ed30dee82684dd113d1f","name":"CRO30","decimals":0},{"addr":"0x7f9672c9c31f445373df7fa89ba27299369e3dc6","name":"CRANK","decimals":"3"},{"addr":"0x803a145c977c2f2ac26cdbd165a2d873485fdbd0","name":"MARV","decimals":"18"},{"addr":"0x805cefaf11df46d609fa34a7723d289b180fe4fa","name":"NTRY","decimals":"18"},{"addr":"0x807876cd9133f416208160b023b2a40441401a46","name":"XMAS","decimals":"18"},{"addr":"0x807b9487aaf00629b674bd6d02e4917453bc5939","name":"ETB","decimals":12},{"addr":"0x80963fb4bb2f3b2a6589f64f897bfb492afed944","name":"PRIC","decimals":2},{"addr":"0x80a7e048f37a50500351c204cb407766fa3bae7f","name":"CRPT","decimals":"18"},{"addr":"0x80b01885b0ac83c39190ee07649b378a06a6ed10","name":"WEED","decimals":"8"},{"addr":"0x80bc5512561c7f85a3a9508c7df7901b370fa1df","name":"TIO","decimals":"18"},{"addr":"0x80e7a4d750ade616da896c49049b7ede9e04c191","name":"ASTR","decimals":"4"},{"addr":"0x80e82dd8707a68d9f26a3035c1bbf2b704549801","name":"TDC","decimals":"3"},{"addr":"0x80f5a6bd9b61995746d87bb3a66f1224e951cbe2","name":"APP","decimals":"18"},{"addr":"0x80fa08fc8da9db6dac8cd05d8741a2e7f20f39da","name":"KIM","decimals":0},{"addr":"0x80fb784b7ed66730e8b1dbd9820afd29931aab03","name":"LEND","decimals":18},{"addr":"0x8147797d352ce5f9a32566b94e4d12c055c3cd9d","name":"UNQ","decimals":"18"},{"addr":"0x814964b1bceaf24e26296d031eadf134a2ca4105","name":"NEWB","decimals":0},{"addr":"0x814cafd4782d2e728170fda68257983f03321c58","name":"IDEA","decimals":0},{"addr":"0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26","name":"MDT","decimals":"18"},{"addr":"0x814f67fa286f7572b041d041b1d99b432c9155ee","name":"DRG","decimals":"8"},{"addr":"0x817e72e93831dbf21438ac449fe890d07de87d4c","name":"AFRO","decimals":"7"},{"addr":"0x818ca1fa9f88f76d061cddb4169c287e7dbcc6d8","name":"CPay","decimals":"18"},{"addr":"0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5","name":"KIN","decimals":18},{"addr":"0x81a2da0cc03e0e492b34e0e79a2359ae6994095f","name":"JUST","decimals":0},{"addr":"0x81a803d28ee340e8c3805362374703ffcbb8c0e2","name":"DES","decimals":"8"},{"addr":"0x81a9ebfdcd87cd291eb5e5260901a898df3bdafd","name":"DDT","decimals":"18"},{"addr":"0x81be91c7e74ad0957b4156f782263e7b0b88cf7b","name":"PRXY","decimals":"6"},{"addr":"0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c","name":"DAT","decimals":"18"},{"addr":"0x81d26c79c2acca248ef240ac28e763f9a3e06a4f","name":"草泥马币","decimals":"2"},{"addr":"0x81f89694ac96fefd794cb2c8526d2bd8da74b1fb","name":"ETN","decimals":"18"},{"addr":"0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf","name":"VSM","decimals":0},{"addr":"0x827de8cb5bf8da8f16093505c58b5677122cdcec","name":"CPT","decimals":"8"},{"addr":"0x82b0e50478eeafde392d45d1259ed1071b6fda81","name":"DNA","decimals":"18"},{"addr":"0x82d193f8ee41d12aaa0a85cb006606d67f773e9c","name":"SamsungToken","decimals":"1"},{"addr":"0x82f9650819efd096fc6b63c8bbdcc79499c0b3e2","name":"BTC21","decimals":"18"},{"addr":"0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2","name":"PRO","decimals":"2"},{"addr":"0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc","name":"MNTP","decimals":"18"},{"addr":"0x83e77df60f66a5475fd9fecdc90306b0c1eddd29","name":"HCR","decimals":"8"},{"addr":"0x83eea00d838f92dec4d1475697b9f4d3537b56e3","name":"VOISE","decimals":"8"},{"addr":"0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda","name":"WTT","decimals":0},{"addr":"0x84332b82575cd4a7bac7a5df08a9712e78ff7d1f","name":"IWC","decimals":"18"},{"addr":"0x848ae4cc01c97297cdb4465bc06b8bcdf27996ba","name":"BTCB","decimals":0},{"addr":"0x84a68f203ded4f2df6d00df42fb90f8f25dbced4","name":"OREN","decimals":"8"},{"addr":"0x84a8222618acd4ac60547b6e89cc2c72a12a49dd","name":"CAPT","decimals":"18"},{"addr":"0x84abbb6fde5d95771a8115d90d99c4a587143c07","name":"MASC","decimals":"4"},{"addr":"0x84c2c31c04339c9938adfe3f8013315c8906f071","name":"eBCSH","decimals":"18"},{"addr":"0x84ce2fced3ffed8c3a3e305d6ccf6f542a7ca006","name":"ETHFM","decimals":"18"},{"addr":"0x8506ba75e3e0d9907016d9504a6ad450f571fd43","name":"ESH","decimals":"18"},{"addr":"0x85089389c14bd9c77fc2b8f0c3d1dc3363bf06ef","name":"SPF","decimals":"18"},{"addr":"0x856912680349a406f72e26aa994100b8ad409f87","name":"ESC","decimals":"18"},{"addr":"0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b","name":"iETH","decimals":"8"},{"addr":"0x85d74248d29a2e87600046af1945725f4e7156c9","name":"DIL","decimals":"18"},{"addr":"0x85e076361cc813a908ff672f9bad1541474402b2","name":"TEL","decimals":"2"},{"addr":"0x86230462ce9048b24c8aaaabd74ac02088a956ea","name":"WOCO","decimals":"18"},{"addr":"0x862ff73c3ec467ff03abc66bc01fae468e7e295b","name":"EBLK","decimals":"6"},{"addr":"0x8633e144f2d9b9b8bdd12ddb58e4bef1e163a0ce","name":"YEL","decimals":"18"},{"addr":"0x86410db4d61c40a8e1df9f859069d5a15896195b","name":"DJC","decimals":"18"},{"addr":"0x865d176351f287fe1b0010805b110d08699c200a","name":"BCO","decimals":"8"},{"addr":"0x865e3707a580f9db89304005cddd050ade8873eb","name":"HIRE","decimals":"18"},{"addr":"0x86949dc8043a5fd7619a1289d65964ad5ec3d25c","name":"GCS","decimals":"8"},{"addr":"0x86c8bf8532aa2601151c9dbbf4e4c4804e042571","name":"SIM","decimals":"2"},{"addr":"0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0","name":"EOS","decimals":18},{"addr":"0x8727c112c712c4a03371ac87a74dd6ab104af768","name":"JET","decimals":"18"},{"addr":"0x87611ca3403a3878dfef0da2a786e209abfc1eff","name":"eUSD","decimals":"8"},{"addr":"0x877fb817d5de492d20ec3190a812f6430e8faeba","name":"LNK","decimals":"18"},{"addr":"0x87ae38d63a6bbb63e46219f494b549e3be7fc400","name":"LAP","decimals":"8"},{"addr":"0x87c8d6da29c030aae4d8ecb77b2f488f529de1f5","name":"HTC","decimals":"18"},{"addr":"0x87d9bf506b434e9973cb0e6183da7a50a16796b2","name":"888","decimals":18},{"addr":"0x87dcb57dfdee3fdd2b967c2a5faa7bcd44be4a0d","name":"ORI","decimals":"8"},{"addr":"0x8810c63470d38639954c6b41aac545848c46484a","name":"ADI","decimals":"18"},{"addr":"0x881ef48211982d01e2cb7092c915e647cd40d85c","name":"OTN","decimals":"18"},{"addr":"0x887834d3b8d450b6bab109c252df3da286d73ce4","name":"ATT","decimals":18},{"addr":"0x888666ca69e0f178ded6d75b5726cee99a87d698","name":"ICN","decimals":18},{"addr":"0x88b57814ff75ecee6a79a0cdec8547834cdf0b92","name":"MART","decimals":"3"},{"addr":"0x88c46a325254d19f12403643e12356c1a195c88b","name":"LTD","decimals":0},{"addr":"0x88c96a900829e7049ba87f7f3daef7d000690070","name":"CPCoin","decimals":"8"},{"addr":"0x88d25f22267cd992d3b208a3f835a64b1e5abbaa","name":"NEOR","decimals":"6"},{"addr":"0x88fcfbc22c6d3dbaa25af478c578978339bde77a","name":"FYN","decimals":18},{"addr":"0x89303500a7abfb178b274fd89f2469c264951e1f","name":"REF","decimals":"8"},{"addr":"0x89b9785fa731bad44618b72878230ccc23057fff","name":"Dtcn","decimals":0},{"addr":"0x89ee867da0daf5260df8d7530348337faeb968b3","name":"VGT","decimals":"18"},{"addr":"0x8a187d5285d316bcbc9adafc08b51d70a0d8e000","name":"SIFT","decimals":0},{"addr":"0x8a3d76afeb8eabd2876366e905f8b14dc53f770c","name":"DLM","decimals":5},{"addr":"0x8a5f183f0e1b16ff81120b1aef50e4efbdbb28cd","name":"0EIC","decimals":"18"},{"addr":"0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5","name":"EDOGE","decimals":"18"},{"addr":"0x8a7f60fcfdbdf46de9d802381565670ec0e91ff1","name":"ZLN","decimals":"2"},{"addr":"0x8a854288a5976036a725879164ca3e91d30c6a1b","name":"GET","decimals":"18"},{"addr":"0x8a99ed8a1b204903ee46e733f2c1286f6d20b177","name":"NTO","decimals":"18"},{"addr":"0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2","name":"BET","decimals":18},{"addr":"0x8aac9dee1d46f3bd870489b596067dc8e0741bf6","name":"BTCB","decimals":"18"},{"addr":"0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06","name":"PTOY","decimals":8},{"addr":"0x8b0c9f462c239c963d8760105cbc935c63d85680","name":"SHNZ","decimals":"8"},{"addr":"0x8b1cc9227744c96752eb548ed1445b23bedc83ac","name":"GVOT30","decimals":"18"},{"addr":"0x8b1f49491477e0fb46a29fef53f1ea320d13c349","name":"AMM","decimals":"6"},{"addr":"0x8b4ed13b185e3ae5ca748a7febdff76b7d1d85d4","name":"EPRIME","decimals":"18"},{"addr":"0x8b530fba9c71a51d3f6a2795a1467da3d13b1c1b","name":"RVTC","decimals":"18"},{"addr":"0x8b75125582ff3ed5481a8ff50e660e416fb8f50a","name":"ANA","decimals":"8"},{"addr":"0x8bbf4dd0f11b3a535660fd7fcb7158daebd3a17e","name":"EGAS","decimals":"8"},{"addr":"0x8bef0141e8d078793456c4b74f7e60640f618594","name":"TRM2","decimals":"8"},{"addr":"0x8bf8bcf8aba5ecffffd431489fe79dad38023a9b","name":"BUS","decimals":"8"},{"addr":"0x8c53931237b6360345b01f1cfa27f7b10f89be78","name":"CYS","decimals":"18"},{"addr":"0x8c65e992297d5f092a756def24f4781a280198ff","name":"GZE","decimals":"18"},{"addr":"0x8cd3bac9875b1945d1d3469947236d8971bf3174","name":"COOL","decimals":"18"},{"addr":"0x8cfaf62d0203ae2cc52cbafa3e1a4bdef8bf1a60","name":"LNK","decimals":"18"},{"addr":"0x8d5a69dc82a47594881256f2eef81770274fa30f","name":"NTC","decimals":"18"},{"addr":"0x8d8de733bf1e72949b3a08d23640ede956be4aaf","name":"ETHP","decimals":"5"},{"addr":"0x8db8ad2888b338dc8ad715347821c24bbbcac5b0","name":"ESCARCE","decimals":0},{"addr":"0x8e10f6bb9c973d61321c25a2b8d865825f4aa57b","name":"0ED","decimals":"18"},{"addr":"0x8e1701e9509250d808eeca648feb1b8d7eed0704","name":"WAX","decimals":"18"},{"addr":"0x8eb24319393716668d768dcec29356ae9cffe285","name":"AGI","decimals":"8"},{"addr":"0x8ef24a1f5053b885d81044a3173e38bbf24f7371","name":"FVIT","decimals":"18"},{"addr":"0x8ef59b92f21f9e5f21f5f71510d1a7f87a5420be","name":"DEX","decimals":"2"},{"addr":"0x8effd494eb698cc399af6231fccd39e08fd20b15","name":"PIX","decimals":0},{"addr":"0x8f070b17dd3953634e9e9c174d0f05396f681bc1","name":"CCP","decimals":"18"},{"addr":"0x8f0921f30555624143d427b340b1156914882c10","name":"FYP","decimals":"18"},{"addr":"0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374","name":"VERI","decimals":18},{"addr":"0x8f8221afbb33998d8584a2b05749ba73c37a938a","name":"REQ","decimals":"18"},{"addr":"0x8fb97dc96558199ffb549a35a231b97a19fdc912","name":"AHT","decimals":"18"},{"addr":"0x8fff600f5c5f0bb03f345fd60f09a3537845de0a","name":"SIM","decimals":0},{"addr":"0x9002d4485b7594e3e850f0a206713b305113f69e","name":"HAT","decimals":"12"},{"addr":"0x9041fe5b3fdea0f5e4afdc17e75180738d877a01","name":"PRO","decimals":"18"},{"addr":"0x90528aeb3a2b736b780fd1b6c478bb7e1d643170","name":"XPA","decimals":"18"},{"addr":"0x907f3d093b6a3d599ac940c8f3ce21b4858f3618","name":"OILSC","decimals":"18"},{"addr":"0x90b1b771d0814d607da104b988efa39288219d62","name":"MEDI","decimals":"18"},{"addr":"0x90c88ccd74e57e016acae8ad1eaa12ecf4c06f33","name":"IBTC","decimals":"18"},{"addr":"0x90f64cd258373c6a2bf7f0fc0034d1a95ff6954e","name":"xrp","decimals":"18"},{"addr":"0x919841d8dc424af475c4b0ff9991773c0eb23a17","name":"SNUGG","decimals":"18"},{"addr":"0x91bc206f0a1ffbc399b4a20a41324ed1dad2b718","name":"BSH","decimals":18},{"addr":"0x920f2ac67f973a7670674682ba5bb9061dbf18d9","name":"DSTR","decimals":"2"},{"addr":"0x9214ec02cb71cba0ada6896b8da260736a67ab10","name":"REAL","decimals":18},{"addr":"0x92185519dc5a3ab41396d1da2bb4134ea3921172","name":"TMC","decimals":0},{"addr":"0x922105fad8153f516bcfb829f56dc097a0e1d705","name":"YEE","decimals":"18"},{"addr":"0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c","name":"EVE","decimals":"18"},{"addr":"0x9233ad76758f642483e903b9ad45ed9b0b1d4ef2","name":"BXC","decimals":"2"},{"addr":"0x92685e93956537c25bb75d5d47fca4266dd628b8","name":"BTL","decimals":"4"},{"addr":"0x9288341f4537870fc0069087a44623ff50bdb21d","name":"INFINITY","decimals":"8"},{"addr":"0x929c667287efcce4c1d0d8ad1ebf44a277d8c067","name":"AIX","decimals":"18"},{"addr":"0x92cbf8b291fd6d2f1f1d2f5786be6aaddfd099e4","name":"MRT","decimals":0},{"addr":"0x92e52a1a235d9a103d970901066ce910aacefd37","name":"UCASH","decimals":"8"},{"addr":"0x93182d5f3a05bf5eb6b9f6c0e003a46dff9128ff","name":"F2U$","decimals":"6"},{"addr":"0x932867d6bc015cee6767c11b59a57116a8237583","name":"AER","decimals":"18"},{"addr":"0x9336c4fb60aa77dc1e561b6b0ae03210c01554db","name":"GIMC","decimals":"4"},{"addr":"0x936f78b9852d12f5cb93177c1f84fb8513d06263","name":"GNTW","decimals":18},{"addr":"0x9375b738083101617f0642d7dbeaa89e361545e3","name":"ESMS","decimals":0},{"addr":"0x9397554c07f687b7a20d13c73350cc283765d509","name":"SHLD","decimals":"18"},{"addr":"0x93abbe3e181e012931dca07982b190f1da1cd324","name":"KMT","decimals":"18"},{"addr":"0x93c0a7295e66392bc9adf629d7e7e4ff38ab7789","name":"PAPA","decimals":"4"},{"addr":"0x93e682107d1e9defb0b5ee701c71707a4b2e46bc","name":"MCAP","decimals":8},{"addr":"0x94143867353fa44b904f353dbcadb5410950eb40","name":"KIDS","decimals":"18"},{"addr":"0x94298f1e0ab2dfad6eeffb1426846a3c29d98090","name":"MyB","decimals":8},{"addr":"0x944f1a04ab8d735acdbc46505c5b283f54289152","name":"GBTS","decimals":"18"},{"addr":"0x9491b80e8971331f172cc3bce5840319e0233616","name":"CHE","decimals":"18"},{"addr":"0x949bed886c739f1a3273629b3320db0c5024c719","name":"AMIS","decimals":"9"},{"addr":"0x94d6b4fb35fb08cb34aa716ab40049ec88002079","name":"CNX","decimals":8},{"addr":"0x9501bfc48897dceeadf73113ef635d2ff7ee4b97","name":"EMT","decimals":18},{"addr":"0x953495953a27ad0e87315664673c716731cb68c9","name":"ACCE060","decimals":"18"},{"addr":"0x9541fd8b9b5fa97381783783cebf2f5fa793c262","name":"KZN","decimals":"8"},{"addr":"0x954d9192b67c6658bbd4826da7b6b12a5087be1a","name":"freetoken.pro","decimals":"18"},{"addr":"0x956d760f8665358ea1a9f11b82913020e5479376","name":"ZDR","decimals":"8"},{"addr":"0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e","name":"MOD","decimals":0},{"addr":"0x959529102cfde07b1196bd27adedc196d75f84f6","name":"BLO","decimals":0},{"addr":"0x95cc9c7bf003d948dea3a5a95116f7fd9ca43778","name":"G5","decimals":"8"},{"addr":"0x95d1ff2703cea9ed052e186e8b6781f3094a450e","name":"XMRC","decimals":"8"},{"addr":"0x960b236a07cf122663c4303350609a66a7b288c0","name":"ANT","decimals":18},{"addr":"0x961b17cd6976901cf24cf4b2e320cfa2872e6de3","name":"SPP Series A","decimals":0},{"addr":"0x962bb1cd4724e9e7cbca9723fa7e5ee5a9483435","name":"FAITH","decimals":"8"},{"addr":"0x964432e4cfdf1463167d21815bcf9463cf19ea49","name":"ZIL","decimals":"18"},{"addr":"0x9648915f9a4b6778c3d3716bc084f0a44e4cba48","name":"LOOT032","decimals":"18"},{"addr":"0x96a65609a7b84e8842732deb08f56c3e21ac6f8a","name":"CTR","decimals":18},{"addr":"0x96c480758f58454d50cf15d13a29de76ee7c8eed","name":"RBC","decimals":"18"},{"addr":"0x96d3bec96f3b5cde5c1121a007cec78ef8a9389a","name":"ENERGY","decimals":0},{"addr":"0x96d783e53aefb924c609a30766238b871ed84be2","name":"GACHI","decimals":"18"},{"addr":"0x9720b467a710382a232a32f540bdced7d662a10b","name":"VZT","decimals":"18"},{"addr":"0x9733e6c4dc6f1f6b9c5723b8a64fc2ab90b14a8b","name":"STM","decimals":"18"},{"addr":"0x973e57923da9c67670b52a95eeb93697113da276","name":"VLB","decimals":"18"},{"addr":"0x9742fa8cb51d294c8267ddfead8582e16f18e421","name":"10MTI","decimals":"10"},{"addr":"0x97bf9d01ebfab188d532c9ef941017bc882353b9","name":"BIM","decimals":0},{"addr":"0x983877018633c0940b183cd38d1b58bee34f7301","name":"DEEP","decimals":"8"},{"addr":"0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63","name":"SNM","decimals":18},{"addr":"0x985e9cda2fc567ace547a57f567734f59b8290c9","name":"WHD","decimals":"18"},{"addr":"0x98657619fcf385173e31000543b25e67ca3f8666","name":"POLY","decimals":"18"},{"addr":"0x989812ae9cb5536048376e6982d120942ae5dcda","name":"BHT","decimals":"18"},{"addr":"0x98bde3a768401260e7025faf9947ef1b81295519","name":"BCS","decimals":"18"},{"addr":"0x98e2750d38b1d24ba6c503e9853db69e7cf78fe4","name":"BMK","decimals":"18"},{"addr":"0x98f5e9b7f0e33956c0443e81bf7deb8b5b1ed545","name":"SEXY","decimals":"18"},{"addr":"0x9901ed1e649c4a77c7fff3dfd446ffe3464da747","name":"ENT","decimals":"18"},{"addr":"0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9","name":"EAGLE","decimals":"18"},{"addr":"0x999967e2ec8a74b7c8e9db19e039d920b31d39d0","name":"TIE","decimals":"18"},{"addr":"0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d","name":"QSP","decimals":"18"},{"addr":"0x9a1aa5b9f1978ad15c3b83868a5a16b0c102a430","name":"READ","decimals":"8"},{"addr":"0x9a642d6b3368ddc662ca244badf32cda716005bc","name":"QTUM","decimals":18},{"addr":"0x9a92562c5887a15a83b5f01e3c4cd07889960fb2","name":"MAC1","decimals":"1"},{"addr":"0x9af2c6b1a28d3d6bc084bd267f70e90d49741d5b","name":"AXP","decimals":"8"},{"addr":"0x9af4f26941677c706cfecf6d3379ff01bb85d5ab","name":"DRT","decimals":8},{"addr":"0x9b06fb515b68089518a4f857a8bcfb16cc97346e","name":"BIO","decimals":"2"},{"addr":"0x9b0f6a5a667cb92af0cd15dbe90e764e32f69e77","name":"RSC","decimals":"3"},{"addr":"0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139","name":"ATM","decimals":"8"},{"addr":"0x9b20dabcec77f6289113e61893f7beefaeb1990a","name":"FAIR","decimals":"18"},{"addr":"0x9b6443b0fb9c241a7fdac375595cea13e6b7807a","name":"RCC","decimals":18},{"addr":"0x9b68bfae21df5a510931a262cecf63f41338f264","name":"DBET","decimals":"18"},{"addr":"0x9b7593aae6b48d02668808c2dfbfc4bef35ef957","name":"DVN","decimals":"18"},{"addr":"0x9bb7eb467eb11193966e726f3397d27136e79eb2","name":"TMN","decimals":"4"},{"addr":"0x9c1d13d5a8fd4a8ac89917d31d40db454d1ee60b","name":"elunch","decimals":"18"},{"addr":"0x9c23a568a32e8434ec88bdf60891a1d95ffd36cc","name":"CHUCKNORRIS","decimals":"4"},{"addr":"0x9c23d67aea7b95d80942e3836bcdf7e708a747c2","name":"LOCI","decimals":"18"},{"addr":"0x9c3a2334d8d7a8b9013c0e572a5bbdfc2fc69063","name":"LCC","decimals":"18"},{"addr":"0x9c9891f7795eb127ba4783b671573275ff3a83a9","name":"B2X","decimals":"8"},{"addr":"0x9cb9eb4bb7800bdbb017be2a4ffbeccb67454ea9","name":"BOPT","decimals":8},{"addr":"0x9d2f8e290114e09f9b1da8d8ade8ab96270217b4","name":"AMZ","decimals":8},{"addr":"0x9d5b592b687c887a5a34df5f9207adb2c2db3aec","name":"ETBT","decimals":"18"},{"addr":"0x9d613a7a10cd550c7a0826c6deecff6f1b3e9879","name":"FNT","decimals":"8"},{"addr":"0x9dcf430a4c62bb84e6bac2c4a8f54756fb3c1c8f","name":"BBT","decimals":"18"},{"addr":"0x9dfe4643c04078a46803edcc30a3291b76d4c20c","name":"GEN","decimals":"18"},{"addr":"0x9e386da8cdfcf8b9e7490e3f2a4589c570cb2b2f","name":"RPIL","decimals":"8"},{"addr":"0x9e39c83eb14a1b1f9dff28d328c90d8648e07f7b","name":"PET","decimals":"18"},{"addr":"0x9e53661d86a46670960e8ba42d33e64eaa8f885f","name":"TRB","decimals":"18"},{"addr":"0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f","name":"HKN","decimals":"8"},{"addr":"0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891","name":"BRAT","decimals":"8"},{"addr":"0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a","name":"SWM","decimals":"18"},{"addr":"0x9e8a119e5d24edc9692e1cb223d9c85844c09a83","name":"ETHER","decimals":"18"},{"addr":"0x9e8df8fd7c6c724880e2d73d8faf7fc7ff98c5c4","name":"POA","decimals":"18"},{"addr":"0x9f2def9e711b59172958e5076601059a0a89d6a2","name":"EDT","decimals":"18"},{"addr":"0x9f5f3cfd7a32700c93f971637407ff17b91c7342","name":"DDD","decimals":"18"},{"addr":"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2","name":"MKR","decimals":"18"},{"addr":"0x9fb8b1bbc6011c1b088795cd7a22990b5c9e29a7","name":"CH","decimals":"2"},{"addr":"0x9fe173573b3f3cf4aebce5fd5bef957b9a6686e8","name":"BVT","decimals":"6"},{"addr":"0xa01d9bafa60fbd1967bacf74b76c7e464d0f7c92","name":"11of12","decimals":"18"},{"addr":"0xa03c4cc1ddaa55e65c9421b9be8ef25fb68b08a5","name":"MEK","decimals":"6"},{"addr":"0xa042a3079a45ca1fb586b8307bcab9b8f8a85b27","name":"T4GM","decimals":"2"},{"addr":"0xa04d0e719f0b5acbd80846d03144762dcbb74d3e","name":"AMZ","decimals":0},{"addr":"0xa05c48fff5da158edd45df5659ca2f3d55509a6b","name":"EGAMET","decimals":"8"},{"addr":"0xa089273724e07644da9739a708e544800d925115","name":"HION","decimals":"18"},{"addr":"0xa090e882f82e5080ecd083134feadcb7c965030f","name":"DEX","decimals":"8"},{"addr":"0xa0aa85b54f8a7b09c845f13a09172b08925f3d54","name":"SISA","decimals":"18"},{"addr":"0xa0b7b411493957a5ede4265e25442dea30e11d65","name":"RIP","decimals":"18"},{"addr":"0xa0bf89d9d29087f2ee998bd998561e816de4129f","name":"PNW","decimals":"18"},{"addr":"0xa0d3e2b591457006f750de52d8ea398f31a5f69d","name":"etwg","decimals":"18"},{"addr":"0xa0e743c37c470ab381cf0e87b6e8f12ef19586fd","name":"CRYPHER","decimals":"18"},{"addr":"0xa0eedc17cf94d44fa3049cdf95662e9dc651f3f0","name":"FAMILY","decimals":"18"},{"addr":"0xa119f0f5fd06ebadff8883c0f3c40b2d22e7a44f","name":"CRTM","decimals":"8"},{"addr":"0xa1a85a763b252ff7253b8829d4fb60d526e517ca","name":"TRIBE","decimals":"6"},{"addr":"0xa1b1543195bb5089febf4068b3d3d4f35c06c260","name":"HEDGE","decimals":"18"},{"addr":"0xa1cf530fa86c17c84d5d3b0f0a6f60265e2e8b7b","name":"CVC+","decimals":"4"},{"addr":"0xa24c92fe9005be26b22d4b787c8a482b6c7fd6fb","name":"JENNY","decimals":"18"},{"addr":"0xa25d01d15fc0e3cdede1bebee4124394aae0db33","name":"FLLW","decimals":"18"},{"addr":"0xa299df5d0368b75ed5230363a01a81add1151483","name":"KCT","decimals":"18"},{"addr":"0xa2f4fcb0fde2dd59f7a1873e121bc5623e3164eb","name":"AIR","decimals":0},{"addr":"0xa4382a945d116f3511728ce2fa79af77d90a353e","name":"GOY","decimals":"18"},{"addr":"0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037","name":"SENT","decimals":"8"},{"addr":"0xa4ef5964f146d2526c51fc40caa244e45edce136","name":"EPL","decimals":"8"},{"addr":"0xa50053a166aefdfe0dab5956030e392e6dd83cc9","name":"PRFT Test","decimals":"18"},{"addr":"0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970","name":"NDC","decimals":18},{"addr":"0xa578acc0cb7875781b7880903f4594d13cfa8b98","name":"ECN","decimals":"2"},{"addr":"0xa58ee335f32bb784b9b2eb6c89764ff21ac7ce13","name":"MTM","decimals":"3"},{"addr":"0xa5a283557653f36cf9aa0d5cc74b1e30422349f2","name":"UETL","decimals":"8"},{"addr":"0xa5f06f4f6f27791ad828d8f59ff573a9ba31253f","name":"Emn","decimals":"18"},{"addr":"0xa5f8fc0921880cb7342368bd128eb8050442b1a1","name":"ARY","decimals":"18"},{"addr":"0xa61f75a4cf36e54a774cddb0e0b185671d9b9a9a","name":"TTTT01","decimals":"18"},{"addr":"0xa645264c5603e96c3b0b078cdab68733794b0a71","name":"MYST","decimals":8},{"addr":"0xa64c3956d55592fa20762d8e62eb5b8e6f8aaad0","name":"8=D","decimals":"18"},{"addr":"0xa65aa34b57ba2d16d8cc5e321181e973de34abb5","name":"ETS","decimals":0},{"addr":"0xa65ee5fd259d94294c4ef030d1a62eeb465b9438","name":"EBYTE","decimals":"9"},{"addr":"0xa6c9e4d4b34d432d4aea793fa8c380b9940a5279","name":"KRX","decimals":"18"},{"addr":"0xa6e2f7f33f01fb399e72f3e044196eab7d348012","name":"AMO","decimals":"4"},{"addr":"0xa6e7172662379f1f4c72108655869abdbb7f7672","name":"Jade","decimals":"5"},{"addr":"0xa709378a4895a8b9ce520d936e5d32686f39e0ef","name":"PEPR","decimals":"5"},{"addr":"0xa74476443119a942de498590fe1f2454d7d4ac0d","name":"GNT","decimals":18},{"addr":"0xa7a05cf8d6d8e4e73db47fe4de4cbd5b63d15cfa","name":"KCP","decimals":"18"},{"addr":"0xa7f976c360ebbed4465c2855684d1aae5271efa9","name":"TFL","decimals":8},{"addr":"0xa8006c4ca56f24d6836727d106349320db7fef82","name":"INXT","decimals":"8"},{"addr":"0xa823e6722006afe99e91c30ff5295052fe6b8e32","name":"NEU","decimals":"18"},{"addr":"0xa83a86be031728a7dd99d00aeb76677918133c1a","name":"LCC","decimals":"18"},{"addr":"0xa87c3ec87eb802aad080df0adb331e504d327e5d","name":"DALA","decimals":"18"},{"addr":"0xa897303e3f1ec585aa0816d1527f9025a37a5905","name":"BBRT","decimals":"2"},{"addr":"0xa89b5934863447f6e4fc53b315a93e873bda69a3","name":"LUM","decimals":"18"},{"addr":"0xa8ba4095833a3f924d86cb3941099c1abb75ea13","name":"SUB1X","decimals":"18"},{"addr":"0xa8df5d1e4c77b7d46472ce52e973ea177a18dd4b","name":"EWHASH","decimals":"18"},{"addr":"0xa8f93faee440644f89059a2c88bdc9bf3be5e2ea","name":"CASH","decimals":"18"},{"addr":"0xa94c128a138504e1f81d727cc21bcb9ae6581015","name":"FDM","decimals":"18"},{"addr":"0xa95c34ef5a4cdd780d3414455149b086f865fc7a","name":"DFT","decimals":"18"},{"addr":"0xa9673001fcb3356e013398a42d49cec95d437547","name":"SHITC","decimals":"18"},{"addr":"0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd","name":"BTCM","decimals":"18"},{"addr":"0xa9d0ea9ab6e15b301a45f731dd84b0507021664a","name":"WELOOK","decimals":"18"},{"addr":"0xaa0ad6c0db34f150f72839c76ed8beaad8413c21","name":"VLK","decimals":"12"},{"addr":"0xaa26b73bfdc80b5c7d2cfbfc30930038fb7fa657","name":"TOV","decimals":0},{"addr":"0xaa33983acfc48be1d76e0f8fe377ffe956ad84ad","name":"DLC","decimals":"8"},{"addr":"0xaa37e59d7608eb96bef18ef1e29400e14be1562e","name":"CRN","decimals":"18"},{"addr":"0xaa4ab1c817e4df7d25ce4d42352649d592a3bba0","name":"ANK","decimals":"18"},{"addr":"0xaa669c292d94c591514c2eaa7e8f28061a28b47c","name":"TIN","decimals":"18"},{"addr":"0xaa6da59f02ac6335ff0dbb896323181a8431a675","name":"BIZ","decimals":"18"},{"addr":"0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f","name":"TRAC","decimals":"18"},{"addr":"0xaaaf91d9b90df800df4f55c205fd6989c977e73a","name":"TKN","decimals":8},{"addr":"0xaadb05f449072d275833baf7c82e8fca4ee46575","name":"SXU","decimals":"6"},{"addr":"0xab16e0d25c06cb376259cc18c1de4aca57605589","name":"FUCK","decimals":"4"},{"addr":"0xab585f401350451fc668a9a328bc0a5bbdadf0dc","name":"DCA","decimals":"18"},{"addr":"0xab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf84","name":"MRV","decimals":18},{"addr":"0xab6efb0b39f478d2d01a505fc4e8004860358402","name":"5ch","decimals":"18"},{"addr":"0xab95e915c123fded5bdfb6325e35ef5515f1ea69","name":"XNN","decimals":18},{"addr":"0xac1ec3143b89d5b263d9194db216ea068e0f3dc9","name":"BSC","decimals":0},{"addr":"0xac298353ab790e668986ac9e2d3a9ddfc600ff78","name":"UQn","decimals":"2"},{"addr":"0xac2bd14654bbf22f9d8f20c7b3a70e376d3436b4","name":"KITTEN","decimals":"8"},{"addr":"0xac3211a5025414af2866ff09c23fc18bc97e79b1","name":"DOVU","decimals":18},{"addr":"0xac3da587eac229c9896d919abc235ca4fd7f72c1","name":"TGT","decimals":1},{"addr":"0xac709fcb44a43c35f0da4e3163b117a17f3770f5","name":"ARC","decimals":18},{"addr":"0xacb65cc264aecb5aeb872763dcf46d34d172da3d","name":"BDSM","decimals":"12"},{"addr":"0xad18a639d0eba8f2f887dcb8262cca6fe304e573","name":"BTCGO","decimals":"18"},{"addr":"0xad2ffb12f09e7886309ffd5b26d6262f1b52cb45","name":"VIC","decimals":"3"},{"addr":"0xad413f7f88674adb05a8c7b0c280811ad6735707","name":"AMOR","decimals":"6"},{"addr":"0xad44ef85a51e86c9a0853b5452951c7baad401c8","name":"PYD","decimals":"8"},{"addr":"0xad6714bd97cbbd29788f8838bc865ee71b843eb8","name":"HDLB","decimals":"8"},{"addr":"0xad6a6e78f3bb441fb3127e8056686aa327dc3480","name":"E2X","decimals":"8"},{"addr":"0xad6fc7cba45d982e237ed54122ccfc0151eb8f2d","name":"MMT","decimals":"18"},{"addr":"0xad7d88452599efde4ada444b1b810e009d0a42ef","name":"MGI","decimals":"3"},{"addr":"0xae1ca80cfd7740925e56a261df17dd59a4a40942","name":"ADTEN","decimals":"3"},{"addr":"0xae258d5322b59d64df9eb483e3b1733332c3b66c","name":"ETHG","decimals":"8"},{"addr":"0xae4191a7eb25713ac90483ea75828ae8038f94dc","name":"EZEC","decimals":"18"},{"addr":"0xae4f56f072c34c0a65b3ae3e4db797d831439d93","name":"GIM","decimals":"8"},{"addr":"0xae616e72d3d89e847f74e8ace41ca68bbf56af79","name":"∞","decimals":6},{"addr":"0xaebe5b3780860147de62bc67339f0386c4a13d87","name":"NTC","decimals":"18"},{"addr":"0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009","name":"SNGLS","decimals":0},{"addr":"0xaf146fbd319ca7ae178caa2c9d80a2db6b944350","name":"PXT","decimals":"18"},{"addr":"0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7","name":"1ST","decimals":18},{"addr":"0xaf3d5dfa03587341cb086d5d7f3d82512fb8db23","name":"ECC","decimals":"18"},{"addr":"0xaf4dce16da2877f8c9e00544c93b62ac40631f16","name":"MTH","decimals":5},{"addr":"0xaf55f3b7dc65c8f9577cf00c8c5ca7b6e8cc4433","name":"ENTRC","decimals":"8"},{"addr":"0xaf85aa4ba93ccf395ef9a80aed58c4d6865af5c0","name":"RESO086","decimals":"18"},{"addr":"0xaf9eb1dd043cab3316b3b8282b65cb19b69d5729","name":"BOB","decimals":"3"},{"addr":"0xafa59ea4399b5f55135ea535962efb796b7981f9","name":"ASP","decimals":0},{"addr":"0xafc39788c51f0c1ff7b55317f3e70299e521fff6","name":"eBCH","decimals":"8"},{"addr":"0xafccb5621ad4b2d7e4d10ba8b1e31a56255e1d1e","name":"ETHI","decimals":"18"},{"addr":"0xafe60511341a37488de25bef351952562e31fcc1","name":"TBT","decimals":"8"},{"addr":"0xb012f0d8f12f237c991da522c93fcb1d1f06aa31","name":"AGT","decimals":"18"},{"addr":"0xb0340c6950199d3c527e104a655bbbe722a9fd3f","name":"EVAN","decimals":"2"},{"addr":"0xb06ac1b07151d0f4aa3f50db058dd27ae64ce3cb","name":"LINESO","decimals":"18"},{"addr":"0xb06de6eaab9fe283abc9bd2d1084e4896051d6dc","name":"iEXC","decimals":"8"},{"addr":"0xb0c45487696eeb2df4012b463919d69a99070fa5","name":"SBL","decimals":"1"},{"addr":"0xb0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5","name":"ARX","decimals":"18"},{"addr":"0xb0f9465085ed53a9170d396b440012bd80fbb533","name":"RESTORE","decimals":"4"},{"addr":"0xb15786fb80959a722deaf19eb360fcf7f3062687","name":"DASHC","decimals":"18"},{"addr":"0xb17694da33c2ac8b911850d823b32087a61bc9d2","name":"PTH","decimals":0},{"addr":"0xb17df9a3b09583a9bdcf757d6367171476d4d8a3","name":"MVC","decimals":"18"},{"addr":"0xb1b67ea35d8e807ddb798addad9e5a9928b8f21a","name":"§","decimals":"18"},{"addr":"0xb1bd1bbe4104ae6ccef15039ad938026e622a5e5","name":"MTRc","decimals":"8"},{"addr":"0xb203b5495109c6c85615ebb2056f98301d470507","name":"TRASH","decimals":"3"},{"addr":"0xb228668bc6f79be14f42e5985c1853307550fd27","name":"SHET","decimals":"8"},{"addr":"0xb236e2477b8ed34b203b60e2b88884ee5b31a3c3","name":"UCN","decimals":"8"},{"addr":"0xb23be73573bc7e03db6e5dfc62405368716d28a8","name":"ONEK","decimals":"18"},{"addr":"0xb24754be79281553dc1adc160ddf5cd9b74361a4","name":"XRL","decimals":9},{"addr":"0xb2903b8f337c7f50dec3b008b872259a8e3c14d1","name":"BLL","decimals":"8"},{"addr":"0xb29678a4805a7d787dc9589e179d27f7575bb9f7","name":"AUA","decimals":5},{"addr":"0xb2bfeb70b903f1baac7f2ba2c62934c7e5b974c4","name":"BKB","decimals":"8"},{"addr":"0xb2d9b039db9b6e37014c4d532d1308ae69ec2b53","name":"Singularity","decimals":"18"},{"addr":"0xb2f7eb1f2c37645be61d73953035360e768d81e6","name":"COB","decimals":"18"},{"addr":"0xb2ff8511991d43138ac881bd4a04a658e00ad3c0","name":"XBV","decimals":"8"},{"addr":"0xb3104b4b9da82025e8b9f8fb28b3553ce2f67069","name":"BIX","decimals":"18"},{"addr":"0xb3203db25a01fa7950a860b42b899ad7da52ddd6","name":"PLX","decimals":"8"},{"addr":"0xb395bb199f4b31232274a2889b266a37ea64b1a3","name":"PBIT","decimals":"8"},{"addr":"0xb39a1a54acad320ca64ae671edb05332595eaa11","name":"NEOD","decimals":0},{"addr":"0xb3bd49e28f8f832b8d1e246106991e546c323502","name":"GMT","decimals":"18"},{"addr":"0xb4028afd5d06a0107d0a531268fe1921e8701936","name":"JNC","decimals":"18"},{"addr":"0xb444208cb0516c150178fcf9a52604bc04a1acea","name":"GRMD","decimals":18},{"addr":"0xb45a50545beeab73f38f31e5973768c421805e5e","name":"TKR","decimals":"18"},{"addr":"0xb4a89d1ff3bbabab40206d5f855aca9923a86c8d","name":"RESO090","decimals":"18"},{"addr":"0xb4b1d2c217ec0776584ce08d3dd98f90ededa44b","name":"CO2","decimals":"18"},{"addr":"0xb4bfa6b45e25ad12bb033ec8a5eff523b83cc9af","name":"UAHPAY","decimals":"18"},{"addr":"0xb4c55b5a1faf5323e59842171c2492773a3783dd","name":"BCDC","decimals":"18"},{"addr":"0xb4efd85c19999d84251304bda99e90b92300bd93","name":"RPL","decimals":18},{"addr":"0xb4f5438c3c2a682da351ab6b57edc8530efd67be","name":"ETHPR","decimals":"4"},{"addr":"0xb518d165398d9057ea8b73096edda5c7754bcd62","name":"EXRP","decimals":"18"},{"addr":"0xb5335e24d0ab29c190ab8c2b459238da1153ceba","name":"HXG","decimals":"4"},{"addr":"0xb53a96bcbdd9cf78dff20bab6c2be7baec8f00f8","name":"eGAS","decimals":"8"},{"addr":"0xb54ba2fba6d1af36bd5712e64491ed175860b30e","name":"BTCP","decimals":0},{"addr":"0xb554cf51cda0fccd5012d55737c4df55a3e18a5c","name":"MLK","decimals":"8"},{"addr":"0xb57e2ec276460a993393ca1bb2bdae6c8170c73a","name":"CTB","decimals":0},{"addr":"0xb5a5f22694352c15b00323844ad545abb2b11028","name":"ICX","decimals":18},{"addr":"0xb5b57e3c59b0a2b3e8ae5102142d98daab0a51dd","name":"KRM","decimals":"18"},{"addr":"0xb5dcb27a9483ed9c55777134bf8178b4ead3035b","name":"3DT","decimals":"18"},{"addr":"0xb62d18dea74045e822352ce4b3ee77319dc5ff2f","name":"EVC","decimals":18},{"addr":"0xb63b606ac810a52cca15e44bb630fd42d8d1d83d","name":"MCO","decimals":8},{"addr":"0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac","name":"STORJ","decimals":8},{"addr":"0xb659664e5d31257738ab78a0a7916ff46edfefb0","name":"WST","decimals":"8"},{"addr":"0xb6716032787fb2a0dc96346dd945d376d91e12c7","name":"BCA","decimals":"18"},{"addr":"0xb67734521eabbe9c773729db73e16cc2dfb20a58","name":"e₹","decimals":"2"},{"addr":"0xb67b88a25708a35ae7c2d736d398d268ce4f7f83","name":"EMON","decimals":"8"},{"addr":"0xb697a802a93c9ef958ec93ddf4d5800c5a01f7d4","name":"MD","decimals":"18"},{"addr":"0xb6bd66e00dac75f979f544cde2405a29dfc7b9a9","name":"420","decimals":"18"},{"addr":"0xb6bf757e722dd1e7db9fb06e30bcf8f591f94b44","name":"BOOT005","decimals":"18"},{"addr":"0xb6f09f221d7a93390235d427c72fffc4f3856a9f","name":"VRG","decimals":"18"},{"addr":"0xb6f43025b29196af2dddd69b0a58afba079cd600","name":"IIC","decimals":"18"},{"addr":"0xb72627650f1149ea5e54834b2f468e5d430e67bf","name":"BITS","decimals":"8"},{"addr":"0xb771e3fab9a3c32ce3dc71e280eb5606a5647b5d","name":"CHRM017","decimals":"18"},{"addr":"0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74","name":"WTC","decimals":18},{"addr":"0xb7d33f7e845d830c636a9ef833b92fc55f7cc0d7","name":"ZELC","decimals":"18"},{"addr":"0xb802b24e0637c2b87d2e8b7784c055bbe921011a","name":"EMV","decimals":2},{"addr":"0xb8742486c723793cf5162bb5d3425ed9cd73d049","name":"TCASH","decimals":"8"},{"addr":"0xb8c16186362af0a9931b41cc65277f13dcbc8c5d","name":"SUL","decimals":"18"},{"addr":"0xb8c77482e45f1f44de1745f52c74426c631bdd52","name":"BNB","decimals":"18"},{"addr":"0xb8d8a92cafaf6c055bce8e53405d90be96d1a677","name":"REDV","decimals":"8"},{"addr":"0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c","name":"NULS","decimals":"18"},{"addr":"0xb9132c68dd9f8b35334ceb2171c6b9fc09fc9233","name":"STAR","decimals":"18"},{"addr":"0xb96eb33e4a1a9ea3b8581abc8185f9597e45e8aa","name":"HEC","decimals":"18"},{"addr":"0xb97048628db6b661d4c2aa833e95dbe1a905b280","name":"PAY","decimals":18},{"addr":"0xb9a50324d572d7bd886a0d35cb17c1eefd1da26a","name":"PRFT Test","decimals":"18"},{"addr":"0xb9b4cfe4194d7e8511aa9b9f1260bc7b9634249e","name":"RST-P","decimals":"10"},{"addr":"0xb9e7f8568e08d5659f5d29c4997173d84cdf2607","name":"SWT","decimals":18},{"addr":"0xba034506a97e369c853ca06345c6b0e712a330d7","name":"ZCG","decimals":"8"},{"addr":"0xba138976d8e7644ba8fe74409286a85dba85ba2a","name":"TRV","decimals":"8"},{"addr":"0xba2184520a1cc49a6159c57e61e1844e085615b6","name":"HGT","decimals":8},{"addr":"0xba2990421c16efe5ed8cdd24e3d512afe4c3d15b","name":"QUE","decimals":"18"},{"addr":"0xba54621876dfca50d15705201a5c3b12949b2a79","name":"URHOC","decimals":"8"},{"addr":"0xba5f11b16b155792cf3b2e6880e8706859a8aeb6","name":"ARN","decimals":"8"},{"addr":"0xbac8b35bad0e87b57f1c15ac2049e0ef78a1c752","name":"NEB","decimals":"3"},{"addr":"0xbaea11ee67d559cd9c2be58f16f5cf8a90d9548a","name":"COPY","decimals":"18"},{"addr":"0xbaf9d121d6447b19e95f48fad834a0dff1a92691","name":"LEGIT","decimals":0},{"addr":"0xbb28bc9a43f60eb00e15e3654acc9e6ced43856f","name":"ETHU","decimals":"18"},{"addr":"0xbb9bc244d798123fde783fcc1c72d3bb8c189413","name":"DAO","decimals":16},{"addr":"0xbbb1bd2d741f05e144e6c4517676a15554fd4b8d","name":"FUN","decimals":"8"},{"addr":"0xbc5daee26d6c3f9fa5cfc0e9cd4114dcf47404ea","name":"EBTC","decimals":"8"},{"addr":"0xbc63acdfafa94bd4d8c2bb7a8552281f107242c0","name":"MXX","decimals":"18"},{"addr":"0xbc7de10afe530843e71dfb2e3872405191e8d14a","name":"SHOUC","decimals":"18"},{"addr":"0xbc7f459ee26d2f83d20da97fcf0eb5467b3e28a7","name":"BTC(BitCoin)","decimals":"18"},{"addr":"0xbc9395973bd35a3b4bd924f050d2778c07506ecb","name":"GREED","decimals":"18"},{"addr":"0xbcb87a9a085369fa926aff5b67f668a790dec748","name":"RYD","decimals":"11"},{"addr":"0xbcff2d15c698d3874bc29aa170c89fd7a6146a4b","name":"CHX","decimals":"18"},{"addr":"0xbd2ff9d975f8a75a89e206e68ed4d7ff35db5994","name":"MGB","decimals":"8"},{"addr":"0xbd36ad3e10d3c057a2a7379124823f9e73d36a33","name":"EDOGE","decimals":18},{"addr":"0xbd5cfa0e509b2981753da7a53ee18f5876f8631e","name":"ETHUT","decimals":"18"},{"addr":"0xbd6a473b817843cc9ef5c02d52bb29b07976b6d7","name":"ZPN","decimals":"18"},{"addr":"0xbdc5bac39dbe132b1e030e898ae3830017d7d969","name":"SNOV","decimals":"18"},{"addr":"0xbe11eeb186e624b8f26a5045575a1340e4054552","name":"CCC","decimals":"18"},{"addr":"0xbeb4adc711aab72b12d89e2044c826bd32f9fd7c","name":"PRP","decimals":"18"},{"addr":"0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1","name":"MLN","decimals":18},{"addr":"0xbec626cbd5641b1eb2fee7c043ecbd4b317dd3a3","name":"TOUR","decimals":"2"},{"addr":"0xbec8f6d667594fb181c9d68e5c80c910888be93d","name":"STAKE","decimals":"8"},{"addr":"0xbf2179859fc6d5bee9bf9158632dc51678a4100e","name":"ELF","decimals":"18"},{"addr":"0xbf430e24ac0f33d4ad6fac9654b37943124c2786","name":"eBTG","decimals":"8"},{"addr":"0xbf4a29269bf3a5c351c2af3a9c9ed81b07129ce4","name":"KEN","decimals":"18"},{"addr":"0xbf8482594a4f0f5399bc7d49231de0c9bc11ff8d","name":"THDE","decimals":"18"},{"addr":"0xbfa2589a68321e2be4633a7a15456a5fa7f8e153","name":"QTG","decimals":"18"},{"addr":"0xbfd4a3c26996dfc9e85a951eb615aac3b84c758b","name":"ALPC","decimals":0},{"addr":"0xc01b78e62a4d1fdce58d364193ee1218832919fd","name":"STH","decimals":"18"},{"addr":"0xc029ba3dc12e1834571e821d94a07de0a01138ea","name":"QBE","decimals":"18"},{"addr":"0xc02e785dcb00f55894baa6a7d5a2bb001acd2009","name":"LNC","decimals":"18"},{"addr":"0xc091507e70f13ee6af6ef35f553af4c6e81e9b5d","name":"ZTH","decimals":"3"},{"addr":"0xc0c2ee1ce1fed8f6e2764363a36db3dd4cf10022","name":"FBL","decimals":"2"},{"addr":"0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d","name":"HVN","decimals":8},{"addr":"0xc0f0a401e2721312f2badcc48ec9484eb935498a","name":"ELTC","decimals":"8"},{"addr":"0xc1322d8ae3b0e2e437e0ae36388d0cfd2c02f1c9","name":"PMT","decimals":"4"},{"addr":"0xc14830e53aa344e8c14603a91229a0b925b0b262","name":"PXT","decimals":"8"},{"addr":"0xc18caa05f50f89ae70fc33e04ee7d8ddc00069d3","name":"THBC","decimals":"2"},{"addr":"0xc2788cf089a6669b3e33e772caefdb3b4f101fc3","name":"LYNX","decimals":"8"},{"addr":"0xc27a2f05fa577a83ba0fdb4c38443c0718356501","name":"TAU","decimals":"18"},{"addr":"0xc2c63f23ec5e97efbd7565df9ec764fdc7d4e91d","name":"BOU","decimals":"18"},{"addr":"0xc2dfb1c327381c497569c67b9b4f57b24690b641","name":"ESL","decimals":"18"},{"addr":"0xc304cba6ceaf9fcfa1dfa62c67524c12c7a21659","name":"10MT","decimals":"10"},{"addr":"0xc310755f88145cabcaa06c714cd668b5465dceaa","name":"PRNC","decimals":"18"},{"addr":"0xc324a2f6b05880503444451b8b27e6f9e63287cb","name":"XUC","decimals":18},{"addr":"0xc3951d77737733174152532e8b0f27e2c4e9f0dc","name":"CLD","decimals":"6"},{"addr":"0xc3972ac283b3a7a56125674631a5c254f7f373cf","name":"HAT","decimals":"12"},{"addr":"0xc399d1e21ac4c6b65551c4ecf8d6ef4c4316e383","name":"AMR","decimals":"16"},{"addr":"0xc3d50def24c9efc61833d6e58b2dfd28eb535feb","name":"ETHUC","decimals":"8"},{"addr":"0xc42209accc14029c1012fb5680d95fbd6036e2a0","name":"PPP","decimals":"18"},{"addr":"0xc434b0584355039392bba077b2b58ae614b6f18c","name":"SHR","decimals":"10"},{"addr":"0xc438b4c0dfbb1593be6dee03bbd1a84bb3aa6213","name":"EQC","decimals":"8"},{"addr":"0xc48ff7929a849b85a5dafa7e877c5c8ef7aa50ac","name":"BIMBOS","decimals":"18"},{"addr":"0xc499ea948a1ad5d8eaf12abd2f67975c4dbe21aa","name":"ANGL","decimals":"18"},{"addr":"0xc4a86561cb0b7ea1214904f26e6d50fd357c7986","name":"CHG","decimals":"18"},{"addr":"0xc4ce91d1ac3032ef734bbecd2af41f10c0f293ef","name":"PGUC","decimals":"9"},{"addr":"0xc51c938c4d513780c66c722a41c197d3a89fa9a8","name":"eBTG","decimals":"8"},{"addr":"0xc584a60e2cbedfe6a068371e6e34f05844b3111f","name":"KYS","decimals":"18"},{"addr":"0xc596bd09d652827b0106292d3e378d5938df4b12","name":"TPT","decimals":"18"},{"addr":"0xc5bbae50781be1669306b9e001eff57a2957b09d","name":"GTO","decimals":"5"},{"addr":"0xc5cea8292e514405967d958c2325106f2f48da77","name":"PRFT","decimals":"18"},{"addr":"0xc5de7ac5ea11651f25c0738efa176010553bc323","name":"NEOC","decimals":"18"},{"addr":"0xc6390f8bf2fb04fb0f91dc9be93046a1db8fdac3","name":"PRFT Test","decimals":"18"},{"addr":"0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d","name":"FUCK","decimals":4},{"addr":"0xc66ea802717bfb9833400264dd12c2bceaa34a6d","name":"MKR","decimals":18},{"addr":"0xc6726308a2026c7803ee54ffcdb76f83f0c50b4b","name":"SOCHI","decimals":"8"},{"addr":"0xc6b014274d7406641711fb8889f93f4f11dec810","name":"NAO","decimals":"18"},{"addr":"0xc6b1953ab35f05db745dadd5ce411d75758a7898","name":"PIGGY","decimals":"18"},{"addr":"0xc6e7ce1b2b7bad6fefcf18b43f5a3cc93033f854","name":"PIT","decimals":"18"},{"addr":"0xc7579bb99af590ec71c316e1ac4436c535039594","name":"BAR","decimals":"18"},{"addr":"0xc78593c17482ea5de44fdd84896ffd903972878e","name":"BB","decimals":"9"},{"addr":"0xc79d440551a03f84f863b1f259f135794c8a7190","name":"MGX","decimals":"18"},{"addr":"0xc7be5a250142c0000f990a09755958fe48dcb077","name":"TI","decimals":"18"},{"addr":"0xc816463eb290e47ff512c04121142d1d85a3cdc2","name":"NGR","decimals":"4"},{"addr":"0xc83355ef25a104938275b46cffd94bf9917d0691","name":"FUTR","decimals":"18"},{"addr":"0xc88b2b41d4a304661db709b0b3c36e46ac0925c6","name":"eBCD","decimals":"18"},{"addr":"0xc8a6dc9ab14753cfe7dfc5c2b23a7548d62de3bf","name":"SNKC","decimals":0},{"addr":"0xc8a8d2a81cc86b95beb04e5a320d7e53f3c627dd","name":"PIN","decimals":"8"},{"addr":"0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8","name":"ELIX","decimals":"18"},{"addr":"0xc98e0639c6d2ec037a615341c369666b110e80e5","name":"EXMR","decimals":"8"},{"addr":"0xc997d07b0bc607b6d1bcb6fb9d4a5579c466c3e5","name":"FLIP","decimals":0},{"addr":"0xc9b89f6b5301f554b9adc6d4a871c3279820de40","name":"HAO","decimals":"18"},{"addr":"0xc9d202b7db1c08db49bff77010e2d388bbc42979","name":"iPUMP","decimals":"8"},{"addr":"0xca29db4221c111888a7e80b12eac8a266da3ee0d","name":"BLN","decimals":"18"},{"addr":"0xca6aa46f253d553e752f4bf6bc977555225cda8a","name":"SFC","decimals":"2"},{"addr":"0xcb2ab9fdb42de8955987304009494ee4c2a08852","name":"VNT","decimals":"18"},{"addr":"0xcb5a05bef3257613e984c17dbcf039952b6d883f","name":"SGR","decimals":"8"},{"addr":"0xcb73cef85b5d50a23a580919e72818fd2264c0f5","name":"IRA","decimals":"8"},{"addr":"0xcb8014ce601dd1515d05c2d0413e98a28b6dde0e","name":"CCO","decimals":"6"},{"addr":"0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b","name":"TRST","decimals":6},{"addr":"0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750","name":"BTM","decimals":8},{"addr":"0xcbc8ed7aec7069ac98a418a67c9bd40b7d97b848","name":"COP","decimals":"18"},{"addr":"0xcbcc0f036ed4788f63fc0fee32873d6a7487b908","name":"HMQ","decimals":8},{"addr":"0xcbce61316759d807c474441952ce41985bbc5a40","name":"MOAC","decimals":"18"},{"addr":"0xcbeaec699431857fdb4d37addbbdc20e132d4903","name":"YOYOW","decimals":18},{"addr":"0xcc34366e3842ca1bd36c1f324d15257960fcc801","name":"BON","decimals":18},{"addr":"0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38","name":"DDF","decimals":18},{"addr":"0xcced5b8288086be8c38e23567e684c3740be4d48","name":"RLT","decimals":10},{"addr":"0xcd8aac9972dc4ddc48d700bc0710c0f5223fbcfa","name":"VJU","decimals":0},{"addr":"0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814","name":"AURA","decimals":"18"},{"addr":"0xce53a179047ebed80261689367c093c90a94cc08","name":"EDT","decimals":"8"},{"addr":"0xce59d29b09aae565feeef8e52f47c3cd5368c663","name":"BLX","decimals":18},{"addr":"0xce5c603c78d047ef43032e96b5b785324f753a4f","name":"E4ROW","decimals":2},{"addr":"0xce61f5e6d1fe5a86e246f68aff956f7757282ef0","name":"1LIFE","decimals":"18"},{"addr":"0xce853db3359326db6d03981c9fb42983bbcdd007","name":"PNS","decimals":"2"},{"addr":"0xced4e93198734ddaff8492d525bd258d49eb388e","name":"EDO","decimals":"18"},{"addr":"0xcedbf324a1eb1affe53ab7b7ef0103e070e3853f","name":"ETL","decimals":"10"},{"addr":"0xcf006429f1702bd3c83e673c991ec8d545735e48","name":"0BTC","decimals":"8"},{"addr":"0xcf3334ddef93e384713b5fb42ed3b9b4e703afa5","name":"TMED","decimals":"18"},{"addr":"0xcf61a77727995ebf2afe0f279a7b7032d8ed99c4","name":"NCH","decimals":"18"},{"addr":"0xcf70fb2b78f5849a66b64f3a296c266acdffec88","name":"ACEL","decimals":"3"},{"addr":"0xcf76f32ebe10139e4370127d5789cdb0750d460d","name":"LIRA","decimals":"8"},{"addr":"0xcfb98637bcae43c13323eaa1731ced2b716962fd","name":"NET","decimals":18},{"addr":"0xcfd6ae8bf13f42de14867351eaff7a8a3b9fbbe7","name":"SNG","decimals":"8"},{"addr":"0xd01db73e047855efb414e6202098c4be4cd2423b","name":"UQC","decimals":"18"},{"addr":"0xd024645809f74043cd2133c6afeb46f0de4ad88f","name":"DEER","decimals":"18"},{"addr":"0xd037a81b22e7f814bc6f87d50e5bd67d8c329fa2","name":"EMO","decimals":"18"},{"addr":"0xd04963de435bd4d25b1cc8f05870f49edbfc8c18","name":"SNI","decimals":"18"},{"addr":"0xd071106b12839a7da843b57588e67a32435da954","name":"CES","decimals":"18"},{"addr":"0xd08029050c67f493174779bcb842dffd00a1486e","name":"WEAP049","decimals":"18"},{"addr":"0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433","name":"STORM","decimals":"18"},{"addr":"0xd0ac656a0391699f90fba7d6158d7a5ad705fa8b","name":"ICO","decimals":"8"},{"addr":"0xd0c65688fca8524bfda85b5e76cefb01157eee4e","name":"HXT","decimals":"4"},{"addr":"0xd0d6d6c5fe4a677d343cc433536bb717bae167dd","name":"ADT","decimals":9},{"addr":"0xd125af3f2e26d69a2e0098e44f607e31197fa30e","name":"eDASH","decimals":"18"},{"addr":"0xd16f45a7269d755a8be58ba82012465e1c151c77","name":"PEACE","decimals":"18"},{"addr":"0xd1b7a9c083c1e1ace7373bf3cf164b87f9d0bbd1","name":"BNTI","decimals":"18"},{"addr":"0xd1fce0e6272c1129194dd6eaf9b1451e5b49c9da","name":"EPAL","decimals":"2"},{"addr":"0xd2308446536a0bad028ab8c090d62e1ea2a51f24","name":"GNEISS","decimals":0},{"addr":"0xd234bf2410a0009df9c3c63b610c09738f18ccd7","name":"DTR","decimals":"8"},{"addr":"0xd26114cd6ee289accf82350c8d8487fedb8a0c07","name":"OMG","decimals":18},{"addr":"0xd28fd60d647661fbae301d5b455d33412b34a1a9","name":"XSD","decimals":"18"},{"addr":"0xd2d6158683aee4cc838067727209a0aaf4359de3","name":"BNTY","decimals":"18"},{"addr":"0xd317ff47dc7e1423e5e050870a66332833e5fd88","name":"PNY","decimals":18},{"addr":"0xd341d1680eeee3255b8c4c75bcce7eb57f144dae","name":"ONG","decimals":"18"},{"addr":"0xd3483638cccf9fd2a5a8521bc910493d4e759610","name":"ELE","decimals":"8"},{"addr":"0xd3c00772b24d997a812249ca637a921e81357701","name":"WILD","decimals":"18"},{"addr":"0xd3e2f9dfff5a6feeece5dbcee3b86cb375fd8c98","name":"BCOIN","decimals":"8"},{"addr":"0xd3ed7765ce22473239df6a96ab919b218f5080fa","name":"RESO087","decimals":"18"},{"addr":"0xd4499af4cd331048d354357197be976ef6ca3fa3","name":"POS","decimals":"18"},{"addr":"0xd44bb6663936cab1310584a277f7daa6943d4904","name":"WCO","decimals":"8"},{"addr":"0xd451177ce7c4d7ebfe7109a239455d38aeb8c3d1","name":"CAM","decimals":0},{"addr":"0xd4b21f852974e7b0760a3de085da711664cf07e8","name":"DTCT","decimals":"6"},{"addr":"0xd4c435f5b09f855c3317c8524cb1f586e42795fa","name":"CND","decimals":18},{"addr":"0xd4cffeef10f60eca581b5e1146b5aca4194a4c3b","name":"DUBI","decimals":"18"},{"addr":"0xd4d342fd95a968884bf50b69ee3ea870c3bbef91","name":"OTH","decimals":"18"},{"addr":"0xd4e61b22638c9b5702a3889839dbd45966474555","name":"RIK","decimals":"18"},{"addr":"0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a","name":"PPT","decimals":8},{"addr":"0xd5b9a2737c9b2ff35ecb23b884eb039303bbbb61","name":"BTH","decimals":"18"},{"addr":"0xd63656d216b709466730e59cea4d5da88dbf3c2a","name":"BEER","decimals":"18"},{"addr":"0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e","name":"Soar","decimals":"6"},{"addr":"0xd6a81d7a8b4d1cc947138d9e4aca5d3cde33a170","name":"CREDOICO","decimals":"18"},{"addr":"0xd6b4f27f4d0227e8a8dc96ff29d47a7aa88a47d7","name":"ALLOY","decimals":"18"},{"addr":"0xd6e49800decb64c0e195f791348c1e87a5864fd7","name":"RC","decimals":"9"},{"addr":"0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8","name":"SCL","decimals":"8"},{"addr":"0xd7aa94f17d60be06414973a45ffa77efd6443f0f","name":"BTCQ","decimals":"8"},{"addr":"0xd7f82e36ef04c9543ce18e6d1072354a1b9d629c","name":"LC","decimals":"18"},{"addr":"0xd819e892f4df8659188e8bda839fdf2215a513bc","name":"SPOON","decimals":"18"},{"addr":"0xd83c82d9ead90cdd59be89b9a893bfce3826e2fd","name":"BFI","decimals":"18"},{"addr":"0xd850942ef8811f2a866692a623011bde52a462c1","name":"VEN","decimals":"18"},{"addr":"0xd884f9881e0aeabad79be8a69122cf998d067fff","name":"RUB","decimals":"18"},{"addr":"0xd8912c10681d8b21fd3742244f44658dba12264e","name":"PLU","decimals":18},{"addr":"0xd8950fdeaa10304b7a7fd03a2fc66bc39f3c711a","name":"WYS","decimals":"18"},{"addr":"0xd8ba7164446ef71e89fdc0d94fa492732d371238","name":"HRA","decimals":"10"},{"addr":"0xd8cd236905efa3499b4a9e987649cebf6ec1b81e","name":"NIGR","decimals":"18"},{"addr":"0xd9646cd1cdabb68645547155f5fb033bc2f4f1b5","name":"BRD","decimals":"18"},{"addr":"0xd96b9fd7586d9ea24c950d24399be4fb65372fdd","name":"BTCS","decimals":"18"},{"addr":"0xd9a0658b7cc9ec0c57e8b20c0920d08f17e747be","name":"SAT","decimals":"10"},{"addr":"0xd9e2cb90c1d3af1e1506199553d6e66afb551a75","name":"SERP","decimals":"8"},{"addr":"0xda6cb58a0d0c01610a29c5a65c303e13e885887c","name":"cV","decimals":"18"},{"addr":"0xdab5dfa0966c3435da991b39d205c3ba1c64fe31","name":"MTP","decimals":"1"},{"addr":"0xdac6c013abe19c7a29c515f396b8eaf29cb28010","name":"ADNET","decimals":"18"},{"addr":"0xdb455c71c1bc2de4e80ca451184041ef32054001","name":"JOT","decimals":"18"},{"addr":"0xdb45faeca61c70e271bffeaf66162fa68a1c4def","name":"EBIT","decimals":0},{"addr":"0xdb9dfb67c6388291476b0c1db3b59838c447e1ec","name":"RPT","decimals":"18"},{"addr":"0xdba0521fba14c9601812a5e58173dda953257787","name":"SMINT","decimals":"18"},{"addr":"0xdbca990e1b361e9ebe9ba510549a02ad5ea277f5","name":"XMC","decimals":"18"},{"addr":"0xdbfb423e9bbf16294388e07696a5120e4ceba0c5","name":"ETHD","decimals":"18"},{"addr":"0xdc0c22285b61405aae01cba2530b6dd5cd328da7","name":"KTN","decimals":6},{"addr":"0xdc817da224c9d2e0f79dd6a9804d2c9eb6be28d7","name":"BTX","decimals":"8"},{"addr":"0xdca0312fc4c31160af85ef342d241d04d50f2262","name":"ALT","decimals":"18"},{"addr":"0xdcb9ff81013c31ff686154b4502ef6bfaa102d2d","name":"GOOC","decimals":"8"},{"addr":"0xdd007278b667f6bef52fd0a4c23604aa1f96039a","name":"RIPT","decimals":"8"},{"addr":"0xdd41fbd1ae95c5d9b198174a28e04be6b3d1aa27","name":"LYS","decimals":"8"},{"addr":"0xdd5a3aeef473401c23f24c4c6b9cd1b0808fbb36","name":"MCR","decimals":"18"},{"addr":"0xdd6c68bb32462e01705011a4e2ad1a60740f217f","name":"HBT","decimals":15},{"addr":"0xdd74a7a3769fa72561b3a69e65968f49748c690c","name":"ETCH","decimals":"18"},{"addr":"0xdd974d5c2e2928dea5f71b9825b8b646686bd200","name":"KNC","decimals":18},{"addr":"0xdded69d8e28d38d640f6244ab5294f309fd40ce1","name":"LMT","decimals":"8"},{"addr":"0xddf525b5a87e8fb809db54ff172c0858a8a11c9d","name":"ZWORK","decimals":"18"},{"addr":"0xddf65d73d88389aa1716be53d7423a34baf412c1","name":"ETHS","decimals":"18"},{"addr":"0xde11e2b7235fcb6e5039eadaaace5e4ff99c6b5b","name":"TTN","decimals":0},{"addr":"0xde1bc7342231e7207ebe7a88756f9774fa8e6961","name":"NEOC","decimals":"8"},{"addr":"0xde39e5e5a1b0eeb3afe717d6d011cae88d19451e","name":"FUDD","decimals":8},{"addr":"0xde74e42541999a9b5e944b1264b7b314cb3b2ca4","name":"BTCB","decimals":"8"},{"addr":"0xdecf3a00e37bada548ec438dcef99b43d7f9f67d","name":"IBC","decimals":"18"},{"addr":"0xdefab20be8f5595466c5a97e7f709715bd8b4d23","name":"RESO091","decimals":"18"},{"addr":"0xdf6ef343350780bf8c3410bf062e0c015b1dd671","name":"BMC","decimals":"8"},{"addr":"0xdf7556aeb3b3b034684c1c8847680fa919608974","name":"JST","decimals":"8"},{"addr":"0xdf99c7f9e0eadd71057a801055da810985df38bd","name":"PLC","decimals":"18"},{"addr":"0xdfbfd64726b1b178ef8204ae4992f641f31c8248","name":"ELT","decimals":"18"},{"addr":"0xdfe7351c291bc0e49079c62212587244e1c666ba","name":"SME","decimals":"18"},{"addr":"0xe0a04696a6aebaec5f740ed9b2a347b14573fae5","name":"EGL","decimals":"18"},{"addr":"0xe0b7927c4af23765cb51314a0e0521a9645f0e2a","name":"DGD","decimals":9},{"addr":"0xe0c21b3f45fea3e5fdc811021fb1f8842caccad2","name":"BITC","decimals":0},{"addr":"0xe0c72452740414d861606a44ccd5ea7f96488278","name":"ETT","decimals":8},{"addr":"0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf","name":"SUR","decimals":"8"},{"addr":"0xe1479d294807379320dca9a9e9002ac644539099","name":"KING","decimals":"18"},{"addr":"0xe1f1379c2420bd53fa6c6a925bad467ed48a9f54","name":"WaBi","decimals":"18"},{"addr":"0xe2097957e4aad7c4a48b7f5091d4ee78f994b0a4","name":"EDUCATE","decimals":"18"},{"addr":"0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d","name":"MAN","decimals":"18"},{"addr":"0xe25f0974fea47682f6a7386e4217da70512ec997","name":"BRC","decimals":"18"},{"addr":"0xe26517a9967299453d3f1b48aa005e6127e67210","name":"NIMFA","decimals":"18"},{"addr":"0xe29c5b523590165795bbd7d52369c2895b18841f","name":"ERT","decimals":"18"},{"addr":"0xe2d82dc7da0e6f882e96846451f4fabcc8f90528","name":"JC","decimals":"18"},{"addr":"0xe2e5d0e1422e927abab19ad2067f802ad07fb364","name":"LTO","decimals":"18"},{"addr":"0xe2e6d4be086c6938b53b22144855eef674281639","name":"LNK","decimals":"18"},{"addr":"0xe2f45f1660dc99daf3bd06f637ab1e4debc15bde","name":"SGG","decimals":"6"},{"addr":"0xe2fb6529ef566a080e6d23de0bd351311087d567","name":"COV","decimals":"18"},{"addr":"0xe30e02f049957e2a5907589e06ba646fb2c321ba","name":"DRPU","decimals":"8"},{"addr":"0xe353d6eea2a1182b9d060e2392e5b66a3fec5709","name":"BAIDU","decimals":"18"},{"addr":"0xe365b3d6cd69aa6e530c9b5a4b22aa10892273cb","name":"SKT","decimals":0},{"addr":"0xe3818504c1b32bf1557b16c238b2e01fd3149c17","name":"PLR","decimals":18},{"addr":"0xe3864954b55aa0c2794f3b3273838acb27ee1c30","name":"EBTCC","decimals":"18"},{"addr":"0xe389b6db10b3d5c67234cdac2bb08870a3174a05","name":"GFT","decimals":"4"},{"addr":"0xe3a94d04860b42ec78c8c8159756868abbb29d31","name":"IEXC20","decimals":"18"},{"addr":"0xe3d631a5fc2aa15d8f051e5ecc8b7979312c4aef","name":"BSK","decimals":"18"},{"addr":"0xe3f64dc522a66405c51d96aae234217a03502bb4","name":"SEC","decimals":"3"},{"addr":"0xe3fa177acecfb86721cf6f9f4206bd3bd672d7d5","name":"CTC","decimals":"18"},{"addr":"0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9","name":"PST","decimals":18},{"addr":"0xe41d2489571d322189246dafa5ebde1f4699f498","name":"ZRX","decimals":18},{"addr":"0xe42ba5558b00d2e6109cc60412d5d4c9473fe998","name":"IMC","decimals":"18"},{"addr":"0xe43ac1714f7394173b15e7cff31a63d523ce4fb9","name":"PLS","decimals":18},{"addr":"0xe43c9231538fff72cb2aff2f09dd20ce950f8ebc","name":"HWL","decimals":"8"},{"addr":"0xe463d10ec6b4ff6a3e5be41144956116ca30d4c3","name":"7YPE","decimals":0},{"addr":"0xe469c4473af82217b30cf17b10bcdb6c8c796e75","name":"EXRN","decimals":0},{"addr":"0xe477292f1b3268687a29376116b0ed27a9c76170","name":"PLAY","decimals":"18"},{"addr":"0xe49203f0adaa0a4fbfa7b5ab59642e43dfce11a9","name":"UP","decimals":"2"},{"addr":"0xe4c07f4637df3a0354f9b42a1b3178dc573b8926","name":"Civilianz","decimals":0},{"addr":"0xe4fd2a2e36bb632e6eb5bd4f887262c81cc44f0c","name":"ETHR","decimals":"18"},{"addr":"0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf","name":"la","decimals":18},{"addr":"0xe5132f0229ff75f949b6b7a6a94e9199c0ae40ea","name":"XGS","decimals":"6"},{"addr":"0xe531642e9bb5d027e9c20e03284287b97919a9a5","name":"FAITH","decimals":"8"},{"addr":"0xe58aff48f738b4a719d1790587cdc91a3560d7e1","name":"TMP","decimals":"7"},{"addr":"0xe5a7c12972f3bbfe70ed29521c8949b8af6a0970","name":"BLX","decimals":18},{"addr":"0xe6178250085b422a3df7d24e55a3284c2508f425","name":"DEEK","decimals":"18"},{"addr":"0xe64509f0bf07ce2d29a7ef19a8a9bc065477c1b4","name":"PIPL","decimals":"8"},{"addr":"0xe64da7e80b111020ae8c6cfb611eec8582151728","name":"TIC","decimals":0},{"addr":"0xe66cc41dd03a170623dc087a69ad8d72e64cb838","name":"BTH","decimals":"18"},{"addr":"0xe6917b0b68a9d72f384758c2e19cc2a95adc1947","name":"QEC","decimals":0},{"addr":"0xe6923e9b56db1eed1c9f430ea761da7565e260fe","name":"FC","decimals":"2"},{"addr":"0xe6f74dcfa0e20883008d8c16b6d9a329189d0c30","name":"FTC","decimals":"2"},{"addr":"0xe701cd3329057aea9d54300ddd05e41b8d74727a","name":"10MT","decimals":"10"},{"addr":"0xe71ebc4639620be7383867352a5f2f7d12ec2545","name":"FAC","decimals":"18"},{"addr":"0xe7231292e920b6de336eee38bcc69fe89d0b35f5","name":"EZY","decimals":0},{"addr":"0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd","name":"HOWL","decimals":"18"},{"addr":"0xe769d988ceda1559aee07963e59e62bd730dbba6","name":"WISE","decimals":"18"},{"addr":"0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c","name":"TAAS","decimals":6},{"addr":"0xe780c49fe4b9022a0781b2dfcd34bbb337d946e7","name":"GCTX","decimals":"18"},{"addr":"0xe7a2b858639fd53eb48a33c0e0c8974a7dd83a4e","name":"MISC","decimals":"18"},{"addr":"0xe814aee960a85208c3db542c53e7d4a6c8d5f60f","name":"DAY","decimals":"18"},{"addr":"0xe81d72d14b1516e68ac3190a46c93302cc8ed60f","name":"CL","decimals":"18"},{"addr":"0xe8599783e272ec087fada183b05516304fa2c7ff","name":"CLC","decimals":"18"},{"addr":"0xe87412bf364ae1b2352252c6957f4a89d47bc3ef","name":"SISI","decimals":"8"},{"addr":"0xe8780b48bdb05f928697a5e8155f672ed91462f7","name":"CAS","decimals":"18"},{"addr":"0xe8a1df958be379045e2b46a31a98b93a2ecdfded","name":"ESZ","decimals":"18"},{"addr":"0xe8c09672cfb9cfce6e2edbb01057d9fa569f97c1","name":"INDI","decimals":"18"},{"addr":"0xe8c3e98429f6a77f4a84d6eb19768db7adf33c26","name":"FTRUMP","decimals":"2"},{"addr":"0xe8c5e942b76099c0c6d78271bad3ca002fa7c531","name":"HELP","decimals":0},{"addr":"0xe8fc7e1973496848fcb486c5bb880f68487ea0bb","name":"LCWP","decimals":"8"},{"addr":"0xe8ff5c9c75deb346acac493c463c8950be03dfba","name":"VIBE","decimals":"18"},{"addr":"0xe928f28e2c8d7fa9a20dab07d3deaf4547383eb9","name":"SAPP","decimals":0},{"addr":"0xe93bf54f9000a5ffa8356afbe42f83a3f2006e2e","name":"PIGG","decimals":"2"},{"addr":"0xe94327d07fc17907b4db788e5adf2ed424addff6","name":"REP","decimals":18},{"addr":"0xe9a6a26598b05db855483ff5ecc5f1d0c81140c8","name":"CRO2","decimals":0},{"addr":"0xe9e74bae31892b6b1c000e009c93438dbd14d723","name":"MSTEM","decimals":"18"},{"addr":"0xea097a2b1db00627b2fa17460ad260c016016977","name":"UFR","decimals":"18"},{"addr":"0xea1f346faf023f974eb5adaf088bbcdf02d761f4","name":"TIX","decimals":18},{"addr":"0xea38eaa3c86c8f9b751533ba2e562deb9acded40","name":"FUEL","decimals":"18"},{"addr":"0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc","name":"PARETO","decimals":"18"},{"addr":"0xea610b1153477720748dc13ed378003941d84fab","name":"ALIS","decimals":18},{"addr":"0xea642206310400cda4c1c5b8e7945314aa96b8a7","name":"MINT","decimals":"18"},{"addr":"0xea93716554df1f2048ca889b7c9d93941a733546","name":"BE","decimals":0},{"addr":"0xeb2da9fac54284cea731d1f10bb34eecb3c00c14","name":"POW","decimals":"18"},{"addr":"0xeb7c20027172e5d143fb030d50f91cece2d1485d","name":"EBTC","decimals":"8"},{"addr":"0xeb9c0138d8ac10dd659640a4cc3d135c58b17b1b","name":"DTC","decimals":2},{"addr":"0xebc7cd2684dd96619841c7994343c5a8bda94b10","name":"KWH","decimals":"18"},{"addr":"0xebc86d834756621444a8a26b4cf81b625fe310cd","name":"ETHP","decimals":"18"},{"addr":"0xec46f8207d766012454c408de210bcbc2243e71c","name":"NOX","decimals":"18"},{"addr":"0xec985525f3f22c7fa9c9ff4a49e37589a76d86d4","name":"SGCC","decimals":"18"},{"addr":"0xecd570bbf74761b960fa04cc10fe2c4e86ffda36","name":"STP","decimals":"8"},{"addr":"0xecf8f87f810ecf450940c9f60066b4a7a501d6a7","name":"WETH","decimals":18},{"addr":"0xedcd82784027001d7af57a34501c65a25f97fee4","name":"DATL","decimals":"18"},{"addr":"0xedf2d3e5fb70ead2e6d8fe96845a5e59d52d2044","name":"NCH","decimals":"12"},{"addr":"0xee18db0a1432ef18f990786cb3bf3b7294345420","name":"PXT","decimals":"8"},{"addr":"0xee609fe292128cad03b786dbb9bc2634ccdbe7fc","name":"POS","decimals":18},{"addr":"0xee6465f5df390676c02ebe15cdad07d63e4b1ad6","name":"ETHM","decimals":"8"},{"addr":"0xeeac3f8da16bb0485a4a11c5128b0518dac81448","name":"TEU","decimals":"18"},{"addr":"0xeed6b3bababacb530321d49cf55b786810df3840","name":"GDC","decimals":"18"},{"addr":"0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a","name":"TIG","decimals":"18"},{"addr":"0xef0c2c7c4dc5eda03fd6ff98b0ae756f2a9320eb","name":"ONT","decimals":"18"},{"addr":"0xef25e54e1ae9bfd966b9b5cde6880e7a2323a957","name":"SOCIAL","decimals":"18"},{"addr":"0xef2e9966eb61bb494e5375d5df8d67b7db8a780d","name":"SHIT","decimals":0},{"addr":"0xef68e7c694f40c8202821edf525de3782458639f","name":"LRC","decimals":18},{"addr":"0xefa2e92ee2f5f8da00120a8ddec92bad2a5d9b96","name":"OPG","decimals":"18"},{"addr":"0xf028adee51533b1b47beaa890feb54a457f51e89","name":"BMT","decimals":"18"},{"addr":"0xf04a8ac553fcedb5ba99a64799155826c136b0be","name":"FLIXX","decimals":"18"},{"addr":"0xf05a9382a4c3f29e2784502754293d88b835109c","name":"REX","decimals":18},{"addr":"0xf084d5bc3e35e3d903260267ebd545c49c6013d0","name":"FUD","decimals":"8"},{"addr":"0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4","name":"ENG","decimals":"8"},{"addr":"0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5","name":"BQ","decimals":"3"},{"addr":"0xf13f1023cfd796ff7909e770a8ddb12d33cadc08","name":"WWAM","decimals":"3"},{"addr":"0xf152fca41bd23ff250292af391236db35e0e99c3","name":"EETH","decimals":"8"},{"addr":"0xf1d4bd7419820a565b7d12ba1efff8b8df3ce14b","name":"PMC","decimals":"18"},{"addr":"0xf1e626e60fb1a4776a5d31247e96fdd6d09da3cc","name":"FPT","decimals":"18"},{"addr":"0xf1f64f6b8e17dd68c1db10b0eed3d2541a6c09ab","name":"BID","decimals":"8"},{"addr":"0xf207ccfe6d1b90b0b7817ce2d5d262af1514e37b","name":"GAI","decimals":"18"},{"addr":"0xf230b790e05390fc8295f4d3f60332c93bed42e2","name":"TRX","decimals":6},{"addr":"0xf243ca2da0ed65846d61c6a6060510e149b1c314","name":"SUP","decimals":0},{"addr":"0xf24c625a1c81543e4673326b8450404995b7f327","name":"PRFT","decimals":"18"},{"addr":"0xf24d3dfffcaf9f9a5dda9c57eeeb1ac0bba49c86","name":"xmas","decimals":"18"},{"addr":"0xf2644f606c0ebd44c58046edca3f1027a2c14c9a","name":"HXT","decimals":"4"},{"addr":"0xf26ef5e0545384b7dcc0f297f2674189586830df","name":"BSDC","decimals":"18"},{"addr":"0xf2a988ca26e39ded001a6971420aea9cc88c72ac","name":"Water","decimals":"5"},{"addr":"0xf2ad9887ea029dd77128294f784cfb2c5248c51d","name":"21X","decimals":6},{"addr":"0xf2eab3a2034d3f6b63734d2e08262040e3ff7b48","name":"CANDY","decimals":"18"},{"addr":"0xf30ce9807e55bb1bbdf0417fed1e2e518bcc03bc","name":"SMX","decimals":"18"},{"addr":"0xf32a2866deda9f8605700544a572f7657eb53f15","name":"ICOS","decimals":0},{"addr":"0xf333b2ace992ac2bbd8798bf57bc65a06184afba","name":"SND","decimals":0},{"addr":"0xf382ccbd3d203c10706059ffdcfe053308955792","name":"IVC","decimals":"18"},{"addr":"0xf3b8c42485710fb1d390ea2a7b127313fb9c5f0f","name":"KNOW","decimals":0},{"addr":"0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8","name":"EVX","decimals":"4"},{"addr":"0xf3e014fe81267870624132ef3a646b8e83853a96","name":"VIN","decimals":"18"},{"addr":"0xf3fb69ef211c6d1e838a5c2223ef54fed4f24090","name":"COOKIE","decimals":"18"},{"addr":"0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404","name":"SNC","decimals":18},{"addr":"0xf41e5fbc2f6aac200dd8619e121ce1f05d150077","name":"CRC","decimals":"18"},{"addr":"0xf433089366899d83a9f26a773d59ec7ecf30355e","name":"MTL","decimals":8},{"addr":"0xf4467cae19c5a53b9fdcd4ded678826805aa1927","name":"XBV","decimals":"8"},{"addr":"0xf453b5b9d4e0b5c62ffb256bb2378cc2bc8e8a89","name":"MRK","decimals":"8"},{"addr":"0xf47141460a86dee6e13dcd904ff9b144e3eb6ad2","name":"FUCK","decimals":"8"},{"addr":"0xf485c5e679238f9304d986bb2fc28fe3379200e5","name":"UGC","decimals":"18"},{"addr":"0xf4e6e25a02acdf21ce7d8e7c2345ed7c2159cba2","name":"MIR","decimals":"4"},{"addr":"0xf56a843c699eaa4d43f62aa2f1a533caaaf7b3cc","name":"BBC","decimals":"4"},{"addr":"0xf5b464dbd43887c3c2f2be7c12db3427d3a57ba7","name":"JIZZ","decimals":0},{"addr":"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c","name":"ENJ","decimals":"18"},{"addr":"0xf67451dc8421f0e0afeb52faa8101034ed081ed9","name":"GAM","decimals":"8"},{"addr":"0xf68541eb5eb0bc426ea834bf8502a9f6cea75063","name":"GIFTO","decimals":"18"},{"addr":"0xf6b55acbbc49f4524aa48d19281a9a77c54de10f","name":"WLK","decimals":"18"},{"addr":"0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1","name":"DGPT","decimals":"18"},{"addr":"0xf6f61f70ae1c4559459899300b17d2b2c77d39b5","name":"RBTC","decimals":0},{"addr":"0xf6fd82dedbbe0ffadb5e1ecc2a283ab52b9ed2b0","name":"HEAL","decimals":"18"},{"addr":"0xf70a642bd387f94380ffb90451c2c81d4eb82cbc","name":"STAR","decimals":"18"},{"addr":"0xf7491ba4df2a880e9877ff4cbea54fd6df111b53","name":"SGD","decimals":"8"},{"addr":"0xf77089f2f00fca83501705b711cbb10a0de77628","name":"BMC","decimals":0},{"addr":"0xf7920b0768ecb20a123fac32311d07d193381d6f","name":"TNB","decimals":"18"},{"addr":"0xf7b098298f7c69fc14610bf71d5e02c60792894c","name":"GUP","decimals":3},{"addr":"0xf7c3b0ea78e1a65dff35e7f20701ac0709c9b86f","name":"ZET","decimals":"2"},{"addr":"0xf814d88af9f624257880ae1c6b519d87116810e8","name":"DDoos","decimals":"8"},{"addr":"0xf82c686fb7121512e703fd9efad5b38779a8c16b","name":"ZEN","decimals":"18"},{"addr":"0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a","name":"CMS","decimals":"6"},{"addr":"0xf834faa2b38e807e7cf05e35b799a151c8ccd35f","name":"EARK","decimals":"8"},{"addr":"0xf845e6443e0b6f21885648ae64c6a801e2b37b5e","name":"ETGR","decimals":"18"},{"addr":"0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f","name":"CMT","decimals":"18"},{"addr":"0xf88d20043f0e4eee7fa6bf3d3aefdabc39ae036b","name":"ULT","decimals":"18"},{"addr":"0xf8e386eda857484f5a12e4b5daa9984e06e73705","name":"IND","decimals":18},{"addr":"0xf8fa1a588cd8cd51c3c4d6dc16d2717f6332e821","name":"BXc","decimals":"2"},{"addr":"0xf8fc04b941d757c865855c1982f18583649dac47","name":"LIZI","decimals":"8"},{"addr":"0xf923ba61b43161a83afe2cab7d77ea1e41f27918","name":"PAL","decimals":"18"},{"addr":"0xf94e44d8ea46ccd8451d7e15264c6c4a78d3e10f","name":"KSS","decimals":"18"},{"addr":"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6","name":"RCN","decimals":"18"},{"addr":"0xf97f07c370918a762e2bfb689301d544fbc3b7d7","name":"RZM","decimals":"18"},{"addr":"0xf9845744a35eb90666b648dbb38bc2b9a6ecccdf","name":"BAFA","decimals":"8"},{"addr":"0xf99f901124cbbe180984a247ba94cfba0c764b2e","name":"SQRL","decimals":"6"},{"addr":"0xf9b978cd0d25713440164b2430b0caf3debfed9d","name":"MBTC","decimals":"18"},{"addr":"0xf9c9da0c81fffd491458881410903561d1e40fd0","name":"ARENA","decimals":"18"},{"addr":"0xfa05a73ffe78ef8f1a739473e462c54bae6567d9","name":"LUN","decimals":18},{"addr":"0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab","name":"IOST","decimals":"18"},{"addr":"0xfa2632a88bd0c11535a38f98a98db8251ccbaa9e","name":"GTA","decimals":"18"},{"addr":"0xfa846c47077cc1f47bc073ee391d979ad5bd2888","name":"BCS","decimals":"18"},{"addr":"0xfa9b1aa07f785e92ae0de2fca2128ed130bb0740","name":"NDAO","decimals":0},{"addr":"0xfacd5de4385e7fd9558c1bdbb5373f3f4a0f9a50","name":"TREE","decimals":"2"},{"addr":"0xfad572db566e5234ac9fc3d570c4edc0050eaa92","name":"BTH","decimals":"18"},{"addr":"0xfb12e3cca983b9f59d90912fd17f8d745a8b2953","name":"LUCK","decimals":0},{"addr":"0xfb18b6f4484bcbe7ae0f8a06e1e3985a71614a3e","name":"USD","decimals":0},{"addr":"0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61","name":"PLY","decimals":"18"},{"addr":"0xfb4752ad1b7153e1dbd2e6662651a11c7fc14083","name":"mPESA","decimals":"8"},{"addr":"0xfb6ee7ca12e4008001eaef2ae4a027350b36ed60","name":"TDR","decimals":6},{"addr":"0xfb7da9863e030495db8b4d067d665fc8433fff85","name":"PCC","decimals":"18"},{"addr":"0xfbb74c325eb521b5f866bb88606e56cbe93da785","name":"RKN","decimals":0},{"addr":"0xfbd0d1c77b501796a35d86cf91d65d9778eee695","name":"TWNKL","decimals":"3"},{"addr":"0xfc64e1a97009c38803bcc636885deed2830bfac3","name":"EDM","decimals":"18"},{"addr":"0xfc8bbb7d9833e956dbb66c4e7061427d11cc708e","name":"RESO079","decimals":"18"},{"addr":"0xfca47962d45adfdfd1ab2d972315db4ce7ccf094","name":"IXT","decimals":8},{"addr":"0xfcb48fdcc479b38068c06ee94249b1516adf09cb","name":"EURB","decimals":"5"},{"addr":"0xfd0df7b58bd53d1dd4835ecd69a703b4b26f7816","name":"MZI","decimals":"18"},{"addr":"0xfd219686033da14219142504c7a63ae8a4912134","name":"eBTCS","decimals":"18"},{"addr":"0xfd784da5c740c617aafb80399fa81b86e1da99a5","name":"ITS","decimals":"8"},{"addr":"0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23","name":"1WO","decimals":"8"},{"addr":"0xfdce358f74ccc2c947fa8929f68e11ec55ae8954","name":"BOOT020","decimals":"18"},{"addr":"0xfec0cf7fe078a500abf15f1284958f22049c2c7e","name":"ART","decimals":18},{"addr":"0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6","name":"H2O","decimals":"18"},{"addr":"0xff18dbc487b4c2e3222d115952babfda8ba52f5f","name":"LIFE","decimals":"18"},{"addr":"0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac","name":"BCAP","decimals":0},{"addr":"0xff59d80fa31b9f1aa2e65fead98cbb4933907485","name":"DEE","decimals":"18"},{"addr":"0xff603f43946a3a28df5e6a73172555d8c8b02386","name":"RNT","decimals":"18"},{"addr":"0xffabd2adde3f304d2876ceef9690df33d76d3c03","name":"ETPL","decimals":"18"},{"addr":"0xffc63b9146967a1ba33066fb057ee3722221acf0","name":"A","decimals":"18"},{"addr":"0xffe8196bc259e8dedc544d935786aa4709ec3e64","name":"HDG","decimals":"18"}];