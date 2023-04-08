// optional chaining

const obj={
    firstname:"prakhar",
    midName:"chandra",
    lastName:"gupta",
    educationData: {
        // Btech:"7.81 grade",
        HSC:"83.2 percentage",
        SSC:"86.7 percentage"
    }
};

console.log(obj?.firstname);
console.log(obj?.lastName);
console.log(obj?.educationData?.Btech);