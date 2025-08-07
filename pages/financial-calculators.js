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
      // Handle checkbox fields (mainly in Other Goals)
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
      // Handle nested fields
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
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
  };

  return (
                <Layout headerStyle={7} footerStyle={1}>
    
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">FINANCIAL PLANNING QUESTIONNAIRE</h1>
      
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((stepNum) => (
            <div 
              key={stepNum} 
              className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${step >= stepNum ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {stepNum}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${(step / 10) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">PERSONAL DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-3">HUSBAND</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="husbandName"
                      value={formData.husbandName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Company Name</label>
                    <input
                      type="text"
                      name="husbandCompany"
                      value={formData.husbandCompany}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Designation</label>
                    <input
                      type="text"
                      name="husbandDesignation"
                      value={formData.husbandDesignation}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      name="husbandDob"
                      value={formData.husbandDob}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Mobile No</label>
                    <input
                      type="tel"
                      name="husbandMobile"
                      value={formData.husbandMobile}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email ID</label>
                    <input
                      type="email"
                      name="husbandEmail"
                      value={formData.husbandEmail}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium mb-3">WIFE</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="wifeName"
                      value={formData.wifeName}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Company Name</label>
                    <input
                      type="text"
                      name="wifeCompany"
                      value={formData.wifeCompany}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Designation</label>
                    <input
                      type="text"
                      name="wifeDesignation"
                      value={formData.wifeDesignation}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      name="wifeDob"
                      value={formData.wifeDob}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Mobile No</label>
                    <input
                      type="tel"
                      name="wifeMobile"
                      value={formData.wifeMobile}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email ID</label>
                    <input
                      type="email"
                      name="wifeEmail"
                      value={formData.wifeEmail}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <label className="block text-sm font-medium">Communication Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium">Retirement Age</label>
                  <input
                    type="number"
                    name="retirementAge"
                    value={formData.retirementAge}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Life Expectancy</label>
                  <input
                    type="number"
                    name="lifeExpectancy"
                    value={formData.lifeExpectancy}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Family Details */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">FAMILY DETAILS</h2>
            
            <h3 className="font-medium mb-3">CHILDREN</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {formData.children.map((child, index) => (
                <div key={index} className="border p-4 rounded">
                  <h4 className="font-medium mb-3">CHILD {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium">Name</label>
                      <input
                        type="text"
                        value={child.name}
                        onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Current Status</label>
                      <input
                        type="text"
                        value={child.currentStatus}
                        onChange={(e) => handleChildChange(index, 'currentStatus', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Health History</label>
                      <input
                        type="text"
                        value={child.healthHistory}
                        onChange={(e) => handleChildChange(index, 'healthHistory', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Financial Dependence</label>
                      <input
                        type="text"
                        value={child.financialDependence}
                        onChange={(e) => handleChildChange(index, 'financialDependence', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Date of Birth</label>
                      <input
                        type="date"
                        value={child.dob}
                        onChange={(e) => handleChildChange(index, 'dob', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-medium mb-3">PARENTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 rounded">
                <h4 className="font-medium mb-3">FATHER</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="father.name"
                      value={formData.father.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Current Status</label>
                    <input
                      type="text"
                      name="father.currentStatus"
                      value={formData.father.currentStatus}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Health History</label>
                    <input
                      type="text"
                      name="father.healthHistory"
                      value={formData.father.healthHistory}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Financial Dependence</label>
                    <input
                      type="text"
                      name="father.financialDependence"
                      value={formData.father.financialDependence}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      name="father.dob"
                      value={formData.father.dob}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="border p-4 rounded">
                <h4 className="font-medium mb-3">MOTHER</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="mother.name"
                      value={formData.mother.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Current Status</label>
                    <input
                      type="text"
                      name="mother.currentStatus"
                      value={formData.mother.currentStatus}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Health History</label>
                    <input
                      type="text"
                      name="mother.healthHistory"
                      value={formData.mother.healthHistory}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Financial Dependence</label>
                    <input
                      type="text"
                      name="mother.financialDependence"
                      value={formData.mother.financialDependence}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      name="mother.dob"
                      value={formData.mother.dob}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Children's Future Goals */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">CHILDREN'S FUTURE GOALS</h2>
            
            <div className="space-y-8">
              {/* Child 1 Goals */}
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-3">CHILD 1</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Child Name</label>
                  <input
                    type="text"
                    name="child1Goals.name"
                    value={formData.child1Goals.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Goal</th>
                        <th className="border p-2">Graduation</th>
                        <th className="border p-2">Post Graduation</th>
                        <th className="border p-2">Marriage</th>
                        <th className="border p-2">Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Goal Age</td>
                        {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                          <td key={goal} className="border p-2">
                            <input
                              type="number"
                              name={`child1Goals.${goal}.goalAge`}
                              value={formData.child1Goals[goal].goalAge}
                              onChange={handleChange}
                              className="w-full p-1 border rounded"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border p-2">Current Value</td>
                        {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                          <td key={goal} className="border p-2">
                            <input
                              type="text"
                              name={`child1Goals.${goal}.currentValue`}
                              value={formData.child1Goals[goal].currentValue}
                              onChange={handleChange}
                              className="w-full p-1 border rounded"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border p-2">Priority (H/M/L)</td>
                        {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                          <td key={goal} className="border p-2">
                            <select
                              name={`child1Goals.${goal}.priority`}
                              value={formData.child1Goals[goal].priority}
                              onChange={handleChange}
                              className="w-full p-1 border rounded"
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
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-3">CHILD 2</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Child Name</label>
                  <input
                    type="text"
                    name="child2Goals.name"
                    value={formData.child2Goals.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Goal</th>
                        <th className="border p-2">Graduation</th>
                        <th className="border p-2">Post Graduation</th>
                        <th className="border p-2">Marriage</th>
                        <th className="border p-2">Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Goal Age</td>
                        {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                          <td key={goal} className="border p-2">
                            <input
                              type="number"
                              name={`child2Goals.${goal}.goalAge`}
                              value={formData.child2Goals[goal].goalAge}
                              onChange={handleChange}
                              className="w-full p-1 border rounded"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border p-2">Current Value</td>
                        {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                          <td key={goal} className="border p-2">
                            <input
                              type="text"
                              name={`child2Goals.${goal}.currentValue`}
                              value={formData.child2Goals[goal].currentValue}
                              onChange={handleChange}
                              className="w-full p-1 border rounded"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border p-2">Priority (H/M/L)</td>
                        {['graduation', 'postGraduation', 'marriage', 'others'].map((goal) => (
                          <td key={goal} className="border p-2">
                            <select
                              name={`child2Goals.${goal}.priority`}
                              value={formData.child2Goals[goal].priority}
                              onChange={handleChange}
                              className="w-full p-1 border rounded"
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

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Other Goals */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">OTHER GOALS</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Goal</th>
                    <th className="border p-2">Yes/No</th>
                    <th className="border p-2">Time Frame</th>
                    <th className="border p-2">Amount</th>
                    <th className="border p-2">Priority (H/M/L)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(formData.otherGoals).map(([goal, details]) => (
                    <tr key={goal}>
                      <td className="border p-2 capitalize">{goal.replace(/([A-Z])/g, ' $1').trim()}</td>
                      <td className="border p-2">
                        <input
                          type="checkbox"
                          name={`otherGoals.${goal}.selected`}
                          checked={details.selected}
                          onChange={handleChange}
                          className="h-4 w-4"
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          name={`otherGoals.${goal}.timeFrame`}
                          value={details.timeFrame}
                          onChange={handleChange}
                          className="w-full p-1 border rounded"
                          disabled={!details.selected}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          name={`otherGoals.${goal}.amount`}
                          value={details.amount}
                          onChange={handleChange}
                          className="w-full p-1 border rounded"
                          disabled={!details.selected}
                        />
                      </td>
                      <td className="border p-2">
                        <select
                          name={`otherGoals.${goal}.priority`}
                          value={details.priority}
                          onChange={handleChange}
                          className="w-full p-1 border rounded"
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

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Income */}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">INCOME DETAILS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border p-4 rounded">
                <h3 className="font-medium mb-3">HUSBAND</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Salary Income (Take Home)</label>
                    <input
                      type="number"
                      name="income.husband.salary"
                      value={formData.income.husband.salary}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Performance Bonus (Net of TDS)</label>
                    <input
                      type="number"
                      name="income.husband.bonus"
                      value={formData.income.husband.bonus}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Re-imbursements</label>
                    <input
                      type="number"
                      name="income.husband.reimbursements"
                      value={formData.income.husband.reimbursements}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Business Income (Net Profit)</label>
                    <input
                      type="number"
                      name="income.husband.businessIncome"
                      value={formData.income.husband.businessIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Rental Income</label>
                    <input
                      type="number"
                      name="income.husband.rentalIncome"
                      value={formData.income.husband.rentalIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Investment Income</label>
                    <input
                      type="number"
                      name="income.husband.investmentIncome"
                      value={formData.income.husband.investmentIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Total Income</label>
                    <input
                      type="number"
                      name="income.husband.totalIncome"
                      value={formData.income.husband.totalIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Expected Increase in Income (%)</label>
                    <input
                      type="number"
                      name="income.husband.expectedIncrease"
                      value={formData.income.husband.expectedIncrease}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium mb-3">WIFE</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">Salary Income (Take Home)</label>
                    <input
                      type="number"
                      name="income.wife.salary"
                      value={formData.income.wife.salary}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Performance Bonus (Net of TDS)</label>
                    <input
                      type="number"
                      name="income.wife.bonus"
                      value={formData.income.wife.bonus}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Re-imbursements</label>
                    <input
                      type="number"
                      name="income.wife.reimbursements"
                      value={formData.income.wife.reimbursements}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Business Income (Net Profit)</label>
                    <input
                      type="number"
                      name="income.wife.businessIncome"
                      value={formData.income.wife.businessIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Rental Income</label>
                    <input
                      type="number"
                      name="income.wife.rentalIncome"
                      value={formData.income.wife.rentalIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Investment Income</label>
                    <input
                      type="number"
                      name="income.wife.investmentIncome"
                      value={formData.income.wife.investmentIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Total Income</label>
                    <input
                      type="number"
                      name="income.wife.totalIncome"
                      value={formData.income.wife.totalIncome}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Expected Increase in Income (%)</label>
                    <input
                      type="number"
                      name="income.wife.expectedIncrease"
                      value={formData.income.wife.expectedIncrease}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-3">EMPLOYMENT BENEFITS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 rounded">
                <h4 className="font-medium mb-3">HUSBAND</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">EPF</label>
                    <input
                      type="text"
                      name="employmentBenefits.husband.epf"
                      value={formData.employmentBenefits.husband.epf}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Superannuation</label>
                    <input
                      type="text"
                      name="employmentBenefits.husband.superannuation"
                      value={formData.employmentBenefits.husband.superannuation}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Gratuity</label>
                    <input
                      type="text"
                      name="employmentBenefits.husband.gratuity"
                      value={formData.employmentBenefits.husband.gratuity}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Group Insurance</label>
                    <input
                      type="text"
                      name="employmentBenefits.husband.groupInsurance"
                      value={formData.employmentBenefits.husband.groupInsurance}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Working since (in years)</label>
                    <input
                      type="number"
                      name="employmentBenefits.husband.workingSince"
                      value={formData.employmentBenefits.husband.workingSince}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="border p-4 rounded">
                <h4 className="font-medium mb-3">WIFE</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium">EPF</label>
                    <input
                      type="text"
                      name="employmentBenefits.wife.epf"
                      value={formData.employmentBenefits.wife.epf}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Superannuation</label>
                    <input
                      type="text"
                      name="employmentBenefits.wife.superannuation"
                      value={formData.employmentBenefits.wife.superannuation}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Gratuity</label>
                    <input
                      type="text"
                      name="employmentBenefits.wife.gratuity"
                      value={formData.employmentBenefits.wife.gratuity}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Group Insurance</label>
                    <input
                      type="text"
                      name="employmentBenefits.wife.groupInsurance"
                      value={formData.employmentBenefits.wife.groupInsurance}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Working since (in years)</label>
                    <input
                      type="number"
                      name="employmentBenefits.wife.workingSince"
                      value={formData.employmentBenefits.wife.workingSince}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Outflows */}
        {step === 6 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">OUTFLOWS</h2>
            
            <h3 className="font-medium mb-3">HOUSEHOLD EXPENSES</h3>
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">Food & Grocery</label>
                  <input
                    type="number"
                    name="outflows.household.foodGrocery"
                    value={formData.outflows.household.foodGrocery}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">House Rent/Maintenance/Repair</label>
                  <input
                    type="number"
                    name="outflows.household.houseRent"
                    value={formData.outflows.household.houseRent}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Conveyance, Fuel & Maintenance</label>
                  <input
                    type="number"
                    name="outflows.household.conveyance"
                    value={formData.outflows.household.conveyance}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Medicines/Doctor/Healthcare</label>
                  <input
                    type="number"
                    name="outflows.household.medicines"
                    value={formData.outflows.household.medicines}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Electricity/Water/Labour/AMCs</label>
                  <input
                    type="number"
                    name="outflows.household.utilities"
                    value={formData.outflows.household.utilities}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mobile/Telephone/Internet</label>
                  <input
                    type="number"
                    name="outflows.household.mobileInternet"
                    value={formData.outflows.household.mobileInternet}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Total Household Expenses</label>
                  <input
                    type="number"
                    name="outflows.household.totalHousehold"
                    value={formData.outflows.household.totalHousehold}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-3">LIFESTYLE EXPENSES</h3>
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">Clothes & Accessories</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.clothes"
                    value={formData.outflows.lifestyle.clothes}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Shopping, Gifts, Whitegoods, Gadgets</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.shopping"
                    value={formData.outflows.lifestyle.shopping}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Dining/Movies/Sports</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.dining"
                    value={formData.outflows.lifestyle.dining}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Personal Care/Others</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.personalCare"
                    value={formData.outflows.lifestyle.personalCare}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Travel & Annual Vacations</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.travel"
                    value={formData.outflows.lifestyle.travel}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Total Lifestyle Expenses</label>
                  <input
                    type="number"
                    name="outflows.lifestyle.totalLifestyle"
                    value={formData.outflows.lifestyle.totalLifestyle}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-3">OTHER EXPENSES</h3>
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">Children's Schooling/College Expenses</label>
                  <input
                    type="number"
                    name="outflows.childrenExpenses"
                    value={formData.outflows.childrenExpenses}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Contribution to Parents, Siblings etc</label>
                  <input
                    type="number"
                    name="outflows.parentContribution"
                    value={formData.outflows.parentContribution}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Dependent Expenses</label>
                  <input
                    type="number"
                    name="outflows.dependentExpenses"
                    value={formData.outflows.dependentExpenses}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-3">INSURANCE</h3>
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">Life Insurance (Term)</label>
                  <input
                    type="number"
                    name="outflows.insurance.lifeInsurance"
                    value={formData.outflows.insurance.lifeInsurance}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mediclaim/PA/CI</label>
                  <input
                    type="number"
                    name="outflows.insurance.mediclaim"
                    value={formData.outflows.insurance.mediclaim}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Motor Insurance</label>
                  <input
                    type="number"
                    name="outflows.insurance.motorInsurance"
                    value={formData.outflows.insurance.motorInsurance}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-3">SAVINGS & INVESTMENTS</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">Net Outflows</label>
                  <input
                    type="number"
                    name="outflows.savings"
                    value={formData.outflows.savings}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">PPF</label>
                  <input
                    type="number"
                    name="outflows.investments.ppf"
                    value={formData.outflows.investments.ppf}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Recurring Deposits (RDs)</label>
                  <input
                    type="number"
                    name="outflows.investments.rds"
                    value={formData.outflows.investments.rds}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Insurance Premiums (Investments)</label>
                  <input
                    type="number"
                    name="outflows.investments.insurancePremiums"
                    value={formData.outflows.investments.insurancePremiums}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mutual Fund SIPs</label>
                  <input
                    type="number"
                    name="outflows.investments.mutualFunds"
                    value={formData.outflows.investments.mutualFunds}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Regular Monthly Investments</label>
                  <input
                    type="number"
                    name="outflows.investments.regularInvestments"
                    value={formData.outflows.investments.regularInvestments}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Surplus (Savings-Investments)</label>
                  <input
                    type="number"
                    name="outflows.surplus"
                    value={formData.outflows.surplus}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Economic Inflation</label>
                  <input
                    type="number"
                    name="outflows.inflation"
                    value={formData.outflows.inflation}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Assets */}
        {step === 7 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">ASSETS</h2>
            
            <h3 className="font-medium mb-3">PERSONAL ASSETS</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Particular</th>
                    <th className="border p-2">Husband</th>
                    <th className="border p-2">Wife</th>
                    <th className="border p-2">Joint/Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Residential Property</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.property.husband"
                        value={formData.assets.property.husband}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.property.wife"
                        value={formData.assets.property.wife}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.property.joint"
                        value={formData.assets.property.joint}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Vehicle</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.vehicle.husband"
                        value={formData.assets.vehicle.husband}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.vehicle.wife"
                        value={formData.assets.vehicle.wife}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.vehicle.joint"
                        value={formData.assets.vehicle.joint}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Jewellery</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.jewellery.husband"
                        value={formData.assets.jewellery.husband}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.jewellery.wife"
                        value={formData.assets.jewellery.wife}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.jewellery.joint"
                        value={formData.assets.jewellery.joint}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Inheritance of Wealth Expected</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.inheritance.husband"
                        value={formData.assets.inheritance.husband}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.inheritance.wife"
                        value={formData.assets.inheritance.wife}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.inheritance.joint"
                        value={formData.assets.inheritance.joint}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Others</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.otherAssets.husband"
                        value={formData.assets.otherAssets.husband}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.otherAssets.wife"
                        value={formData.assets.otherAssets.wife}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="assets.otherAssets.joint"
                        value={formData.assets.otherAssets.joint}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-medium mb-3">LIQUID ASSETS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">Savings Bank/Cash in Hand</label>
                <input
                  type="text"
                  name="assets.liquidAssets.savingsBank"
                  value={formData.assets.liquidAssets.savingsBank}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Receivables from Friends & Family</label>
                <input
                  type="text"
                  name="assets.liquidAssets.receivables"
                  value={formData.assets.liquidAssets.receivables}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Total Liquid Assets</label>
                <input
                  type="text"
                  name="assets.liquidAssets.totalLiquid"
                  value={formData.assets.liquidAssets.totalLiquid}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <h3 className="font-medium mb-3">DEBT ASSETS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">Fixed Deposits</label>
                <input
                  type="text"
                  name="assets.debtAssets.fixedDeposits"
                  value={formData.assets.debtAssets.fixedDeposits}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">PPF (Public Provident Fund)</label>
                <input
                  type="text"
                  name="assets.debtAssets.ppf"
                  value={formData.assets.debtAssets.ppf}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">EPF / Superannuation / Gratuity</label>
                <input
                  type="text"
                  name="assets.debtAssets.epf"
                  value={formData.assets.debtAssets.epf}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">NSC / POMIS / KVP / RDs etc</label>
                <input
                  type="text"
                  name="assets.debtAssets.nsc"
                  value={formData.assets.debtAssets.nsc}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Debt Mutual Funds</label>
                <input
                  type="text"
                  name="assets.debtAssets.debtMutualFunds"
                  value={formData.assets.debtAssets.debtMutualFunds}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Traditional Insurance Policies SV</label>
                <input
                  type="text"
                  name="assets.debtAssets.insurancePolicies"
                  value={formData.assets.debtAssets.insurancePolicies}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Bonds/Debentures/CDs</label>
                <input
                  type="text"
                  name="assets.debtAssets.bonds"
                  value={formData.assets.debtAssets.bonds}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <h3 className="font-medium mb-3">EQUITY ASSETS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">Direct Equity</label>
                <input
                  type="text"
                  name="assets.equityAssets.directEquity"
                  value={formData.assets.equityAssets.directEquity}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Equity Mutual Funds</label>
                <input
                  type="text"
                  name="assets.equityAssets.equityMutualFunds"
                  value={formData.assets.equityAssets.equityMutualFunds}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Unit-linked Insurance Policies SV</label>
                <input
                  type="text"
                  name="assets.equityAssets.ulip"
                  value={formData.assets.equityAssets.ulip}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <h3 className="font-medium mb-3">INVESTMENT ASSETS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">Gold / Silver (ETFs/Bars/Coins)</label>
                <input
                  type="text"
                  name="assets.investmentAssets.gold"
                  value={formData.assets.investmentAssets.gold}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Real Estate Investments</label>
                <input
                  type="text"
                  name="assets.investmentAssets.realEstate"
                  value={formData.assets.investmentAssets.realEstate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 8: Liabilities */}
        {step === 8 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">LIABILITIES</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Particular</th>
                    <th className="border p-2">Outstanding Balance</th>
                    <th className="border p-2">Balance Term</th>
                    <th className="border p-2">Interest Rate</th>
                    <th className="border p-2">EMI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Home Loan</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.homeLoan.balance"
                        value={formData.liabilities.homeLoan.balance}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.homeLoan.term"
                        value={formData.liabilities.homeLoan.term}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.homeLoan.rate"
                        value={formData.liabilities.homeLoan.rate}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.homeLoan.emi"
                        value={formData.liabilities.homeLoan.emi}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Personal Loan</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.personalLoan.balance"
                        value={formData.liabilities.personalLoan.balance}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.personalLoan.term"
                        value={formData.liabilities.personalLoan.term}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.personalLoan.rate"
                        value={formData.liabilities.personalLoan.rate}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.personalLoan.emi"
                        value={formData.liabilities.personalLoan.emi}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Vehicle Loan</td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.vehicleLoan.balance"
                        value={formData.liabilities.vehicleLoan.balance}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.vehicleLoan.term"
                        value={formData.liabilities.vehicleLoan.term}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.vehicleLoan.rate"
                        value={formData.liabilities.vehicleLoan.rate}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="liabilities.vehicleLoan.emi"
                        value={formData.liabilities.vehicleLoan.emi}
                        onChange={handleChange}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 9: Risk Analysis Part 1 */}
        {step === 9 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">RISK ANALYSIS</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  What is the time period for your investment plan?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentPeriod"
                      value="<1Yr"
                      checked={formData.riskAnalysis.investmentPeriod === '<1Yr'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Less than 1 Year
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentPeriod"
                      value="1–3 yrs"
                      checked={formData.riskAnalysis.investmentPeriod === '1–3 yrs'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    1–3 years
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentPeriod"
                      value="3–5 Yrs"
                      checked={formData.riskAnalysis.investmentPeriod === '3–5 Yrs'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    3–5 Years
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentPeriod"
                      value=">5 Yrs"
                      checked={formData.riskAnalysis.investmentPeriod === '>5 Yrs'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    More than 5 Years
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">AGE</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.ageGroup"
                      value="above 60"
                      checked={formData.riskAnalysis.ageGroup === 'above 60'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Above 60
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.ageGroup"
                      value="50 to 60"
                      checked={formData.riskAnalysis.ageGroup === '50 to 60'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    50 to 60
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.ageGroup"
                      value="40 to 50"
                      checked={formData.riskAnalysis.ageGroup === '40 to 50'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    40 to 50
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.ageGroup"
                      value="below 40"
                      checked={formData.riskAnalysis.ageGroup === 'below 40'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Below 40
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Which best describes your prime objective towards investment?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.primeObjective"
                      value="Contingency plan to meet the day to day expenses"
                      checked={formData.riskAnalysis.primeObjective === 'Contingency plan to meet the day to day expenses'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Contingency plan to meet the day to day expenses
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.primeObjective"
                      value="Short Term Goals like buying house, car, etc."
                      checked={formData.riskAnalysis.primeObjective === 'Short Term Goals like buying house, car, etc.'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Short Term Goals like buying house, car, etc.
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.primeObjective"
                      value="Long Term goals like retirement planning and Legacy"
                      checked={formData.riskAnalysis.primeObjective === 'Long Term goals like retirement planning and Legacy'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Long Term goals like retirement planning and Legacy
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.primeObjective"
                      value="Deployment of Surplus fund"
                      checked={formData.riskAnalysis.primeObjective === 'Deployment of Surplus fund'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Deployment of Surplus fund
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What is the most important outcome for you from an investment?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentOutcome"
                      value="Preservation of capital"
                      checked={formData.riskAnalysis.investmentOutcome === 'Preservation of capital'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Preservation of capital
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentOutcome"
                      value="Generate regular income to meet expenses"
                      checked={formData.riskAnalysis.investmentOutcome === 'Generate regular income to meet expenses'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Generate regular income to meet expenses
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentOutcome"
                      value="Generate regular income with Moderate Growth"
                      checked={formData.riskAnalysis.investmentOutcome === 'Generate regular income with Moderate Growth'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Generate regular income with Moderate Growth
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentOutcome"
                      value="Long Term Growth"
                      checked={formData.riskAnalysis.investmentOutcome === 'Long Term Growth'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Long Term Growth
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How much do you depend on your income from investments for meeting your regular expenses?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.incomeDependence"
                      value="> 50% of expenses"
                      checked={formData.riskAnalysis.incomeDependence === '> 50% of expenses'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    More than 50% of expenses
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.incomeDependence"
                      value="25–50% of expenses"
                      checked={formData.riskAnalysis.incomeDependence === '25–50% of expenses'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    25–50% of expenses
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.incomeDependence"
                      value="0–25% of expenses"
                      checked={formData.riskAnalysis.incomeDependence === '0–25% of expenses'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    0–25% of expenses
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 10: Risk Analysis Part 2 */}
        {step === 10 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">RISK ANALYSIS (CONTINUED)</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  How would you describe your overall Savings?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.savingsDescription"
                      value="My PF and other employment benefits are my only source of savings."
                      checked={formData.riskAnalysis.savingsDescription === 'My PF and other employment benefits are my only source of savings.'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    My PF and other employment benefits are my only source of savings.
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.savingsDescription"
                      value="I save more than 30% of my take-home salary every month."
                      checked={formData.riskAnalysis.savingsDescription === 'I save more than 30% of my take-home salary every month.'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    I save more than 30% of my take-home salary every month.
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.savingsDescription"
                      value="My income from my wealth more than adequately provides for my cost of living"
                      checked={formData.riskAnalysis.savingsDescription === 'My income from my wealth more than adequately provides for my cost of living'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    My income from my wealth more than adequately provides for my cost of living
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  The maximum surplus in your current portfolio is parked into
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.surplusParking"
                      value="Savings and fixed deposits"
                      checked={formData.riskAnalysis.surplusParking === 'Savings and fixed deposits'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Savings and fixed deposits
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.surplusParking"
                      value="Bonds & Gold"
                      checked={formData.riskAnalysis.surplusParking === 'Bonds & Gold'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Bonds & Gold
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.surplusParking"
                      value="Real Estate"
                      checked={formData.riskAnalysis.surplusParking === 'Real Estate'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Real Estate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.surplusParking"
                      value="Mutual Funds & Equities"
                      checked={formData.riskAnalysis.surplusParking === 'Mutual Funds & Equities'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Mutual Funds & Equities
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What is your knowledge on the capital markets?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.marketKnowledge"
                      value="Nil"
                      checked={formData.riskAnalysis.marketKnowledge === 'Nil'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Nil
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.marketKnowledge"
                      value="Low"
                      checked={formData.riskAnalysis.marketKnowledge === 'Low'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Low
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.marketKnowledge"
                      value="Moderate"
                      checked={formData.riskAnalysis.marketKnowledge === 'Moderate'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Moderate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.marketKnowledge"
                      value="High"
                      checked={formData.riskAnalysis.marketKnowledge === 'High'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    High
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How was your investment experience in Equities & Mutual funds?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentExperience"
                      value="NA"
                      checked={formData.riskAnalysis.investmentExperience === 'NA'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    NA
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentExperience"
                      value="Bad"
                      checked={formData.riskAnalysis.investmentExperience === 'Bad'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Bad
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentExperience"
                      value="Average"
                      checked={formData.riskAnalysis.investmentExperience === 'Average'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Average
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.investmentExperience"
                      value="Good"
                      checked={formData.riskAnalysis.investmentExperience === 'Good'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Good
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Which is the comfortable investment scenario for you
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.comfortableScenario"
                      value="Little chance of Short Term loss, some opportunity for Long Term Gain"
                      checked={formData.riskAnalysis.comfortableScenario === 'Little chance of Short Term loss, some opportunity for Long Term Gain'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Little chance of Short Term loss, some opportunity for Long Term Gain
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.comfortableScenario"
                      value="Moderate chance of Short Term Loss, moderate opportunity for Long Term Gain"
                      checked={formData.riskAnalysis.comfortableScenario === 'Moderate chance of Short Term Loss, moderate opportunity for Long Term Gain'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Moderate chance of Short Term Loss, moderate opportunity for Long Term Gain
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.comfortableScenario"
                      value="High Chance of Short Term Loss , high chance of Long Term Gain"
                      checked={formData.riskAnalysis.comfortableScenario === 'High Chance of Short Term Loss , high chance of Long Term Gain'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    High Chance of Short Term Loss, high chance of Long Term Gain
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.comfortableScenario"
                      value="Very high Chance of Short Term Loss, very high chance of Long Term Gain"
                      checked={formData.riskAnalysis.comfortableScenario === 'Very high Chance of Short Term Loss, very high chance of Long Term Gain'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Very high Chance of Short Term Loss, very high chance of Long Term Gain
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  If over a three-month period, an investment you owned lost 20% and the overall stock market lost 20%, what would you be most likely to do?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.reactionToLoss"
                      value="Sell all or most of the investment"
                      checked={formData.riskAnalysis.reactionToLoss === 'Sell all or most of the investment'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Sell all or most of the investment
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.reactionToLoss"
                      value="Sell some of the investment"
                      checked={formData.riskAnalysis.reactionToLoss === 'Sell some of the investment'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Sell some of the investment
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.reactionToLoss"
                      value="Stay fully invested"
                      checked={formData.riskAnalysis.reactionToLoss === 'Stay fully invested'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Stay fully invested
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.reactionToLoss"
                      value="Buy more of the investment"
                      checked={formData.riskAnalysis.reactionToLoss === 'Buy more of the investment'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Buy more of the investment
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  If you were to allocate 100% of your investment into only one of the four possible portfolios, which would you choose?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.portfolioChoice"
                      value="Portfolio – A Best: 8% Average: 6% Worst: 4%"
                      checked={formData.riskAnalysis.portfolioChoice === 'Portfolio – A Best: 8% Average: 6% Worst: 4%'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Portfolio – A Best: 8% Average: 6% Worst: 4%
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.portfolioChoice"
                      value="Portfolio – B Best: 15% Average: 8% Worst: 2%"
                      checked={formData.riskAnalysis.portfolioChoice === 'Portfolio – B Best: 15% Average: 8% Worst: 2%'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Portfolio – B Best: 15% Average: 8% Worst: 2%
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.portfolioChoice"
                      value="Portfolio – C Best: 30% Average: 12% Worst: -15%"
                      checked={formData.riskAnalysis.portfolioChoice === 'Portfolio – C Best: 30% Average: 12% Worst: -15%'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Portfolio – C Best: 30% Average: 12% Worst: -15%
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How would a decline in the value of my investments affect you
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.declineImpact"
                      value="I am NOT willing to accept declines in the value of my investment as capital preservation is my primary objective"
                      checked={formData.riskAnalysis.declineImpact === 'I am NOT willing to accept declines in the value of my investment as capital preservation is my primary objective'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    I am NOT willing to accept declines in the value of my investment as capital preservation is my primary objective
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.declineImpact"
                      value="I am willing to accept some declines (10–15%) but I am not comfortable with moderate to extreme drops in the value of my investments"
                      checked={formData.riskAnalysis.declineImpact === 'I am willing to accept some declines (10–15%) but I am not comfortable with moderate to extreme drops in the value of my investments'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    I am willing to accept some declines (10–15%) but I am not comfortable with moderate to extreme drops in the value of my investments
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.declineImpact"
                      value="I am willing to accept moderate losses (16–33%) but I am not comfortable with extreme drops in the value of my investments"
                      checked={formData.riskAnalysis.declineImpact === 'I am willing to accept moderate losses (16–33%) but I am not comfortable with extreme drops in the value of my investments'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    I am willing to accept moderate losses (16–33%) but I am not comfortable with extreme drops in the value of my investments
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.declineImpact"
                      value="I am prepared to take losses (More than 34%) and large fluctuations in the value of my investments in order to maximize my long term returns."
                      checked={formData.riskAnalysis.declineImpact === 'I am prepared to take losses (More than 34%) and large fluctuations in the value of my investments in order to maximize my long term returns.'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    I am prepared to take losses (More than 34%) and large fluctuations in the value of my investments in order to maximize my long term returns.
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  If you had to choose between being a salaried employee and running your own business, which one would you prefer?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.employmentPreference"
                      value="Being a salaried employee"
                      checked={formData.riskAnalysis.employmentPreference === 'Being a salaried employee'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Being a salaried employee
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.employmentPreference"
                      value="Doing a salaried job and may be run a part-time business"
                      checked={formData.riskAnalysis.employmentPreference === 'Doing a salaried job and may be run a part-time business'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Doing a salaried job and may be run a part-time business
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.employmentPreference"
                      value="Running a partnership business"
                      checked={formData.riskAnalysis.employmentPreference === 'Running a partnership business'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Running a partnership business
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.employmentPreference"
                      value="Running my own business"
                      checked={formData.riskAnalysis.employmentPreference === 'Running my own business'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Running my own business
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  When you think of the word "risk" in a financial context, which of the following words comes to mind first
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.riskPerception"
                      value="Danger"
                      checked={formData.riskAnalysis.riskPerception === 'Danger'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Danger
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.riskPerception"
                      value="Uncertainty"
                      checked={formData.riskAnalysis.riskPerception === 'Uncertainty'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Uncertainty
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.riskPerception"
                      value="Opportunity"
                      checked={formData.riskAnalysis.riskPerception === 'Opportunity'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Opportunity
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="riskAnalysis.riskPerception"
                      value="Thrill"
                      checked={formData.riskAnalysis.riskPerception === 'Thrill'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Thrill
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
    </Layout>
  );
}