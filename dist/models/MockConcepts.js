"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concept_1 = require("./Concept");
const State_1 = require("./State");
function MockConcepts() {
    return __awaiter(this, void 0, void 0, function* () {
        const conceptA = yield Concept_1.Concept.create({
            name: "Community Health Systems",
            address: "71 Bobwhite Trail",
            phone: "233-739-7453",
            email: "paffleck1@si.edu",
            categories: ["Health Care"],
            description: "Strain long flexor musc/fasc/tend l thm at wrs/hnd lv, subs",
            website: "https://rediff.com",
            picturePath: "http://dummyimage.com/210x155.bmp/ff4444/ffffff",
            state: State_1.State.Active
        });
        const conceptB = yield Concept_1.Concept.create({
            name: "EMC Insurance Group",
            address: "54447 5th Circle",
            phone: "478-145-4919",
            email: "psterryd@g.co",
            categories: ["Health Care", "Finance"],
            description: "Nodular sclerosis Hodgkin lymphoma, intrapelvic lymph nodes",
            website: "https://gmpg.org",
            picturePath: "http://dummyimage.com/100x126.png/dddddd/000000",
            state: State_1.State.Inactive,
        });
        const conceptC = yield Concept_1.Concept.create({
            name: "Aemetis",
            address: "06652 Jay Place",
            phone: "968-297-6693",
            email: "fsloatt@deviantart.com",
            categories: ["Basic Industries"],
            description: "Dietary selenium deficiency",
            website: "https://bing.com",
            picturePath: "http://dummyimage.com/122x180.png/cc0000/ffffff",
            state: State_1.State.Pending,
        });
        return [conceptA, conceptB, conceptC];
    });
}
exports.MockConcepts = MockConcepts;
//# sourceMappingURL=MockConcepts.js.map