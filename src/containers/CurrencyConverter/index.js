import React, { Component } from "react";
import { InputGroup, Button } from "@blueprintjs/core";
import Dropdown from "../../components/dropdown";
import ConversionResult from "../../components/conversionResult";
import { CURRENCIES, endpointPath } from "../../config";
import getData from "../../endpoint";
import "./styles.scss";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      from: "EUR",
      into: "USD",
      amount: "1",
      conversionRate: "",
      conversionResult: "",
      isLoading: false
    };

    this.state = this.defaultState;
  }

  convertCurrency = ({ from, into, amount }) => {
    this.setState({ isLoading: true });
    getData(endpointPath(from, into)).then(response => {
      const conversionRate = response.data[`${from}_${into}`];
      const conversionResult = conversionRate * amount;
      this.setState({
        /**
         * Limit the decimal value upto 2 digits.
         */
        conversionRate: conversionRate.toFixed(2),
        conversionResult: conversionResult.toFixed(2),
        isLoading: false
      });
    });
  };

  handleInput = event => {
    this.setState({ amount: event.target.value });
  };

  selectCurrency1 = event => {
    this.setState({ from: event.currentTarget.value });
  };

  selectCurrency2 = event => {
    this.setState({ into: event.currentTarget.value });
  };

  resetState = () => {
    this.setState(this.defaultState);
  };

  convertButton = () => {
    const { amount } = this.state;
    return (
      <Button
        rightIcon="arrow-right"
        disabled={amount === "0" || amount === ""}
        text="Convert"
        large
        intent="success"
        onClick={() => this.convertCurrency({ ...this.state })}
      />
    );
  };

  render() {
    const {
      from,
      into,
      amount,
      conversionRate,
      conversionResult,
      isLoading
    } = this.state;
    return (
      <div className="currencyConverterWrapper">
        <div className="dropdownWrapper">
          <Dropdown
            className="currency1"
            labelName="From"
            options={CURRENCIES}
            handleChange={this.selectCurrency1}
            value={from}
          ></Dropdown>
          <Dropdown
            labelName="Into"
            options={CURRENCIES}
            handleChange={this.selectCurrency2}
            value={into}
          ></Dropdown>
        </div>
        <InputGroup
          className="amountInput"
          large
          placeholder="Enter amount"
          value={amount}
          type="number"
          onChange={this.handleInput}
          rightElement={this.convertButton()}
          round
        />
        <div className="buttonWrapper">
          <Button
            rightIcon="reset"
            text="Reset"
            large
            onClick={this.resetState}
          />
        </div>
        <div className="conversionResultWrapper">
          <ConversionResult
            result={conversionResult}
            rate={conversionRate}
            isLoading={isLoading}
          ></ConversionResult>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
