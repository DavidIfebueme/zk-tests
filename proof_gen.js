const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    { in: 10 }, 
    "build/hasher_js/hasher.wasm", 
    "circuit_0000.zkey");
  console.log(publicSignals);
  console.log(proof);