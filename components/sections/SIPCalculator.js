"use client";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState(10435);
    const [annualRate, setAnnualRate] = useState(10);
    const [years, setYears] = useState(1);

    const [invested, setInvested] = useState(0);
    const [returns, setReturns] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateSIP();
    }, [monthlyInvestment, annualRate, years]);

    const calculateSIP = () => {
        const months = years * 12;
        const monthlyRate = annualRate / 12 / 100;

        let futureValue = 0;
        for (let i = 1; i <= months; i++) {
            futureValue +=
                monthlyInvestment * Math.pow(1 + monthlyRate, months - i + 1);
        }

        const investedAmount = monthlyInvestment * months;
        const totalReturns = futureValue - investedAmount;

        setInvested(investedAmount);
        setReturns(totalReturns);
        setTotal(futureValue);
    };

    const chartData = {
        labels: ["Invested", "Return"],
        datasets: [
            {
                data: [invested, returns],
                backgroundColor: ["#078586", "#7ED321"],
                borderWidth: 0
            }
        ]
    };

    return (
        <>
            {/* Slider Styling */}
            <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: #e0e0e0;
          border-radius: 4px;
          outline: none;
          margin: 8px 0;
        }

        /* Chrome & Safari */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #078586;
          cursor: pointer;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
          border: none;
          transition: transform 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        /* Firefox */
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #078586;
          cursor: pointer;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
          border: none;
          transition: transform 0.2s ease;
        }
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.15);
        }

        /* Remove border from number inputs */
        input[type="number"] {
          border: none;
          border-bottom: 2px solid #ccc;
          padding: 6px;
          font-size: 14px;
          outline: none;
          width: 100%;
        }
        input[type="number"]:focus {
          border-bottom: 2px solid #078586;
        }
      `}</style>

            <section className="about-section">
                <div className="pd_bottom_80" />
                <div className="container text-center">
                    <div className="title_all_box style_five dark_color">
                        <div className="title_sections five">
                            <div className="before_title">Investment</div>
                            <h2>Power Of SIP</h2>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        {/* Sliders & Inputs */}
                        <div className="col-xl-6 col-lg-12">
                            <div className="pd_bottom_20" />
                            <div className="form-group">
                                <label>Money Per month (₹)</label>
                                <input
                                    type="range"
                                    min="1000"
                                    className="mb-3"
                                    max="100000"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                />
                                <input
                                    type="number"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                />
                            </div>

                            <div className="form-group">
                                <label>Interest Rate (%)</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    className="mb-3"
                                    value={annualRate}
                                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                                />
                                <input
                                    type="number"
                                    value={annualRate}
                                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                                />
                            </div>

                            <div className="form-group">
                                <label>Year(s)</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    className="mb-3"
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                />
                                <input
                                    type="number"
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                />
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="col-xl-6 col-lg-12 text-center">
                            <div style={{ maxWidth: "300px", margin: "auto" }}>
                                <Doughnut data={chartData} />
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="row pd_top_40">
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <div
                                style={{
                                    background: "#078586",
                                    color: "#fff",
                                    padding: "15px",
                                    borderRadius: "8px"
                                }}
                            >
                                Invested <br /> ₹{invested.toLocaleString()}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <div
                                style={{
                                    background: "#7ED321",
                                    color: "#fff",
                                    padding: "15px",
                                    borderRadius: "8px"
                                }}
                            >
                                Returns <br /> ₹{returns.toLocaleString()}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <div
                                style={{
                                    background: "#078586",
                                    color: "#fff",
                                    padding: "15px",
                                    borderRadius: "8px"
                                }}
                            >
                                Total <br /> ₹{total.toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd_bottom_80" />
            </section>
        </>
    );
}
