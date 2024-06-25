const vKey = JSON.parse(fs.readFileSync("verification_key.json"));
const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);

if (res === true) {
  console.log("Verification OK");
} else {
  console.log("Invalid proof");
}