const quotesLib = require("../../src/quotes");
const sinon = require("sinon");
const {expect} = require("chai");
const quote = quotesLib();

describe("quotes", () => {
  describe("steve", () => {
    it("should just call fromPerson with the query 'steve jobs'", () => {
      sinon.stub(quote, "fromPerson").returns(Promise.resolve("a"));

      return quote.steve().then( quoteText => {
        console.log(quoteText)
        expect(quoteText).to.be.a('string');
        quote.fromPerson.restore();
      })
    });

    it("should return a string with a length of at least 43 characters", () => {
      return quote.steve().then( quoteText => {
        console.log(quoteText)
        expect(quoteText).to.have.lengthOf.at.least(3);
      })
    });

    it.only("should just call fromPerson with the query 'steve jobs'", () => {
       const resultSpy = sinon.spy(quote, "fromPerson")
//protokolliert den Funktionsaufruf (mit welchen Argumenten, zu welchem Zeitpunkt und wie oft)
        return quote.steve().then(() => {
            console.log(resultSpy.callCount)
            console.log(resultSpy.getCall(0).args[0])
          expect(resultSpy.callCount).to.equal(1);
          expect(resultSpy.getCall(0).args).to.deep.equal(["steve jobs"]);
          quote.fromPerson.restore();
          console.log("Ende")
        })
    });

    it.only("should just call fromPerson with the query 'steve jobs'", () => {
       const resultMock = sinon.mock(quote);
       resultMock.expects("fromPerson").once().withArgs("steve jobs").returns(Promise.resolve());

        return quote.steve().then(() => {
            resultMock.verify();
            resultMock.restore();
        })
    })
  });
});
