'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Head from 'next/head'

export default function FinancialForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    husbandName: '',
    wifeName: '',
    husbandCompany: '',
    wifeCompany: '',
    husbandDesignation: '',
    wifeDesignation: '',
    husbandDob: '',
    wifeDob: '',
    husbandMobile: '',
    wifeMobile: '',
    husbandEmail: '',
    wifeEmail: '',
    address: '',
    retirementAge: '',
    lifeExpectancy: '',

    // Family Details
    children: [
      { name: '', currentStatus: '', healthHistory: '', financialDependence: '', dob: '' },
      { name: '', currentStatus: '', healthHistory: '', financialDependence: '', dob: '' }
    ],
    father: { name: '', currentStatus: '', healthHistory: '', financialDependence: '', dob: '' },
    mother: { name: '', currentStatus: '', healthHistory: '', financialDependence: '', dob: '' },

    // Children's Goals
    child1Goals: {
      name: '',
      graduation: { goalAge: '', currentValue: '', priority: '' },
      postGraduation: { goalAge: '', currentValue: '', priority: '' },
      marriage: { goalAge: '', currentValue: '', priority: '' },
      others: { goalAge: '', currentValue: '', priority: '' }
    },
    child2Goals: {
      name: '',
      graduation: { goalAge: '', currentValue: '', priority: '' },
      postGraduation: { goalAge: '', currentValue: '', priority: '' },
      marriage: { goalAge: '', currentValue: '', priority: '' },
      others: { goalAge: '', currentValue: '', priority: '' }
    },

    // Other Goals
    otherGoals: {
      internationalVacation: { selected: false, timeFrame: '', amount: '', priority: '' },
      carPurchase: { selected: false, timeFrame: '', amount: '', priority: '' },
      housePurchase: { selected: false, timeFrame: '', amount: '', priority: '' },
      homeRenovation: { selected: false, timeFrame: '', amount: '', priority: '' },
      holidayHome: { selected: false, timeFrame: '', amount: '', priority: '' },
      corpusForStartUp: { selected: false, timeFrame: '', amount: '', priority: '' },
      familyGifting: { selected: false, timeFrame: '', amount: '', priority: '' },
      charity: { selected: false, timeFrame: '', amount: '', priority: '' },
      childBirthExpenses: { selected: false, timeFrame: '', amount: '', priority: '' },
      bigPurchases: { selected: false, timeFrame: '', amount: '', priority: '' },
      estateForChildren: { selected: false, timeFrame: '', amount: '', priority: '' },
      partnershipBusiness: { selected: false, timeFrame: '', amount: '', priority: '' },
      others: { selected: false, timeFrame: '', amount: '', priority: '' }
    },

    // Income
    income: {
      husband: {
        salary: '',
        bonus: '',
        reimbursements: '',
        businessIncome: '',
        rentalIncome: '',
        investmentIncome: '',
        totalIncome: '',
        expectedIncrease: ''
      },
      wife: {
        salary: '',
        bonus: '',
        reimbursements: '',
        businessIncome: '',
        rentalIncome: '',
        investmentIncome: '',
        totalIncome: '',
        expectedIncrease: ''
      }
    },

    // Employment Benefits
    employmentBenefits: {
      husband: {
        epf: '',
        superannuation: '',
        gratuity: '',
        groupInsurance: '',
        workingSince: ''
      },
      wife: {
        epf: '',
        superannuation: '',
        gratuity: '',
        groupInsurance: '',
        workingSince: ''
      }
    },

    // Outflows
    outflows: {
      household: {
        foodGrocery: '',
        houseRent: '',
        conveyance: '',
        medicines: '',
        utilities: '',
        mobileInternet: '',
        totalHousehold: ''
      },
      lifestyle: {
        clothes: '',
        shopping: '',
        dining: '',
        personalCare: '',
        travel: '',
        totalLifestyle: ''
      },
      childrenExpenses: '',
      parentContribution: '',
      dependentExpenses: '',
      insurance: {
        lifeInsurance: '',
        mediclaim: '',
        motorInsurance: ''
      },
      savings: '',
      investments: {
        ppf: '',
        rds: '',
        insurancePremiums: '',
        mutualFunds: '',
        regularInvestments: ''
      },
      surplus: '',
      inflation: ''
    },

    // Assets
    assets: {
      property: {
        husband: '',
        wife: '',
        joint: ''
      },
      vehicle: {
        husband: '',
        wife: '',
        joint: ''
      },
      jewellery: {
        husband: '',
        wife: '',
        joint: ''
      },
      inheritance: {
        husband: '',
        wife: '',
        joint: ''
      },
      otherAssets: {
        husband: '',
        wife: '',
        joint: ''
      },
      liquidAssets: {
        savingsBank: '',
        receivables: '',
        totalLiquid: ''
      },
      debtAssets: {
        fixedDeposits: '',
        ppf: '',
        epf: '',
        nsc: '',
        debtMutualFunds: '',
        insurancePolicies: '',
        bonds: ''
      },
      equityAssets: {
        directEquity: '',
        equityMutualFunds: '',
        ulip: ''
      },
      investmentAssets: {
        gold: '',
        realEstate: ''
      }
    },

    // Liabilities
    liabilities: {
      homeLoan: {
        balance: '',
        term: '',
        rate: '',
        emi: ''
      },
      personalLoan: {
        balance: '',
        term: '',
        rate: '',
        emi: ''
      },
      vehicleLoan: {
        balance: '',
        term: '',
        rate: '',
        emi: ''
      }
    },

    // Risk Analysis
    riskAnalysis: {
      investmentPeriod: '',
      ageGroup: '',
      primeObjective: '',
      investmentOutcome: '',
      incomeDependence: '',
      savingsDescription: '',
      surplusParking: '',
      marketKnowledge: '',
      investmentExperience: '',
      comfortableScenario: '',
      reactionToLoss: '',
      portfolioChoice: '',
      declineImpact: '',
      employmentPreference: '',
      riskPerception: ''
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: {
            ...prev[section][field],
            selected: checked
          }
        }
      }));
    } else {
      const path = name.split('.');
      if (path.length === 1) {
        setFormData(prev => ({ ...prev, [name]: value }));
      } else if (path.length === 2) {
        setFormData(prev => ({
          ...prev,
          [path[0]]: {
            ...prev[path[0]],
            [path[1]]: value
          }
        }));
      } else if (path.length === 3) {
        setFormData(prev => ({
          ...prev,
          [path[0]]: {
            ...prev[path[0]],
            [path[1]]: {
              ...prev[path[0]][path[1]],
              [path[2]]: value
            }
          }
        }));
      }
    }
  };

  const handleChildChange = (index, field, value) => {
    const updatedChildren = [...formData.children];
    updatedChildren[index][field] = value;
    setFormData(prev => ({
      ...prev,
      children: updatedChildren
    }));
  };

  const handleChildGoalChange = (child, goal, field, value) => {
    setFormData(prev => ({
      ...prev,
      [`child${child}Goals`]: {
        ...prev[`child${child}Goals`],
        [goal]: {
          ...prev[`child${child}Goals`][goal],
          [field]: value
        }
      }
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Financial Calculator">
      <Head>
        <title>Financial Planning Questionnaire</title>
      </Head>
      <div className="financial-form-container">
        <h1 className="form-title">FINANCIAL PLANNING QUESTIONNAIRE</h1>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-steps">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((stepNum) => (
              <div
                key={stepNum}
                className={`progress-step ${step >= stepNum ? 'active' : ''}`}
              >
                {stepNum}
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(step / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="financial-form">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="form-step">
              <h2 className="step-title">PERSONAL DETAILS</h2>
              <div className="grid-container">
                <div className="form-section">
                  <h3 className="section-title">HUSBAND</h3>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="husbandName"
                        value={formData.husbandName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        name="husbandCompany"
                        value={formData.husbandCompany}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Designation</label>
                      <input
                        type="text"
                        name="husbandDesignation"
                        value={formData.husbandDesignation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        name="husbandDob"
                        value={formData.husbandDob}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile No</label>
                      <input
                        type="tel"
                        name="husbandMobile"
                        value={formData.husbandMobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        name="husbandEmail"
                        value={formData.husbandEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">WIFE</h3>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="wifeName"
                        value={formData.wifeName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        name="wifeCompany"
                        value={formData.wifeCompany}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Designation</label>
                      <input
                        type="text"
                        name="wifeDesignation"
                        value={formData.wifeDesignation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        name="wifeDob"
                        value={formData.wifeDob}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile No</label>
                      <input
                        type="tel"
                        name="wifeMobile"
                        value={formData.wifeMobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        name="wifeEmail"
                        value={formData.wifeEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="additional-details">
                <div className="form-group">
                  <label>Communication Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>
                <div className="grid-container">
                  <div className="form-group">
                    <label>Retirement Age</label>
                    <input
                      type="number"
                      name="retirementAge"
                      value={formData.retirementAge}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Life Expectancy</label>
                    <input
                      type="number"
                      name="lifeExpectancy"
                      value={formData.lifeExpectancy}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Family Details */}
          {step === 2 && (
            <div className="form-step">
              <h2 className="step-title">FAMILY DETAILS</h2>

              <h3 className="section-title">CHILDREN</h3>
              <div className="grid-container">
                {formData.children.map((child, index) => (
                  <div key={index} className="form-section">
                    <h4 className="subsection-title">CHILD {index + 1}</h4>
                    <div className="form-fields">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          value={child.name}
                          onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Current Status</label>
                        <input
                          type="text"
                          value={child.currentStatus}
                          onChange={(e) => handleChildChange(index, 'currentStatus', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Health History</label>
                        <input
                          type="text"
                          value={child.healthHistory}
                          onChange={(e) => handleChildChange(index, 'healthHistory', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Financial Dependence</label>
                        <input
                          type="text"
                          value={child.financialDependence}
                          onChange={(e) => handleChildChange(index, 'financialDependence', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                          type="date"
                          value={child.dob}
                          onChange={(e) => handleChildChange(index, 'dob', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="section-title">PARENTS</h3>
              <div className="grid-container">
                <div className="form-section">
                  <h4 className="subsection-title">FATHER</h4>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="father.name"
                        value={formData.father.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Current Status</label>
                      <input
                        type="text"
                        name="father.currentStatus"
                        value={formData.father.currentStatus}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Health History</label>
                      <input
                        type="text"
                        name="father.healthHistory"
                        value={formData.father.healthHistory}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Financial Dependence</label>
                      <input
                        type="text"
                        name="father.financialDependence"
                        value={formData.father.financialDependence}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        name="father.dob"
                        value={formData.father.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4 className="subsection-title">MOTHER</h4>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="mother.name"
                        value={formData.mother.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Current Status</label>
                      <input
                        type="text"
                        name="mother.currentStatus"
                        value={formData.mother.currentStatus}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Health History</label>
                      <input
                        type="text"
                        name="mother.healthHistory"
                        value={formData.mother.healthHistory}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Financial Dependence</label>
                      <input
                        type="text"
                        name="mother.financialDependence"
                        value={formData.mother.financialDependence}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        name="mother.dob"
                        value={formData.mother.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Children's Future Goals */}
          {step === 3 && (
            <div className="form-step">
              <h2 className="step-title">CHILDREN'S FUTURE GOALS</h2>

              <div className="goals-container">
                {/* Child 1 Goals */}
                <div className="form-section">
                  <h3 className="section-title">CHILD 1</h3>
                  <div className="form-group">
                    <label>Child Name</label>
                    <input
                      type="text"
                      name="child1Goals.name"
                      value={formData.child1Goals.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="goals-table-container">
                    <table className="goals-table">
                      <thead>
                        <tr>
                          <th>Goal</th>
                          <th>Graduation</th>
                          <th>Post Graduation</th>
                          <th>Marriage</th>
                          <th>Others</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Goal Age</td>
                          {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                            <td key={goal}>
                              <input
                                type="number"
                                name={`child1Goals.${goal}.goalAge`}
                                value={formData.child1Goals[goal].goalAge}
                                onChange={handleChange}
                              />
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td>Current Value</td>
                          {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                            <td key={goal}>
                              <input
                                type="text"
                                name={`child1Goals.${goal}.currentValue`}
                                value={formData.child1Goals[goal].currentValue}
                                onChange={handleChange}
                              />
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td>Priority (H/M/L)</td>
                          {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                            <td key={goal}>
                              <select
                                name={`child1Goals.${goal}.priority`}
                                value={formData.child1Goals[goal].priority}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                <option value="H">High</option>
                                <option value="M">Medium</option>
                                <option value="L">Low</option>
                              </select>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Child 2 Goals */}
                <div className="form-section">
                  <h3 className="section-title">CHILD 2</h3>
                  <div className="form-group">
                    <label>Child Name</label>
                    <input
                      type="text"
                      name="child2Goals.name"
                      value={formData.child2Goals.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="goals-table-container">
                    <table className="goals-table">
                      <thead>
                        <tr>
                          <th>Goal</th>
                          <th>Graduation</th>
                          <th>Post Graduation</th>
                          <th>Marriage</th>
                          <th>Others</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Goal Age</td>
                          {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                            <td key={goal}>
                              <input
                                type="number"
                                name={`child2Goals.${goal}.goalAge`}
                                value={formData.child2Goals[goal].goalAge}
                                onChange={handleChange}
                              />
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td>Current Value</td>
                          {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                            <td key={goal}>
                              <input
                                type="text"
                                name={`child2Goals.${goal}.currentValue`}
                                value={formData.child2Goals[goal].currentValue}
                                onChange={handleChange}
                              />
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td>Priority (H/M/L)</td>
                          {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                            <td key={goal}>
                              <select
                                name={`child2Goals.${goal}.priority`}
                                value={formData.child2Goals[goal].priority}
                                onChange={handleChange}
                              >
                                <option value="">Select</option>
                                <option value="H">High</option>
                                <option value="M">Medium</option>
                                <option value="L">Low</option>
                              </select>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Other Goals */}
          {step === 4 && (
            <div className="form-step">
              <h2 className="step-title">OTHER GOALS</h2>

              <div className="goals-table-container">
                <table className="goals-table">
                  <thead>
                    <tr>
                      <th>Goal</th>
                      <th>Yes/No</th>
                      <th>Time Frame</th>
                      <th>Amount</th>
                      <th>Priority (H/M/L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(formData.otherGoals).map(([goal, details]) => (
                      <tr key={goal}>
                        <td>{goal.replace(/([A-Z])/g, ' $1').trim()}</td>
                        <td>
                          <input
                            type="checkbox"
                            name={`otherGoals.${goal}.selected`}
                            checked={details.selected}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name={`otherGoals.${goal}.timeFrame`}
                            value={details.timeFrame}
                            onChange={handleChange}
                            disabled={!details.selected}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name={`otherGoals.${goal}.amount`}
                            value={details.amount}
                            onChange={handleChange}
                            disabled={!details.selected}
                          />
                        </td>
                        <td>
                          <select
                            name={`otherGoals.${goal}.priority`}
                            value={details.priority}
                            onChange={handleChange}
                            disabled={!details.selected}
                          >
                            <option value="">Select</option>
                            <option value="H">High</option>
                            <option value="M">Medium</option>
                            <option value="L">Low</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Income */}
          {step === 5 && (
            <div className="form-step">
              <h2 className="step-title">INCOME DETAILS</h2>

              <div className="grid-container">
                <div className="form-section">
                  <h3 className="section-title">HUSBAND</h3>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Salary Income (Take Home)</label>
                      <input
                        type="number"
                        name="income.husband.salary"
                        value={formData.income.husband.salary}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Performance Bonus (Net of TDS)</label>
                      <input
                        type="number"
                        name="income.husband.bonus"
                        value={formData.income.husband.bonus}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Re-imbursements</label>
                      <input
                        type="number"
                        name="income.husband.reimbursements"
                        value={formData.income.husband.reimbursements}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Business Income (Net Profit)</label>
                      <input
                        type="number"
                        name="income.husband.businessIncome"
                        value={formData.income.husband.businessIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Rental Income</label>
                      <input
                        type="number"
                        name="income.husband.rentalIncome"
                        value={formData.income.husband.rentalIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Investment Income</label>
                      <input
                        type="number"
                        name="income.husband.investmentIncome"
                        value={formData.income.husband.investmentIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Total Income</label>
                      <input
                        type="number"
                        name="income.husband.totalIncome"
                        value={formData.income.husband.totalIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Expected Increase in Income (%)</label>
                      <input
                        type="number"
                        name="income.husband.expectedIncrease"
                        value={formData.income.husband.expectedIncrease}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">WIFE</h3>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Salary Income (Take Home)</label>
                      <input
                        type="number"
                        name="income.wife.salary"
                        value={formData.income.wife.salary}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Performance Bonus (Net of TDS)</label>
                      <input
                        type="number"
                        name="income.wife.bonus"
                        value={formData.income.wife.bonus}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Re-imbursements</label>
                      <input
                        type="number"
                        name="income.wife.reimbursements"
                        value={formData.income.wife.reimbursements}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Business Income (Net Profit)</label>
                      <input
                        type="number"
                        name="income.wife.businessIncome"
                        value={formData.income.wife.businessIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Rental Income</label>
                      <input
                        type="number"
                        name="income.wife.rentalIncome"
                        value={formData.income.wife.rentalIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Investment Income</label>
                      <input
                        type="number"
                        name="income.wife.investmentIncome"
                        value={formData.income.wife.investmentIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Total Income</label>
                      <input
                        type="number"
                        name="income.wife.totalIncome"
                        value={formData.income.wife.totalIncome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Expected Increase in Income (%)</label>
                      <input
                        type="number"
                        name="income.wife.expectedIncrease"
                        value={formData.income.wife.expectedIncrease}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="section-title">EMPLOYMENT BENEFITS</h3>
              <div className="grid-container">
                <div className="form-section">
                  <h4 className="subsection-title">HUSBAND</h4>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>EPF</label>
                      <input
                        type="text"
                        name="employmentBenefits.husband.epf"
                        value={formData.employmentBenefits.husband.epf}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Superannuation</label>
                      <input
                        type="text"
                        name="employmentBenefits.husband.superannuation"
                        value={formData.employmentBenefits.husband.superannuation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Gratuity</label>
                      <input
                        type="text"
                        name="employmentBenefits.husband.gratuity"
                        value={formData.employmentBenefits.husband.gratuity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Group Insurance</label>
                      <input
                        type="text"
                        name="employmentBenefits.husband.groupInsurance"
                        value={formData.employmentBenefits.husband.groupInsurance}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Working since (in years)</label>
                      <input
                        type="number"
                        name="employmentBenefits.husband.workingSince"
                        value={formData.employmentBenefits.husband.workingSince}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4 className="subsection-title">WIFE</h4>
                  <div className="form-fields">
                    <div className="form-group">
                      <label>EPF</label>
                      <input
                        type="text"
                        name="employmentBenefits.wife.epf"
                        value={formData.employmentBenefits.wife.epf}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Superannuation</label>
                      <input
                        type="text"
                        name="employmentBenefits.wife.superannuation"
                        value={formData.employmentBenefits.wife.superannuation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Gratuity</label>
                      <input
                        type="text"
                        name="employmentBenefits.wife.gratuity"
                        value={formData.employmentBenefits.wife.gratuity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Group Insurance</label>
                      <input
                        type="text"
                        name="employmentBenefits.wife.groupInsurance"
                        value={formData.employmentBenefits.wife.groupInsurance}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Working since (in years)</label>
                      <input
                        type="number"
                        name="employmentBenefits.wife.workingSince"
                        value={formData.employmentBenefits.wife.workingSince}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Outflows */}
          {step === 6 && (
            <div className="form-step">
              <h2 className="step-title">OUTFLOWS</h2>

              <h3 className="section-title">HOUSEHOLD EXPENSES</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Food & Grocery</label>
                  <input
                    type="number"
                    name="outflows.household.foodGrocery"
                    value={formData.outflows.household.foodGrocery}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>House Rent/Maintenance/Repair</label>
                  <input
                    type="number"
                    name="outflows.household.houseRent"
                    value={formData.outflows.household.houseRent}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Conveyance, Fuel & Maintenance</label>
                  <input
                    type="number"
                    name="outflows.household.conveyance"
                    value={formData.outflows.household.conveyance}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Medicines/Doctor/Healthcare</label>
                  <input
                    type="number"
                    name="outflows.household.medicines"
                    value={formData.outflows.household.medicines}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Electricity/Water/Labour/AMCs</label>
                  <input
                    type="number"
                    name="outflows.household.utilities"
                    value={formData.outflows.household.utilities}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile/Telephone/Internet</label>
                  <input
                    type="number"
                    name="outflows.household.mobileInternet"
                    value={formData.outflows.household.mobileInternet}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Total Household Expenses</label>
                  <input
                    type="number"
                    name="outflows.household.totalHousehold"
                    value={formData.outflows.household.totalHousehold}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">LIFESTYLE EXPENSES</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Clothes & Accessories</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.clothes"
                    value={formData.outflows.lifestyle.clothes}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Shopping, Gifts, Whitegoods, Gadgets</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.shopping"
                    value={formData.outflows.lifestyle.shopping}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Dining/Movies/Sports</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.dining"
                    value={formData.outflows.lifestyle.dining}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Personal Care/Others</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.personalCare"
                    value={formData.outflows.lifestyle.personalCare}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Travel & Annual Vacations</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.travel"
                    value={formData.outflows.lifestyle.travel}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Total Lifestyle Expenses</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.totalLifestyle"
                    value={formData.outflows.lifestyle.totalLifestyle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">OTHER EXPENSES</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Children's Schooling/College Expenses</label>
                  <input
                    type="number"
                    name="outflows.childrenExpenses"
                    value={formData.outflows.childrenExpenses}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Contribution to Parents, Siblings etc</label>
                  <input
                    type="number"
                    name="outflows.parentContribution"
                    value={formData.outflows.parentContribution}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Dependent Expenses</label>
                  <input
                    type="number"
                    name="outflows.dependentExpenses"
                    value={formData.outflows.dependentExpenses}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">INSURANCE</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Life Insurance (Term)</label>
                  <input
                    type="number"
                    name="outflows.insurance.lifeInsurance"
                    value={formData.outflows.insurance.lifeInsurance}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mediclaim/PA/CI</label>
                  <input
                    type="number"
                    name="outflows.insurance.mediclaim"
                    value={formData.outflows.insurance.mediclaim}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Motor Insurance</label>
                  <input
                    type="number"
                    name="outflows.insurance.motorInsurance"
                    value={formData.outflows.insurance.motorInsurance}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">SAVINGS & INVESTMENTS</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Net Outflows</label>
                  <input
                    type="number"
                    name="outflows.savings"
                    value={formData.outflows.savings}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>PPF</label>
                  <input
                    type="number"
                    name="outflows.investments.ppf"
                    value={formData.outflows.investments.ppf}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Recurring Deposits (RDs)</label>
                  <input
                    type="number"
                    name="outflows.investments.rds"
                    value={formData.outflows.investments.rds}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Insurance Premiums (Investments)</label>
                  <input
                    type="number"
                    name="outflows.investments.insurancePremiums"
                    value={formData.outflows.investments.insurancePremiums}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mutual Fund SIPs</label>
                  <input
                    type="number"
                    name="outflows.investments.mutualFunds"
                    value={formData.outflows.investments.mutualFunds}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Regular Monthly Investments</label>
                  <input
                    type="number"
                    name="outflows.investments.regularInvestments"
                    value={formData.outflows.investments.regularInvestments}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Surplus (Savings-Investments)</label>
                  <input
                    type="number"
                    name="outflows.surplus"
                    value={formData.outflows.surplus}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Economic Inflation</label>
                  <input
                    type="number"
                    name="outflows.inflation"
                    value={formData.outflows.inflation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Assets */}
          {step === 7 && (
            <div className="form-step">
              <h2 className="step-title">ASSETS</h2>

              <h3 className="section-title">PERSONAL ASSETS</h3>
              <div className="assets-table-container">
                <table className="assets-table">
                  <thead>
                    <tr>
                      <th>Particular</th>
                      <th>Husband</th>
                      <th>Wife</th>
                      <th>Joint/Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Residential Property</td>
                      <td>
                        <input
                          type="text"
                          name="assets.property.husband"
                          value={formData.assets.property.husband}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.property.wife"
                          value={formData.assets.property.wife}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.property.joint"
                          value={formData.assets.property.joint}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Vehicle</td>
                      <td>
                        <input
                          type="text"
                          name="assets.vehicle.husband"
                          value={formData.assets.vehicle.husband}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.vehicle.wife"
                          value={formData.assets.vehicle.wife}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.vehicle.joint"
                          value={formData.assets.vehicle.joint}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Jewellery</td>
                      <td>
                        <input
                          type="text"
                          name="assets.jewellery.husband"
                          value={formData.assets.jewellery.husband}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.jewellery.wife"
                          value={formData.assets.jewellery.wife}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.jewellery.joint"
                          value={formData.assets.jewellery.joint}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Inheritance of Wealth Expected</td>
                      <td>
                        <input
                          type="text"
                          name="assets.inheritance.husband"
                          value={formData.assets.inheritance.husband}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.inheritance.wife"
                          value={formData.assets.inheritance.wife}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.inheritance.joint"
                          value={formData.assets.inheritance.joint}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Others</td>
                      <td>
                        <input
                          type="text"
                          name="assets.otherAssets.husband"
                          value={formData.assets.otherAssets.husband}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.otherAssets.wife"
                          value={formData.assets.otherAssets.wife}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="assets.otherAssets.joint"
                          value={formData.assets.otherAssets.joint}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="section-title">LIQUID ASSETS</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Savings Bank/Cash in Hand</label>
                  <input
                    type="text"
                    name="assets.liquidAssets.savingsBank"
                    value={formData.assets.liquidAssets.savingsBank}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Receivables from Friends & Family</label>
                  <input
                    type="text"
                    name="assets.liquidAssets.receivables"
                    value={formData.assets.liquidAssets.receivables}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Total Liquid Assets</label>
                  <input
                    type="text"
                    name="assets.liquidAssets.totalLiquid"
                    value={formData.assets.liquidAssets.totalLiquid}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">DEBT ASSETS</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Fixed Deposits</label>
                  <input
                    type="text"
                    name="assets.debtAssets.fixedDeposits"
                    value={formData.assets.debtAssets.fixedDeposits}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>PPF (Public Provident Fund)</label>
                  <input
                    type="text"
                    name="assets.debtAssets.ppf"
                    value={formData.assets.debtAssets.ppf}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>EPF / Superannuation / Gratuity</label>
                  <input
                    type="text"
                    name="assets.debtAssets.epf"
                    value={formData.assets.debtAssets.epf}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>NSC / POMIS / KVP / RDs etc</label>
                  <input
                    type="text"
                    name="assets.debtAssets.nsc"
                    value={formData.assets.debtAssets.nsc}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Debt Mutual Funds</label>
                  <input
                    type="text"
                    name="assets.debtAssets.debtMutualFunds"
                    value={formData.assets.debtAssets.debtMutualFunds}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Traditional Insurance Policies SV</label>
                  <input
                    type="text"
                    name="assets.debtAssets.insurancePolicies"
                    value={formData.assets.debtAssets.insurancePolicies}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Bonds/Debentures/CDs</label>
                  <input
                    type="text"
                    name="assets.debtAssets.bonds"
                    value={formData.assets.debtAssets.bonds}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">EQUITY ASSETS</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Direct Equity</label>
                  <input
                    type="text"
                    name="assets.equityAssets.directEquity"
                    value={formData.assets.equityAssets.directEquity}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Equity Mutual Funds</label>
                  <input
                    type="text"
                    name="assets.equityAssets.equityMutualFunds"
                    value={formData.assets.equityAssets.equityMutualFunds}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Unit-linked Insurance Policies SV</label>
                  <input
                    type="text"
                    name="assets.equityAssets.ulip"
                    value={formData.assets.equityAssets.ulip}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h3 className="section-title">INVESTMENT ASSETS</h3>
              <div className="grid-container">
                <div className="form-group">
                  <label>Gold / Silver (ETFs/Bars/Coins)</label>
                  <input
                    type="text"
                    name="assets.investmentAssets.gold"
                    value={formData.assets.investmentAssets.gold}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Real Estate Investments</label>
                  <input
                    type="text"
                    name="assets.investmentAssets.realEstate"
                    value={formData.assets.investmentAssets.realEstate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 8: Liabilities */}
          {step === 8 && (
            <div className="form-step">
              <h2 className="step-title">LIABILITIES</h2>

              <div className="liabilities-table-container">
                <table className="liabilities-table">
                  <thead>
                    <tr>
                      <th>Particular</th>
                      <th>Outstanding Balance</th>
                      <th>Balance Term</th>
                      <th>Interest Rate</th>
                      <th>EMI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Home Loan</td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.homeLoan.balance"
                          value={formData.liabilities.homeLoan.balance}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.homeLoan.term"
                          value={formData.liabilities.homeLoan.term}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.homeLoan.rate"
                          value={formData.liabilities.homeLoan.rate}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.homeLoan.emi"
                          value={formData.liabilities.homeLoan.emi}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Personal Loan</td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.personalLoan.balance"
                          value={formData.liabilities.personalLoan.balance}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.personalLoan.term"
                          value={formData.liabilities.personalLoan.term}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.personalLoan.rate"
                          value={formData.liabilities.personalLoan.rate}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.personalLoan.emi"
                          value={formData.liabilities.personalLoan.emi}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Vehicle Loan</td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.vehicleLoan.balance"
                          value={formData.liabilities.vehicleLoan.balance}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.vehicleLoan.term"
                          value={formData.liabilities.vehicleLoan.term}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.vehicleLoan.rate"
                          value={formData.liabilities.vehicleLoan.rate}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="liabilities.vehicleLoan.emi"
                          value={formData.liabilities.vehicleLoan.emi}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 9: Risk Analysis Part 1 */}
          {step === 9 && (
            <div className="form-step">
              <h2 className="step-title">RISK ANALYSIS</h2>

              <div className="risk-analysis-fields">
                <div className="form-group">
                  <label>
                    What is the time period for your investment plan?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentPeriod"
                        value="<1Yr"
                        checked={formData.riskAnalysis.investmentPeriod === '<1Yr'}
                        onChange={handleChange}
                      />
                      <span>Less than 1 Year</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentPeriod"
                        value="1–3 yrs"
                        checked={formData.riskAnalysis.investmentPeriod === '1–3 yrs'}
                        onChange={handleChange}
                      />
                      <span>1–3 years</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentPeriod"
                        value="3–5 Yrs"
                        checked={formData.riskAnalysis.investmentPeriod === '3–5 Yrs'}
                        onChange={handleChange}
                      />
                      <span>3–5 Years</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentPeriod"
                        value=">5 Yrs"
                        checked={formData.riskAnalysis.investmentPeriod === '>5 Yrs'}
                        onChange={handleChange}
                      />
                      <span>More than 5 Years</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>AGE</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.ageGroup"
                        value="above 60"
                        checked={formData.riskAnalysis.ageGroup === 'above 60'}
                        onChange={handleChange}
                      />
                      <span>Above 60</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.ageGroup"
                        value="50 to 60"
                        checked={formData.riskAnalysis.ageGroup === '50 to 60'}
                        onChange={handleChange}
                      />
                      <span>50 to 60</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.ageGroup"
                        value="40 to 50"
                        checked={formData.riskAnalysis.ageGroup === '40 to 50'}
                        onChange={handleChange}
                      />
                      <span>40 to 50</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.ageGroup"
                        value="below 40"
                        checked={formData.riskAnalysis.ageGroup === 'below 40'}
                        onChange={handleChange}
                      />
                      <span>Below 40</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Which best describes your prime objective towards investment?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.primeObjective"
                        value="Contingency plan to meet the day to day expenses"
                        checked={formData.riskAnalysis.primeObjective === 'Contingency plan to meet the day to day expenses'}
                        onChange={handleChange}
                      />
                      <span>Contingency plan to meet the day to day expenses</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.primeObjective"
                        value="Short Term Goals like buying house, car, etc."
                        checked={formData.riskAnalysis.primeObjective === 'Short Term Goals like buying house, car, etc.'}
                        onChange={handleChange}
                      />
                      <span>Short Term Goals like buying house, car, etc.</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.primeObjective"
                        value="Long Term goals like retirement planning and Legacy"
                        checked={formData.riskAnalysis.primeObjective === 'Long Term goals like retirement planning and Legacy'}
                        onChange={handleChange}
                      />
                      <span>Long Term goals like retirement planning and Legacy</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.primeObjective"
                        value="Deployment of Surplus fund"
                        checked={formData.riskAnalysis.primeObjective === 'Deployment of Surplus fund'}
                        onChange={handleChange}
                      />
                      <span>Deployment of Surplus fund</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    What is the most important outcome for you from an investment?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentOutcome"
                        value="Preservation of capital"
                        checked={formData.riskAnalysis.investmentOutcome === 'Preservation of capital'}
                        onChange={handleChange}
                      />
                      <span>Preservation of capital</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentOutcome"
                        value="Generate regular income to meet expenses"
                        checked={formData.riskAnalysis.investmentOutcome === 'Generate regular income to meet expenses'}
                        onChange={handleChange}
                      />
                      <span>Generate regular income to meet expenses</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentOutcome"
                        value="Generate regular income with Moderate Growth"
                        checked={formData.riskAnalysis.investmentOutcome === 'Generate regular income with Moderate Growth'}
                        onChange={handleChange}
                      />
                      <span>Generate regular income with Moderate Growth</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentOutcome"
                        value="Long Term Growth"
                        checked={formData.riskAnalysis.investmentOutcome === 'Long Term Growth'}
                        onChange={handleChange}
                      />
                      <span>Long Term Growth</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    How much do you depend on your income from investments for meeting your regular expenses?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.incomeDependence"
                        value="> 50% of expenses"
                        checked={formData.riskAnalysis.incomeDependence === '> 50% of expenses'}
                        onChange={handleChange}
                      />
                      <span>More than 50% of expenses</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.incomeDependence"
                        value="25–50% of expenses"
                        checked={formData.riskAnalysis.incomeDependence === '25–50% of expenses'}
                        onChange={handleChange}
                      />
                      <span>25–50% of expenses</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.incomeDependence"
                        value="0–25% of expenses"
                        checked={formData.riskAnalysis.incomeDependence === '0–25% of expenses'}
                        onChange={handleChange}
                      />
                      <span>0–25% of expenses</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="next-button"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 10: Risk Analysis Part 2 */}
          {step === 10 && (
            <div className="form-step">
              <h2 className="step-title">RISK ANALYSIS (CONTINUED)</h2>

              <div className="risk-analysis-fields">
                <div className="form-group">
                  <label>
                    How would you describe your overall Savings?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.savingsDescription"
                        value="My PF and other employment benefits are my only source of savings."
                        checked={formData.riskAnalysis.savingsDescription === 'My PF and other employment benefits are my only source of savings.'}
                        onChange={handleChange}
                      />
                      <span>My PF and other employment benefits are my only source of savings.</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.savingsDescription"
                        value="I save more than 30% of my take-home salary every month."
                        checked={formData.riskAnalysis.savingsDescription === 'I save more than 30% of my take-home salary every month.'}
                        onChange={handleChange}
                      />
                      <span>I save more than 30% of my take-home salary every month.</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.savingsDescription"
                        value="My income from my wealth more than adequately provides for my cost of living"
                        checked={formData.riskAnalysis.savingsDescription === 'My income from my wealth more than adequately provides for my cost of living'}
                        onChange={handleChange}
                      />
                      <span>My income from my wealth more than adequately provides for my cost of living</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    The maximum surplus in your current portfolio is parked into
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.surplusParking"
                        value="Savings and fixed deposits"
                        checked={formData.riskAnalysis.surplusParking === 'Savings and fixed deposits'}
                        onChange={handleChange}
                      />
                      <span>Savings and fixed deposits</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.surplusParking"
                        value="Bonds & Gold"
                        checked={formData.riskAnalysis.surplusParking === 'Bonds & Gold'}
                        onChange={handleChange}
                      />
                      <span>Bonds & Gold</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.surplusParking"
                        value="Real Estate"
                        checked={formData.riskAnalysis.surplusParking === 'Real Estate'}
                        onChange={handleChange}
                      />
                      <span>Real Estate</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.surplusParking"
                        value="Mutual Funds & Equities"
                        checked={formData.riskAnalysis.surplusParking === 'Mutual Funds & Equities'}
                        onChange={handleChange}
                      />
                      <span>Mutual Funds & Equities</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    What is your knowledge on the capital markets?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.marketKnowledge"
                        value="Nil"
                        checked={formData.riskAnalysis.marketKnowledge === 'Nil'}
                        onChange={handleChange}
                      />
                      <span>Nil</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.marketKnowledge"
                        value="Low"
                        checked={formData.riskAnalysis.marketKnowledge === 'Low'}
                        onChange={handleChange}
                      />
                      <span>Low</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.marketKnowledge"
                        value="Moderate"
                        checked={formData.riskAnalysis.marketKnowledge === 'Moderate'}
                        onChange={handleChange}
                      />
                      <span>Moderate</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.marketKnowledge"
                        value="High"
                        checked={formData.riskAnalysis.marketKnowledge === 'High'}
                        onChange={handleChange}
                      />
                      <span>High</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    How was your investment experience in Equities & Mutual funds?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentExperience"
                        value="NA"
                        checked={formData.riskAnalysis.investmentExperience === 'NA'}
                        onChange={handleChange}
                      />
                      <span>NA</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentExperience"
                        value="Bad"
                        checked={formData.riskAnalysis.investmentExperience === 'Bad'}
                        onChange={handleChange}
                      />
                      <span>Bad</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentExperience"
                        value="Average"
                        checked={formData.riskAnalysis.investmentExperience === 'Average'}
                        onChange={handleChange}
                      />
                      <span>Average</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.investmentExperience"
                        value="Good"
                        checked={formData.riskAnalysis.investmentExperience === 'Good'}
                        onChange={handleChange}
                      />
                      <span>Good</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Which is the comfortable investment scenario for you
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.comfortableScenario"
                        value="Little chance of Short Term loss, some opportunity for Long Term Gain"
                        checked={formData.riskAnalysis.comfortableScenario === 'Little chance of Short Term loss, some opportunity for Long Term Gain'}
                        onChange={handleChange}
                      />
                      <span>Little chance of Short Term loss, some opportunity for Long Term Gain</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.comfortableScenario"
                        value="Moderate chance of Short Term Loss, moderate opportunity for Long Term Gain"
                        checked={formData.riskAnalysis.comfortableScenario === 'Moderate chance of Short Term Loss, moderate opportunity for Long Term Gain'}
                        onChange={handleChange}
                      />
                      <span>Moderate chance of Short Term Loss, moderate opportunity for Long Term Gain</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.comfortableScenario"
                        value="High Chance of Short Term Loss , high chance of Long Term Gain"
                        checked={formData.riskAnalysis.comfortableScenario === 'High Chance of Short Term Loss , high chance of Long Term Gain'}
                        onChange={handleChange}
                      />
                      <span>High Chance of Short Term Loss, high chance of Long Term Gain</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.comfortableScenario"
                        value="Very high Chance of Short Term Loss, very high chance of Long Term Gain"
                        checked={formData.riskAnalysis.comfortableScenario === 'Very high Chance of Short Term Loss, very high chance of Long Term Gain'}
                        onChange={handleChange}
                      />
                      <span>Very high Chance of Short Term Loss, very high chance of Long Term Gain</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    If over a three-month period, an investment you owned lost 20% and the overall stock market lost 20%, what would you be most likely to do?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.reactionToLoss"
                        value="Sell all or most of the investment"
                        checked={formData.riskAnalysis.reactionToLoss === 'Sell all or most of the investment'}
                        onChange={handleChange}
                      />
                      <span>Sell all or most of the investment</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.reactionToLoss"
                        value="Sell some of the investment"
                        checked={formData.riskAnalysis.reactionToLoss === 'Sell some of the investment'}
                        onChange={handleChange}
                      />
                      <span>Sell some of the investment</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.reactionToLoss"
                        value="Stay fully invested"
                        checked={formData.riskAnalysis.reactionToLoss === 'Stay fully invested'}
                        onChange={handleChange}
                      />
                      <span>Stay fully invested</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.reactionToLoss"
                        value="Buy more of the investment"
                        checked={formData.riskAnalysis.reactionToLoss === 'Buy more of the investment'}
                        onChange={handleChange}
                      />
                      <span>Buy more of the investment</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    If you were to allocate 100% of your investment into only one of the four possible portfolios, which would you choose?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.portfolioChoice"
                        value="Portfolio – A Best: 8% Average: 6% Worst: 4%"
                        checked={formData.riskAnalysis.portfolioChoice === 'Portfolio – A Best: 8% Average: 6% Worst: 4%'}
                        onChange={handleChange}
                      />
                      <span>Portfolio – A Best: 8% Average: 6% Worst: 4%</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.portfolioChoice"
                        value="Portfolio – B Best: 15% Average: 8% Worst: 2%"
                        checked={formData.riskAnalysis.portfolioChoice === 'Portfolio – B Best: 15% Average: 8% Worst: 2%'}
                        onChange={handleChange}
                      />
                      <span>Portfolio – B Best: 15% Average: 8% Worst: 2%</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.portfolioChoice"
                        value="Portfolio – C Best: 30% Average: 12% Worst: -15%"
                        checked={formData.riskAnalysis.portfolioChoice === 'Portfolio – C Best: 30% Average: 12% Worst: -15%'}
                        onChange={handleChange}
                      />
                      <span>Portfolio – C Best: 30% Average: 12% Worst: -15%</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    How would a decline in the value of my investments affect you
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.declineImpact"
                        value="I am NOT willing to accept declines in the value of my investment as capital preservation is my primary objective"
                        checked={formData.riskAnalysis.declineImpact === 'I am NOT willing to accept declines in the value of my investment as capital preservation is my primary objective'}
                        onChange={handleChange}
                      />
                      <span>I am NOT willing to accept declines in the value of my investment as capital preservation is my primary objective</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.declineImpact"
                        value="I am willing to accept some declines (10–15%) but I am not comfortable with moderate to extreme drops in the value of my investments"
                        checked={formData.riskAnalysis.declineImpact === 'I am willing to accept some declines (10–15%) but I am not comfortable with moderate to extreme drops in the value of my investments'}
                        onChange={handleChange}
                      />
                      <span>I am willing to accept some declines (10–15%) but I am not comfortable with moderate to extreme drops in the value of my investments</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.declineImpact"
                        value="I am willing to accept moderate losses (16–33%) but I am not comfortable with extreme drops in the value of my investments"
                        checked={formData.riskAnalysis.declineImpact === 'I am willing to accept moderate losses (16–33%) but I am not comfortable with extreme drops in the value of my investments'}
                        onChange={handleChange}
                      />
                      <span>I am willing to accept moderate losses (16–33%) but I am not comfortable with extreme drops in the value of my investments</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.declineImpact"
                        value="I am prepared to take losses (More than 34%) and large fluctuations in the value of my investments in order to maximize my long term returns."
                        checked={formData.riskAnalysis.declineImpact === 'I am prepared to take losses (More than 34%) and large fluctuations in the value of my investments in order to maximize my long term returns.'}
                        onChange={handleChange}
                      />
                      <span>I am prepared to take losses (More than 34%) and large fluctuations in the value of my investments in order to maximize my long term returns.</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    If you had to choose between being a salaried employee and running your own business, which one would you prefer?
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.employmentPreference"
                        value="Being a salaried employee"
                        checked={formData.riskAnalysis.employmentPreference === 'Being a salaried employee'}
                        onChange={handleChange}
                      />
                      <span>Being a salaried employee</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.employmentPreference"
                        value="Doing a salaried job and may be run a part-time business"
                        checked={formData.riskAnalysis.employmentPreference === 'Doing a salaried job and may be run a part-time business'}
                        onChange={handleChange}
                      />
                      <span>Doing a salaried job and may be run a part-time business</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.employmentPreference"
                        value="Running a partnership business"
                        checked={formData.riskAnalysis.employmentPreference === 'Running a partnership business'}
                        onChange={handleChange}
                      />
                      <span>Running a partnership business</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.employmentPreference"
                        value="Running my own business"
                        checked={formData.riskAnalysis.employmentPreference === 'Running my own business'}
                        onChange={handleChange}
                      />
                      <span>Running my own business</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    When you think of the word "risk" in a financial context, which of the following words comes to mind first
                  </label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.riskPerception"
                        value="Danger"
                        checked={formData.riskAnalysis.riskPerception === 'Danger'}
                        onChange={handleChange}
                      />
                      <span>Danger</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.riskPerception"
                        value="Uncertainty"
                        checked={formData.riskAnalysis.riskPerception === 'Uncertainty'}
                        onChange={handleChange}
                      />
                      <span>Uncertainty</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.riskPerception"
                        value="Opportunity"
                        checked={formData.riskAnalysis.riskPerception === 'Opportunity'}
                        onChange={handleChange}
                      />
                      <span>Opportunity</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="riskAnalysis.riskPerception"
                        value="Thrill"
                        checked={formData.riskAnalysis.riskPerception === 'Thrill'}
                        onChange={handleChange}
                      />
                      <span>Thrill</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={prevStep}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="submit-button"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      <style jsx global>{`
      /* FinancialForm.css */

.financial-form-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 2rem;
}

/* Progress Bar Styles */
.progress-container {
  margin-bottom: 2rem;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.progress-step {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e8f0;
  color: #4a5568;
  font-weight: bold;
}

.progress-step.active {
  background-color: #4299e1;
  color: white;
}

.progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: #e2e8f0;
  border-radius: 0.25rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #4299e1;
  transition: width 0.3s ease;
}

/* Form Step Styles */
.form-step {
  padding: 1rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1rem;
}

.subsection-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.75rem;
}

/* Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-section {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.25rem;
  background-color: #f8fafc;
}

.form-fields {
  display: grid;
  gap: 1rem;
}

/* Form Group Styles */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #4a5568;
  background-color: #fff;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

/* Table Styles */
.goals-table-container,
.assets-table-container,
.liabilities-table-container {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.goals-table,
.assets-table,
.liabilities-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.goals-table th,
.goals-table td,
.assets-table th,
.assets-table td,
.liabilities-table th,
.liabilities-table td {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.goals-table th,
.assets-table th,
.liabilities-table th {
  background-color: #f7fafc;
  font-weight: 600;
  color: #4a5568;
}

.goals-table input,
.assets-table input,
.liabilities-table input,
.goals-table select,
.assets-table select,
.liabilities-table select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
}

/* Radio Group Styles */
.radio-group {
  display: grid;
  gap: 0.75rem;
}

.radio-option {
  display: flex;
  align-items: center;
}

.radio-option input {
  margin-right: 0.75rem;
}

.radio-option span {
  font-size: 0.875rem;
  color: #4a5568;
}

/* Navigation Buttons */
.form-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.prev-button,
.next-button,
.submit-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.prev-button {
  background-color: #e2e8f0;
  color: #4a5568;
  border: none;
}

.prev-button:hover {
  background-color: #cbd5e0;
}

.next-button {
  background-color: #4299e1;
  color: white;
  border: none;
}

.next-button:hover {
  background-color: #3182ce;
}

.submit-button {
  background-color: #48bb78;
  color: white;
  border: none;
}

.submit-button:hover {
  background-color: #38a169;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .financial-form-container {
    padding: 1rem;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .step-title {
    font-size: 1.3rem;
  }
  
  .progress-step {
    width: 2rem;
    height: 2rem;
    font-size: 0.875rem;
  }
  
  .form-section {
    padding: 1rem;
  }
}
      `}</style>

    </Layout>
  );
}