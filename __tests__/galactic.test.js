import Galaxycalc from "../src/js/galactic";

describe("Galaxycalc object and its methods", () => {

    test("it should create a calculator object that contains the user current age", () => {
        newUser = new Galaxycalc(32);
        expect(newUser.earthAge).toEqual(32);
        expect(newUser.mercuryAge).toEqual(0);
        expect(newUser.venusAge).toEqual(0);
        expect(newUser.marsAge).toEqual(0);
        expect(newUser.jupiterAge).toEqual(0);
        expect(newUser.earthPassage).toEqual("");
        expect(newUser.mercuryPassage).toEqual("");
        expect(newUser.venusPassage).toEqual("");
        expect(newUser.marsPassage).toEqual("");
        expect(newUser.jupiterPassage).toEqual("");
    });

    test("it should create a calculator object with a rounded age", () => {
        newUser = new Galaxycalc(32.43);
        expect(newUser.earthAge).toEqual(32);
    });

    let newUser;

    beforeEach(() => {
        newUser = new Galaxycalc(32);
        newUser.setGalacticAges();
    });

    test("set-method should update the user's age in Mercury years", () => {
        expect(newUser.mercuryAge).toEqual(133.33);
    });

    test("set-method should update the user's age in Venus years", () => {
        expect(newUser.venusAge).toEqual(51.61);
    });

    test("set-method should update the user's age in Mars years", () => {
        expect(newUser.marsAge).toEqual(17.02);
    });

    test("set-method should update the user's age in Jupiter years", () => {
        expect(newUser.jupiterAge).toEqual(2.70);
    });

    test("calc-method should calculate the passage of earth years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.earthPassage).toEqual('10 years have passed since you were 22 on Earth.');
    });

    test("calc-method should return correct grammar if differnce in earth age is only 1 year", () => {
        newUser.calcGalacticPassage(31);
        expect(newUser.earthPassage).toEqual('1 year has passed since you were 31 on Earth.');
    });

    test("calc-method will round user's input up ", () => {
        newUser.calcGalacticPassage(22.343);
        expect(newUser.earthPassage).toEqual('10 years have passed since you were 22 on Earth.');
    });

    test("calc-method should calculate the passage of Mercury years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.mercuryPassage).toEqual('41.66 years have passed on Mercury since you were 22 on Earth.');
    });

    test("calc-method should calculate the passage of Venus years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.venusPassage).toEqual('16.13 years have passed on Venus since you were 22 on Earth.')
    });

    test("calc-method should calculate the passage of Mars years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.marsPassage).toEqual('5.32 years have passed on Mars since you were 22 on Earth.')
    });

    test("calc-method should calculate the passage of Jupiter years from input", () => {
        newUser.calcGalacticPassage(22);
        expect(newUser.jupiterPassage).toEqual("0.85 years have passed on Jupiter since you were 22 on Earth.")
    });
    test("calc-method should calculate the future passage of earth from input", () => {
        newUser.calcGalacticPassage(50);
        expect(newUser.earthPassage).toEqual("18 years will pass until you are 50 on Earth.");
    });
    test("calc-method should return correct grammar if future age difference is 1", () => {
        newUser.calcGalacticPassage(33);
        expect(newUser.earthPassage).toEqual("1 year will pass until you are 33 on Earth.");
    });

    test("calc-method should calculate the future passage of Mercury from input", () => {
        newUser.calcGalacticPassage(50);
        expect(newUser.mercuryPassage).toEqual("75.00 years will pass on Mercury until you are 50 on Earth.");
    });

    test("calc-method should calculate the future passage of Venus from input", () => {
        newUser.calcGalacticPassage(50);
        expect(newUser.venusPassage).toEqual("29.04 years will pass on Venus until you are 50 on Earth.");
    });

    test("calc-method should calculate the future passage of Mars from input", () => {
        newUser.calcGalacticPassage(50);
        expect(newUser.marsPassage).toEqual("9.58 years will pass on Mars until you are 50 on Earth.");
    });

    test("calc-method should calculate the future passage of Jupiter from input", () => {
        newUser.calcGalacticPassage(50);
        expect(newUser.jupiterPassage).toEqual("1.52 years will pass on Jupiter until you are 50 on Earth.");
    });

    test("calc-method should store a unique message if input age matches the user's current age", () => {
        newUser.calcGalacticPassage(32);
        expect(newUser.earthPassage).toEqual("The age you just entered matches how old you are already!");
        expect(newUser.mercuryPassage).toEqual("");
        expect(newUser.venusPassage).toEqual("");
        expect(newUser.marsPassage).toEqual("");
        expect(newUser.jupiterPassage).toEqual("");
    });

})