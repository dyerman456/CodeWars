function dnaStrand(dna){
    let result = "";

    for (let i = 0; i < dna.length; i++) {
        if (dna.charAt(i) === "A") {result += "T"}
        if (dna.charAt(i) === "T") {result += "A"}
        if (dna.charAt(i) === "G") {result += "C"}
        if (dna.charAt(i) === "C") {result += "G"}
    }
    return result
}