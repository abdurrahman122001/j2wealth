// pages/risk-assessment.js
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function RiskAssessment() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const totalSteps = 10

    const questions = [
        {
            id: 1,
            question: "Which of these investments would you feel more comfortable owning?",
            type: "radio",
            options: [
                { value: "a", label: "A portfolio of 15 bonds", score: 1 },
                { value: "b", label: "A portfolio of 10 bonds and 5 stocks", score: 2 },
                { value: "c", label: "A portfolio of 5 bonds and 10 stocks", score: 3 },
                { value: "d", label: "A portfolio of 15 stocks", score: 4 }
            ]
        },
        {
            id: 2,
            question: "Is your future financial goal",
            type: "radio",
            options: [
                { value: "a", label: "Short-term (less than 2 years)", score: 1 },
                { value: "b", label: "Medium-term (2-5 years)", score: 2 },
                { value: "c", label: "Long-term (5-10 years)", score: 3 },
                { value: "d", label: "Very long-term (more than 10 years)", score: 4 }
            ]
        },
        {
            id: 3,
            question: "What is your primary financial goal?",
            type: "radio",
            options: [
                { value: "a", label: "Preservation of capital", score: 1 },
                { value: "b", label: "Current income generation", score: 2 },
                { value: "c", label: "Long-term growth", score: 3 },
                { value: "d", label: "Aggressive growth", score: 4 }
            ]
        },
        {
            id: 4,
            question: "Which of the following investment returns would most appeal to you if you were to invest an initial amount of Rs 20,000 for one year?",
            type: "radio",
            options: [
                { value: "a", label: "Rs 20,200 with certainty", score: 1 },
                { value: "b", label: "50% chance of Rs 20,000 or Rs 22,000", score: 2 },
                { value: "c", label: "50% chance of Rs 18,000 or Rs 24,000", score: 3 },
                { value: "d", label: "50% chance of Rs 16,000 or Rs 28,000", score: 4 }
            ]
        },
        {
            id: 5,
            question: "Please select the statement most applicable to you:",
            type: "radio",
            options: [
                { value: "a", label: "I prefer guaranteed returns even if they are lower", score: 1 },
                { value: "b", label: "I can accept small losses for potentially higher returns", score: 2 },
                { value: "c", label: "I can accept moderate losses for good long-term returns", score: 3 },
                { value: "d", label: "I can accept significant losses for potentially high returns", score: 4 }
            ]
        },
        {
            id: 6,
            question: "Please select the statement most applicable to you:",
            type: "radio",
            options: [
                { value: "a", label: "I have no investment experience", score: 1 },
                { value: "b", label: "I have limited investment experience", score: 2 },
                { value: "c", label: "I have moderate investment experience", score: 3 },
                { value: "d", label: "I have extensive investment experience", score: 4 }
            ]
        },
        {
            id: 7,
            question: "I am prepared to accept short-term losses if I believe the long-term returns will be good.",
            type: "radio",
            options: [
                { value: "a", label: "Strongly Disagree", score: 1 },
                { value: "b", label: "Disagree", score: 2 },
                { value: "c", label: "Agree", score: 3 },
                { value: "d", label: "Strongly Agree", score: 4 }
            ]
        },
        {
            id: 8,
            question: "I would quit my job and start my own business if the right opportunity arose.",
            type: "radio",
            options: [
                { value: "a", label: "Strongly Disagree", score: 1 },
                { value: "b", label: "Disagree", score: 2 },
                { value: "c", label: "Agree", score: 3 },
                { value: "d", label: "Strongly Agree", score: 4 }
            ]
        },
        {
            id: 9,
            question: "I expect my investment earnings to increase in line with inflation over the next 5 years.",
            type: "radio",
            options: [
                { value: "a", label: "Strongly Disagree", score: 1 },
                { value: "b", label: "Disagree", score: 2 },
                { value: "c", label: "Agree", score: 3 },
                { value: "d", label: "Strongly Agree", score: 4 }
            ]
        },
        {
            id: 10,
            question: "I have sufficient funds set aside to cover most emergencies.",
            type: "radio",
            options: [
                { value: "a", label: "Strongly Disagree", score: 1 },
                { value: "b", label: "Disagree", score: 2 },
                { value: "c", label: "Agree", score: 3 },
                { value: "d", label: "Strongly Agree", score: 4 }
            ]
        }
    ]

    const handleInputChange = (questionId, value, score) => {
        setFormData(prev => ({
            ...prev,
            [questionId]: { value, score }
        }))
    }

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const calculateRiskProfile = () => {
        const totalScore = Object.values(formData).reduce((sum, item) => sum + (item.score || 0), 0)
        const maxScore = totalSteps * 4
        const percentage = (totalScore / maxScore) * 100

        if (percentage <= 25) return { 
            profile: "Conservative Investor", 
            color: "#078586",
            description: "You prefer stability and capital preservation over growth.",
            allocation: "75% Fixed Income, 25% Equity",
            riskLevel: "Low",
            investments: [
                "Government Securities & Bonds",
                "Fixed Deposits & PPF", 
                "Conservative Hybrid Funds",
                "Liquid & Ultra Short Duration Funds"
            ]
        }
        if (percentage <= 50) return { 
            profile: "Moderate Conservative Investor", 
            color: "#078586",
            description: "You seek balanced growth with moderate risk tolerance.",
            allocation: "60% Fixed Income, 40% Equity",
            riskLevel: "Low to Medium",
            investments: [
                "Balanced Advantage Funds",
                "Large Cap Equity Funds", 
                "Corporate Bond Funds",
                "Moderate Hybrid Funds"
            ]
        }
        if (percentage <= 75) return { 
            profile: "Moderate Aggressive Investor", 
            color: "#078586",
            description: "You are willing to take moderate risks for higher returns.",
            allocation: "35% Fixed Income, 65% Equity",
            riskLevel: "Medium to High",
            investments: [
                "Diversified Equity Funds",
                "Mid Cap & Small Cap Funds",
                "International Equity Funds", 
                "ELSS Tax Saving Funds"
            ]
        }
        return { 
            profile: "Aggressive Investor", 
            color: "#078586", 
            description: "You are comfortable with high risk for maximum growth potential.",
            allocation: "20% Fixed Income, 80% Equity",
            riskLevel: "High",
            investments: [
                "Small Cap & Sector Funds",
                "Emerging Market Funds",
                "Growth-oriented Equity Funds",
                "Thematic & Specialty Funds"
            ]
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2500))
        setIsSubmitting(false)
        setCurrentStep(totalSteps + 1) // Move to results page
    }

    const progressPercentage = (currentStep / totalSteps) * 100
    const currentQuestion = questions[currentStep - 1]

    // Results Page
    if (currentStep > totalSteps) {
        const riskProfile = calculateRiskProfile()
        const totalScore = Object.values(formData).reduce((sum, item) => sum + (item.score || 0), 0)
        
        return (
            <Layout headerStyle={4} footerStyle={4}>
                <section className="risk-results-section">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="results-header text-center mb-5">
                                    <div className="results-icon mb-3">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                    <h1 className="results-title">Your Investment Risk Profile</h1>
                                    <p className="results-subtitle">Based on your responses, here's your personalized investment strategy</p>
                                </div>

                                <div className="results-card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <h2 className="profile-title">{riskProfile.profile}</h2>
                                                <p className="profile-description">{riskProfile.description}</p>
                                                <div className="score-info">
                                                    <span className="score-badge">Your Score: {totalScore}/40</span>
                                                    <span className="risk-level">Risk Level: {riskProfile.riskLevel}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="risk-gauge">
                                                    <div className="gauge-circle">
                                                        <span className="gauge-percentage">{Math.round((totalScore/40)*100)}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="recommendation-box">
                                                    <h4 className="rec-title">
                                                        <i className="fas fa-chart-bar me-2"></i>
                                                        Recommended Asset Allocation
                                                    </h4>
                                                    <div className="allocation-display">
                                                        <div className="allocation-text">{riskProfile.allocation}</div>
                                                        <div className="allocation-bars">
                                                            <div className="allocation-bar">
                                                                <div className="bar-label">Fixed Income</div>
                                                                <div className="bar-container">
                                                                    <div className="bar-fill debt" style={{width: riskProfile.allocation.split('%')[0] + '%'}}></div>
                                                                </div>
                                                                <div className="bar-percentage">{riskProfile.allocation.split('%')[0]}%</div>
                                                            </div>
                                                            <div className="allocation-bar">
                                                                <div className="bar-label">Equity</div>
                                                                <div className="bar-container">
                                                                    <div className="bar-fill equity" style={{width: riskProfile.allocation.split('%')[1].split(',')[1].trim().split('%')[0] + '%'}}></div>
                                                                </div>
                                                                <div className="bar-percentage">{riskProfile.allocation.split('%')[1].split(',')[1].trim().split('%')[0]}%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-4">
                                                <div className="recommendation-box">
                                                    <h4 className="rec-title">
                                                        <i className="fas fa-coins me-2"></i>
                                                        Suitable Investment Products
                                                    </h4>
                                                    <div className="investment-list">
                                                        {riskProfile.investments.map((investment, index) => (
                                                            <div key={index} className="investment-item">
                                                                <i className="fas fa-check-circle"></i>
                                                                <span>{investment}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="action-section">
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <Link href="/contact" className="action-btn primary">
                                                        <i className="fas fa-user-tie"></i>
                                                        <span>Consult Our Expert</span>
                                                    </Link>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <Link href="/investment-products" className="action-btn secondary">
                                                        <i className="fas fa-chart-line"></i>
                                                        <span>View Investment Plans</span>
                                                    </Link>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <button onClick={() => window.location.reload()} className="action-btn outline">
                                                        <i className="fas fa-redo"></i>
                                                        <span>Retake Assessment</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    .risk-results-section {
                        background: linear-gradient(135deg, #f8fffe 0%, #e6f7f7 100%);
                        min-height: 100vh;
                    }

                    .results-header .results-icon {
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                        border-radius: 50%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 2rem;
                        box-shadow: 0 10px 30px rgba(7, 133, 134, 0.3);
                    }

                    .results-title {
                        color: #078586;
                        font-weight: 700;
                        font-size: 2.5rem;
                        margin-bottom: 1rem;
                    }

                    .results-subtitle {
                        color: #666;
                        font-size: 1.1rem;
                        margin-bottom: 0;
                    }

                    .results-card {
                        background: white;
                        border-radius: 20px;
                        overflow: hidden;
                        box-shadow: 0 20px 60px rgba(7, 133, 134, 0.15);
                    }

                    .card-header {
                        background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                        color: white;
                        padding: 2.5rem;
                    }

                    .profile-title {
                        font-size: 2rem;
                        font-weight: 700;
                        margin-bottom: 0.5rem;
                    }

                    .profile-description {
                        font-size: 1.1rem;
                        margin-bottom: 1rem;
                        opacity: 0.9;
                    }

                    .score-info {
                        display: flex;
                        gap: 1rem;
                        flex-wrap: wrap;
                    }

                    .score-badge, .risk-level {
                        background: rgba(255, 255, 255, 0.2);
                        padding: 0.5rem 1rem;
                        border-radius: 25px;
                        font-weight: 600;
                    }

                    .risk-gauge {
                        display: flex;
                        justify-content: center;
                    }

                    .gauge-circle {
                        width: 120px;
                        height: 120px;
                        border: 8px solid rgba(255, 255, 255, 0.3);
                        border-top: 8px solid white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: spin 2s linear infinite;
                    }

                    .gauge-percentage {
                        font-size: 1.5rem;
                        font-weight: 700;
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    .card-body {
                        padding: 2.5rem;
                    }

                    .recommendation-box {
                        background: #f8fffe;
                        border: 2px solid #e6f7f7;
                        border-radius: 15px;
                        padding: 2rem;
                        height: 100%;
                    }

                    .rec-title {
                        color: #078586;
                        font-weight: 700;
                        font-size: 1.25rem;
                        margin-bottom: 1.5rem;
                    }

                    .allocation-text {
                        font-size: 1.3rem;
                        font-weight: 700;
                        color: #078586;
                        text-align: center;
                        margin-bottom: 1.5rem;
                    }

                    .allocation-bar {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1rem;
                        gap: 1rem;
                    }

                    .bar-label {
                        font-weight: 600;
                        min-width: 100px;
                        color: #555;
                    }

                    .bar-container {
                        flex: 1;
                        height: 25px;
                        background: #e9ecef;
                        border-radius: 15px;
                        overflow: hidden;
                    }

                    .bar-fill {
                        height: 100%;
                        border-radius: 15px;
                        transition: width 0.8s ease;
                    }

                    .bar-fill.debt {
                        background: linear-gradient(90deg, #078586 0%, #0a9b9d 100%);
                    }

                    .bar-fill.equity {
                        background: linear-gradient(90deg, #20c997 0%, #28a745 100%);
                    }

                    .bar-percentage {
                        font-weight: 700;
                        color: #078586;
                        min-width: 40px;
                    }

                    .investment-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1rem;
                        gap: 0.75rem;
                    }

                    .investment-item i {
                        color: #078586;
                        font-size: 1.1rem;
                    }

                    .action-section {
                        margin-top: 2rem;
                        padding-top: 2rem;
                        border-top: 2px solid #e6f7f7;
                    }

                    .action-btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        padding: 1rem 1.5rem;
                        border-radius: 12px;
                        text-decoration: none;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        width: 100%;
                        border: none;
                        cursor: pointer;
                    }

                    .action-btn.primary {
                        background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                        color: white;
                    }

                    .action-btn.primary:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 25px rgba(7, 133, 134, 0.3);
                        color: white;
                    }

                    .action-btn.secondary {
                        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                        color: white;
                    }

                    .action-btn.secondary:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3);
                        color: white;
                    }

                    .action-btn.outline {
                        background: white;
                        border: 2px solid #078586;
                        color: #078586;
                    }

                    .action-btn.outline:hover {
                        background: #078586;
                        color: white;
                        transform: translateY(-2px);
                    }

                    @media (max-width: 768px) {
                        .results-title {
                            font-size: 2rem;
                        }
                        
                        .card-header, .card-body {
                            padding: 1.5rem;
                        }
                        
                        .gauge-circle {
                            width: 100px;
                            height: 100px;
                        }
                        
                        .score-info {
                            flex-direction: column;
                        }
                    }
                `}</style>
            </Layout>
        )
    }

    // Main Form
    return (
        <Layout headerStyle={4} footerStyle={4}>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-content text-center">
                                <div className="hero-icon mb-4">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h1 className="hero-title">Investment Risk Assessment</h1>
                                <p className="hero-subtitle">
                                    Discover your investment risk profile and get personalized portfolio recommendations
                                </p>
                                <div className="progress-section">
                                    <div className="progress-info">
                                        <span>Question {currentStep} of {totalSteps}</span>
                                        <span>{Math.round(progressPercentage)}% Complete</span>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" style={{width: `${progressPercentage}%`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="form-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <div className="question-card">
                                <div className="question-header">
                                    <div className="question-number">
                                        <span>{currentStep}</span>
                                    </div>
                                    <div className="question-progress">
                                        <div className="mini-progress">
                                            <div className="mini-progress-bar" style={{width: `${(currentStep/totalSteps) * 100}%`}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="question-content">
                                    <h2 className="question-title">{currentQuestion.question}</h2>
                                    
                                    <div className="options-container">
                                        {currentQuestion.options.map((option, index) => (
                                            <div key={index} className="option-item">
                                                <input
                                                    type="radio"
                                                    id={`option-${currentQuestion.id}-${index}`}
                                                    name={`question-${currentQuestion.id}`}
                                                    value={option.value}
                                                    checked={formData[currentQuestion.id]?.value === option.value}
                                                    onChange={() => handleInputChange(currentQuestion.id, option.value, option.score)}
                                                    className="option-input"
                                                />
                                                <label 
                                                    htmlFor={`option-${currentQuestion.id}-${index}`}
                                                    className="option-label"
                                                >
                                                    <div className="option-indicator">
                                                        <div className="option-dot"></div>
                                                    </div>
                                                    <div className="option-text">
                                                        <span className="option-letter">{option.value.toUpperCase()})</span>
                                                        <span className="option-content">{option.label}</span>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-navigation">
                                    <div className="nav-buttons">
                                        {currentStep > 1 && (
                                            <button
                                                type="button"
                                                className="nav-btn prev-btn"
                                                onClick={handlePrevious}
                                            >
                                                <i className="fas fa-arrow-left"></i>
                                                Previous
                                            </button>
                                        )}
                                        
                                        <div className="nav-spacer"></div>
                                        
                                        {currentStep === totalSteps ? (
                                            <button
                                                type="button"
                                                className={`nav-btn submit-btn ${!formData[currentQuestion.id] || isSubmitting ? 'disabled' : ''}`}
                                                onClick={handleSubmit}
                                                disabled={!formData[currentQuestion.id] || isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="spinner"></div>
                                                        Calculating...
                                                    </>
                                                ) : (
                                                    <>
                                                        Get My Results
                                                        <i className="fas fa-chart-bar"></i>
                                                    </>
                                                )}
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className={`nav-btn next-btn ${!formData[currentQuestion.id] ? 'disabled' : ''}`}
                                                onClick={handleNext}
                                                disabled={!formData[currentQuestion.id]}
                                            >
                                                Next Question
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="help-info">
                                <p>
                                    <i className="fas fa-info-circle"></i>
                                    Need help with this assessment? Our financial advisors are here to assist you.
                                </p>
                                <Link href="/contact">Contact Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .hero-section {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    position: relative;
                    padding: 4rem 0;
                    overflow: hidden;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    opacity: 0.1;
                }

                .hero-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='37' cy='23' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    height: 100%;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    color: white;
                }

                .hero-icon {
                    width: 80px;
                    height: 80px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }

                .hero-subtitle {
                    font-size: 1.2rem;
                    margin-bottom: 2.5rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .progress-section {
                    max-width: 400px;
                    margin: 0 auto;
                }

                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    font-size: 0.95rem;
                }

                .progress-container {
                    height: 8px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }

                .progress-bar {
                    height: 100%;
                    background: white;
                    border-radius: 10px;
                    transition: width 0.6s ease;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                }

                .form-section {
                    background: #f8fffe;
                    padding: 4rem 0;
                    min-height: 70vh;
                }

                .question-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(7, 133, 134, 0.1);
                    overflow: hidden;
                    margin-bottom: 2rem;
                }

                .question-header {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    padding: 1.5rem 2rem;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .question-number {
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    font-weight: 700;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .question-progress {
                    flex: 1;
                }

                .mini-progress {
                    height: 6px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .mini-progress-bar {
                    height: 100%;
                    background: white;
                    border-radius: 10px;
                    transition: width 0.4s ease;
                }

                .question-content {
                    padding: 2.5rem;
                }

                .question-title {
                    color: #078586;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    line-height: 1.4;
                }

                .options-container {
                    margin-bottom: 2rem;
                }

                .option-item {
                    margin-bottom: 1rem;
                }

                .option-input {
                    display: none;
                }

                .option-label {
                    display: flex;
                    align-items: center;
                    padding: 1.25rem;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background: white;
                    gap: 1rem;
                }

                .option-label:hover {
                    border-color: #078586;
                    background: #f8fffe;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(7, 133, 134, 0.1);
                }

                .option-input:checked + .option-label {
                    border-color: #078586;
                    background: linear-gradient(135deg, #f8fffe 0%, #e6f7f7 100%);
                    box-shadow: 0 8px 25px rgba(7, 133, 134, 0.15);
                }

                .option-indicator {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #dee2e6;
                    border-radius: 50%;
                    position: relative;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .option-input:checked + .option-label .option-indicator {
                    border-color: #078586;
                    background: #078586;
                }

                .option-dot {
                    width: 8px;
                    height: 8px;
                    background: white;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    transition: transform 0.2s ease;
                }

                .option-input:checked + .option-label .option-dot {
                    transform: translate(-50%, -50%) scale(1);
                }

                .option-text {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .option-letter {
                    font-weight: 700;
                    color: #078586;
                    min-width: 25px;
                }

                .option-content {
                    font-weight: 500;
                    color: #333;
                    line-height: 1.5;
                }

                .form-navigation {
                    padding: 1.5rem 2.5rem;
                    background: #f8f9fa;
                    border-top: 1px solid #e9ecef;
                }

                .nav-buttons {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .nav-spacer {
                    flex: 1;
                }

                .nav-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.5rem;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;
                }

                .prev-btn {
                    background: #6c757d;
                    color: white;
                }

                .prev-btn:hover {
                    background: #5a6268;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(108, 117, 125, 0.3);
                }

                .next-btn, .submit-btn {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    color: white;
                    border: none;
                }

                .next-btn:hover, .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(7, 133, 134, 0.3);
                }

                .nav-btn.disabled {
                    background: #dee2e6;
                    color: #6c757d;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .help-info {
                    text-align: center;
                    color: #6c757d;
                    font-size: 0.9rem;
                }

                .help-info p {
                    margin-bottom: 0.5rem;
                }

                .help-info a {
                    color: #078586;
                    text-decoration: none;
                    font-weight: 600;
                }

                .help-info a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.2rem;
                    }

                    .hero-subtitle {
                        font-size: 1.1rem;
                        margin-bottom: 2rem;
                    }

                    .question-content {
                        padding: 2rem 1.5rem;
                    }

                    .form-navigation {
                        padding: 1rem 1.5rem;
                    }

                    .question-title {
                        font-size: 1.3rem;
                    }

                    .option-label {
                        padding: 1rem;
                    }

                    .nav-btn {
                        padding: 0.75rem 1.25rem;
                        font-size: 0.9rem;
                    }

                    .nav-buttons {
                        flex-direction: column-reverse;
                        gap: 0.75rem;
                    }

                    .nav-spacer {
                        display: none;
                    }

                    .nav-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        padding: 3rem 0;
                    }

                    .hero-title {
                        font-size: 1.9rem;
                    }

                    .question-content {
                        padding: 1.5rem 1rem;
                    }

                    .question-header {
                        padding: 1rem 1.5rem;
                    }

                    .option-text {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.25rem;
                    }

                    .option-letter {
                        min-width: auto;
                    }
                }
            `}</style>
        </Layout>
    )
}