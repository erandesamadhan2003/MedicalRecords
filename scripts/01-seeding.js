const { ethers } = require("hardhat");
const config = require("../src/config.json");

const main = async () => {
    console.log(ethers);
    const { chainId } = await ethers.provider.getNetwork();
    console.log(`Using chainId ${chainId}`);
    const accounts = await ethers.getSigners();
    const medical = await ethers.getContractAt("MedicalRecord", config[chainId].MedicalRecord.address);
    console.log(`MedicalRecord smart contract is fetched at address ${medical.target}`);

    let transactionResponse;
    const user1 = accounts[0];
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Clark",
            29,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Khalifa",
            25,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Clark",
            29,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Khalifa",
            25,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Clark",
            29,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Khalifa",
            25,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Clark",
            29,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Michael Miller",
            34,
            "Male",
            "A negative",
            "Pollen allergy ",
            "Type 2 diabetes ",
            "Psychotherapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "David Wright",
            45,
            "Male",
            "B positive",
            "Insect sting allergy ",
            "Asthma ",
            "Surgery"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ethan Clark",
            23,
            "Male",
            "O negative",
            "Drug allergy",
            "Bronchitis ",
            "Radiation therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Ryan GupMillerta",
            34,
            "Male",
            "AB positive",
            "Latex allergy",
            "Pneumonia ",
            "Physical therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Olivia Robinson",
            77,
            "Female",
            "A negative",
            "Animal dander allergy ",
            "Acute appendicitis ",
            "Occupational therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Emma Gupta",
            23,
            "Female",
            "B positive",
            "Dust mite allergy ",
            "Osteoporosis ",
            "Speech therapy"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Mia Khalifa",
            25,
            "Female",
            "B negative",
            "Chemical allergy ",
            "Rheumatoid arthritis ",
            "Alternative therapies"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Sofia Wright",
            83,
            "Female",
            "O positive",
            "Sun allergy ",
            "Coronary artery disease ",
            "Behavioral interventions"
        );
    await transactionResponse.wait();
    console.log(`Record added with id ${await medical.getRecordId()}`);
    transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Victoria Robinson",
            93,
            "Female",
            "O negative",
            "Food allergy",
            "Congestive heart failure ",
            "Surgery"
        );

    await transactionResponse.wait();
    console.log(`Record added with the id ${await medical.getRecordId()}`);

    transactionResponse = await medical.connect(user1).deleteRecord(4);
    await transactionResponse.wait();
    console.log('Record Deleted');
    transactionResponse = await medical.connect(user1).deleteRecord(10);
    await transactionResponse.wait();
    console.log('Record Deleted');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });