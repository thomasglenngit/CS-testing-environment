// Extraversion versus Information
// Sensing versus Intuition
// Thinking versus Feeling
// Judgment versus Perception

const princexList = {
  Paris: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "F",
    jVsP: "P"
  },
  Pat: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "P"
  },
  Pau: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  },
  Pearl: {
    eVsI: "E",
    sVsI: "I",
    tVsF: "T",
    jVsP: "P"
  },
  Puck: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  },
  Pluto: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "T",
    jVsP: "P"
  },
  Parker: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  }
}


const choices = princexList.map( (prince) => {
  let princeProfile = [];
  princeProfile.push(Object.keys(prince));
  let princeValues = MBTIConverter();
  princeProfile.push(princeValues);
  return princeProfile;
})
 
function MBTIConverter({name}) {
  name = princexList.Object
  for (const prince of princexList) {
    if (princexList.eVsI === "E") {
      princeArray.push(prince, 1)
    }
    else {
      princeArray.push(0)
      return princeArray
    }
  }
}
