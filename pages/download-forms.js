// pages/financial-health.js
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export default function FinancialHealth() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const totalSteps = 12

    const questions = [
        {
            id: 1,
            question: "Have you prepared a budget for household expenses?",
            type: "radio",
            options: [
                { value: "yes", label: "Yes", score: 4 },
                { value: "no", label: "No", score: 1 }
            ]
        },
        {
            id: 2,
            question: "Do you track your monthly income and expenses regularly?",
            type: "radio",
            options: [
                { value: "yes-always", label: "Yes, I track them monthly", score: 4 },
                { value: "yes-sometimes", label: "Yes, but not consistently", score: 3 },
                { value: "rarely", label: "Rarely", score: 2 },
                { value: "never", label: "Never", score: 1 }
            ]
        },
        {
            id: 3,
            question: "How much of your monthly income do you save?",
            type: "radio",
            options: [
                { value: "above-20", label: "More than 20%", score: 4 },
                { value: "15-20", label: "15-20%", score: 3 },
                { value: "5-15", label: "5-15%", score: 2 },
                { value: "below-5", label: "Less than 5%", score: 1 }
            ]
        },
        {
            id: 4,
            question: "Do you have an emergency fund that can cover at least 6 months of expenses?",
            type: "radio",
            options: [
                { value: "yes-6plus", label: "Yes, more than 6 months", score: 4 },
                { value: "yes-3to6", label: "Yes, 3-6 months", score: 3 },
                { value: "yes-1to3", label: "Yes, 1-3 months", score: 2 },
                { value: "no", label: "No emergency fund", score: 1 }
            ]
        },
        {
            id: 5,
            question: "How do you typically pay your credit card bills?",
            type: "radio",
            options: [
                { value: "full-amount", label: "Pay full amount every month", score: 4 },
                { value: "more-than-minimum", label: "Pay more than minimum", score: 3 },
                { value: "minimum-only", label: "Pay minimum amount only", score: 2 },
                { value: "miss-payments", label: "Sometimes miss payments", score: 1 }
            ]
        },
        {
            id: 6,
            question: "Do you have adequate health insurance coverage?",
            type: "radio",
            options: [
                { value: "comprehensive", label: "Yes, comprehensive coverage", score: 4 },
                { value: "basic", label: "Yes, basic coverage", score: 3 },
                { value: "minimal", label: "Minimal coverage", score: 2 },
                { value: "no", label: "No health insurance", score: 1 }
            ]
        },
        {
            id: 7,
            question: "Do you have life insurance coverage?",
            type: "radio",
            options: [
                { value: "adequate", label: "Yes, adequate coverage", score: 4 },
                { value: "some", label: "Yes, but may not be enough", score: 3 },
                { value: "minimal", label: "Minimal coverage", score: 2 },
                { value: "none", label: "No life insurance", score: 1 }
            ]
        },
        {
            id: 8,
            question: "Are you currently investing for retirement?",
            type: "radio",
            options: [
                { value: "regularly-adequate", label: "Yes, regularly and adequately", score: 4 },
                { value: "regularly-small", label: "Yes, but small amounts", score: 3 },
                { value: "occasionally", label: "Occasionally", score: 2 },
                { value: "not-yet", label: "Not yet started", score: 1 }
            ]
        },
        {
            id: 9,
            question: "How much total debt do you have relative to your income?",
            type: "radio",
            options: [
                { value: "no-debt", label: "No debt or very minimal", score: 4 },
                { value: "manageable", label: "Manageable debt level", score: 3 },
                { value: "concerning", label: "Somewhat concerning level", score: 2 },
                { value: "overwhelming", label: "Overwhelming debt level", score: 1 }
            ]
        },
        {
            id: 10,
            question: "Do you review and monitor your credit score regularly?",
            type: "radio",
            options: [
                { value: "regularly", label: "Yes, regularly", score: 4 },
                { value: "occasionally", label: "Occasionally", score: 3 },
                { value: "rarely", label: "Rarely", score: 2 },
                { value: "never", label: "Never", score: 1 }
            ]
        },
        {
            id: 11,
            question: "Do you have written financial goals for the next 5 years?",
            type: "radio",
            options: [
                { value: "detailed-plan", label: "Yes, detailed written plan", score: 4 },
                { value: "general-goals", label: "Yes, general goals", score: 3 },
                { value: "thinking-about", label: "Thinking about it", score: 2 },
                { value: "no-goals", label: "No specific goals", score: 1 }
            ]
        },
        {
            id: 12,
            question: "How often do you review your financial situation and investments?",
            type: "radio",
            options: [
                { value: "monthly", label: "Monthly", score: 4 },
                { value: "quarterly", label: "Quarterly", score: 3 },
                { value: "annually", label: "Annually", score: 2 },
                { value: "rarely", label: "Rarely or never", score: 1 }
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

    const calculateFinancialHealth = () => {
        const totalScore = Object.values(formData).reduce((sum, item) => sum + (item.score || 0), 0)
        const maxScore = totalSteps * 4
        const percentage = (totalScore / maxScore) * 100

        if (percentage >= 85) return { 
            status: "Excellent Financial Health", 
            color: "#078586",
            description: "You have outstanding financial habits and are well-prepared for the future.",
            grade: "A+",
            recommendations: [
                "Continue your excellent financial management",
                "Consider advanced investment strategies",
                "Explore tax optimization opportunities",
                "Review and optimize your insurance coverage annually"
            ],
            keyStrengths: [
                "Strong budgeting and saving habits",
                "Adequate emergency fund",
                "Good debt management", 
                "Regular financial planning"
            ]
        }
        if (percentage >= 70) return { 
            status: "Good Financial Health", 
            color: "#078586",
            description: "You have solid financial foundations with room for some improvements.",
            grade: "B+",
            recommendations: [
                "Increase your emergency fund to 6+ months",
                "Review and optimize your investment portfolio",
                "Consider additional insurance coverage",
                "Set more specific financial goals"
            ],
            keyStrengths: [
                "Regular saving habits",
                "Basic financial planning in place",
                "Manageable debt levels",
                "Some investment activity"
            ]
        }
        if (percentage >= 55) return { 
            status: "Fair Financial Health", 
            color: "#078586",
            description: "You have basic financial management but need improvements in key areas.",
            grade: "C+",
            recommendations: [
                "Create and stick to a monthly budget",
                "Build an emergency fund immediately",
                "Start investing for retirement",
                "Review and reduce unnecessary expenses"
            ],
            keyStrengths: [
                "Basic income and expense awareness",
                "Some savings habits",
                "Recognition of need for improvement"
            ]
        }
        return { 
            status: "Needs Improvement", 
            color: "#078586",
            description: "Your financial health needs immediate attention and planning.",
            grade: "D",
            recommendations: [
                "Start with basic budgeting immediately",
                "Create an emergency fund plan",
                "Seek professional financial counseling",
                "Address debt management strategies",
                "Begin regular financial planning"
            ],
            keyStrengths: [
                "Awareness of financial situation",
                "Willingness to assess and improve"
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
        const healthResult = calculateFinancialHealth()
        const totalScore = Object.values(formData).reduce((sum, item) => sum + (item.score || 0), 0)
        
        return (
            <Layout headerStyle={4} footerStyle={4}>
                <section className="health-results-section">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="results-header text-center mb-5">
                                    <div className="results-icon mb-3">
                                        <i className="fas fa-heartbeat"></i>
                                    </div>
                                    <h1 className="results-title">Your Financial Health Assessment</h1>
                                    <p className="results-subtitle">Complete analysis of your financial well-being and personalized recommendations</p>
                                </div>

                                <div className="health-results-card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <div className="health-grade-badge">{healthResult.grade}</div>
                                                <h2 className="health-status-title">{healthResult.status}</h2>
                                                <p className="health-description">{healthResult.description}</p>
                                                <div className="score-display">
                                                    <span className="score-text">Your Score: <strong>{totalScore}/48</strong></span>
                                                    <span className="percentage-text">({Math.round((totalScore/48)*100)}%)</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="health-meter">
                                                    <div className="meter-circle">
                                                        <div className="meter-fill" style={{
                                                            background: `conic-gradient(#078586 ${(totalScore/48)*360}deg, #e9ecef 0deg)`
                                                        }}>
                                                            <div className="meter-inner">
                                                                <span className="meter-score">{Math.round((totalScore/48)*100)}%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="recommendation-section">
                                                    <h4 className="section-title">
                                                        <i className="fas fa-lightbulb me-2"></i>
                                                        Key Recommendations
                                                    </h4>
                                                    <div className="recommendation-list">
                                                        {healthResult.recommendations.map((recommendation, index) => (
                                                            <div key={index} className="recommendation-item">
                                                                <div className="recommendation-number">{index + 1}</div>
                                                                <span className="recommendation-text">{recommendation}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-4">
                                                <div className="strengths-section">
                                                    <h4 className="section-title">
                                                        <i className="fas fa-star me-2"></i>
                                                        Your Financial Strengths
                                                    </h4>
                                                    <div className="strengths-list">
                                                        {healthResult.keyStrengths.map((strength, index) => (
                                                            <div key={index} className="strength-item">
                                                                <i className="fas fa-check-circle"></i>
                                                                <span>{strength}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="action-section">
                                            <div className="action-header">
                                                <h4>Next Steps to Improve Your Financial Health</h4>
                                                <p>Take action today to strengthen your financial foundation</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <Link href="/financial-planning" className="action-btn primary">
                                                        <i className="fas fa-chart-line"></i>
                                                        <div className="btn-content">
                                                            <div className="btn-title">Financial Planning</div>
                                                            <div className="btn-subtitle">Get personalized plan</div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <Link href="/contact" className="action-btn secondary">
                                                        <i className="fas fa-user-tie"></i>
                                                        <div className="btn-content">
                                                            <div className="btn-title">Expert Consultation</div>
                                                            <div className="btn-subtitle">Speak with advisor</div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <button onClick={() => window.location.reload()} className="action-btn outline">
                                                        <i className="fas fa-redo"></i>
                                                        <div className="btn-content">
                                                            <div className="btn-title">Retake Assessment</div>
                                                            <div className="btn-subtitle">Check again</div>
                                                        </div>
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
                    .health-results-section {
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
                    }

                    .health-results-card {
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

                    .health-grade-badge {
                        display: inline-block;
                        background: rgba(255, 255, 255, 0.2);
                        color: white;
                        font-size: 2rem;
                        font-weight: 700;
                        padding: 0.5rem 1rem;
                        border-radius: 15px;
                        margin-bottom: 1rem;
                        backdrop-filter: blur(10px);
                    }

                    .health-status-title {
                        font-size: 2rem;
                        font-weight: 700;
                        margin-bottom: 0.5rem;
                    }

                    .health-description {
                        font-size: 1.1rem;
                        margin-bottom: 1rem;
                        opacity: 0.9;
                    }

                    .score-display {
                        display: flex;
                        gap: 1rem;
                        align-items: center;
                    }

                    .score-text, .percentage-text {
                        background: rgba(255, 255, 255, 0.2);
                        padding: 0.5rem 1rem;
                        border-radius: 25px;
                        font-weight: 600;
                        backdrop-filter: blur(10px);
                    }

                    .health-meter {
                        display: flex;
                        justify-content: center;
                    }

                    .meter-circle {
                        position: relative;
                        width: 120px;
                        height: 120px;
                    }

                    .meter-fill {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: background 0.8s ease;
                    }

                    .meter-inner {
                        width: 80px;
                        height: 80px;
                        background: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .meter-score {
                        font-size: 1.25rem;
                        font-weight: 700;
                        color: #078586;
                    }

                    .card-body {
                        padding: 2.5rem;
                    }

                    .recommendation-section, .strengths-section {
                        background: #f8fffe;
                        border: 2px solid #e6f7f7;
                        border-radius: 15px;
                        padding: 2rem;
                        height: 100%;
                    }

                    .section-title {
                        color: #078586;
                        font-weight: 700;
                        font-size: 1.25rem;
                        margin-bottom: 1.5rem;
                    }

                    .recommendation-item {
                        display: flex;
                        align-items: flex-start;
                        margin-bottom: 1rem;
                        gap: 0.75rem;
                    }

                    .recommendation-number {
                        width: 25px;
                        height: 25px;
                        background: #078586;
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.85rem;
                        font-weight: 600;
                        flex-shrink: 0;
                        margin-top: 2px;
                    }

                    .recommendation-text {
                        line-height: 1.5;
                        color: #555;
                    }

                    .strength-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1rem;
                        gap: 0.75rem;
                    }

                    .strength-item i {
                        color: #078586;
                        font-size: 1.1rem;
                    }

                    .action-section {
                        margin-top: 2rem;
                        padding-top: 2rem;
                        border-top: 2px solid #e6f7f7;
                    }

                    .action-header {
                        text-align: center;
                        margin-bottom: 2rem;
                    }

                    .action-header h4 {
                        color: #078586;
                        font-weight: 700;
                        margin-bottom: 0.5rem;
                    }

                    .action-btn {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        padding: 1.25rem;
                        border-radius: 15px;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        width: 100%;
                        border: none;
                        cursor: pointer;
                        height: 100%;
                    }

                    .action-btn i {
                        font-size: 1.5rem;
                        flex-shrink: 0;
                    }

                    .btn-content {
                        text-align: left;
                        flex: 1;
                    }

                    .btn-title {
                        font-weight: 700;
                        margin-bottom: 0.25rem;
                    }

                    .btn-subtitle {
                        font-size: 0.85rem;
                        opacity: 0.8;
                    }

                    .action-btn.primary {
                        background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                        color: white;
                    }

                    .action-btn.primary:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 25px rgba(7, 133, 134, 0.3);
                        color: white;
                    }

                    .action-btn.secondary {
                        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                        color: white;
                    }

                    .action-btn.secondary:hover {
                        transform: translateY(-3px);
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
                        transform: translateY(-3px);
                    }

                    @media (max-width: 768px) {
                        .results-title {
                            font-size: 2rem;
                        }
                        
                        .card-header, .card-body {
                            padding: 1.5rem;
                        }
                        
                        .health-grade-badge {
                            font-size: 1.5rem;
                        }
                        
                        .health-status-title {
                            font-size: 1.5rem;
                        }
                        
                        .meter-circle {
                            width: 100px;
                            height: 100px;
                        }
                        
                        .meter-inner {
                            width: 70px;
                            height: 70px;
                        }
                        
                        .score-display {
                            flex-direction: column;
                            gap: 0.5rem;
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
            <section className="health-hero-section">
                <div className="hero-background">
                    <div className="hero-pattern"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-content text-center">
                                <div className="hero-icon mb-4">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <h1 className="hero-title">Financial Health Assessment</h1>
                                <p className="hero-subtitle">
                                    Evaluate your financial well-being and get personalized recommendations for improvement
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
                                                        Analyzing...
                                                    </>
                                                ) : (
                                                    <>
                                                        Get Health Report
                                                        <i className="fas fa-heartbeat"></i>
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
                                                Next
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .health-hero-section {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    padding: 4rem 0 2rem;
                    position: relative;
                    overflow: hidden;
                    min-height: 400px;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(7, 133, 134, 0.9) 0%, rgba(10, 155, 157, 0.9) 100%);
                }

                .hero-pattern {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
                    background-size: 60px 60px;
                    animation: float 20s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    color: white;
                }

                .hero-icon {
                    width: 100px;
                    height: 100px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    margin-bottom: 2rem;
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
                    font-size: 0.9rem;
                }

                .progress-container {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    height: 8px;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }

                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
                    border-radius: 10px;
                    transition: width 0.3s ease;
                }

                .form-section {
                    background: #f8fffe;
                    padding: 4rem 0;
                    min-height: 600px;
                }

                .question-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(7, 133, 134, 0.15);
                    overflow: hidden;
                    animation: slideInUp 0.6s ease-out;
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .question-header {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    color: white;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .question-number {
                    width: 60px;
                    height: 60px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 700;
                    backdrop-filter: blur(10px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .question-progress {
                    flex: 1;
                }

                .mini-progress {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                    height: 6px;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                }

                .mini-progress-bar {
                    height: 100%;
                    background: white;
                    border-radius: 10px;
                    transition: width 0.3s ease;
                }

                .question-content {
                    padding: 3rem 2.5rem 2rem;
                }

                .question-title {
                    color: #078586;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    line-height: 1.4;
                }

                .options-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .option-item {
                    position: relative;
                }

                .option-input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                }

                .option-label {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem 1.5rem;
                    background: #f8fffe;
                    border: 2px solid #e6f7f7;
                    border-radius: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .option-label::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(7, 133, 134, 0.1), transparent);
                    transition: left 0.5s ease;
                }

                .option-label:hover::before {
                    left: 100%;
                }

                .option-label:hover {
                    border-color: #078586;
                    background: rgba(7, 133, 134, 0.05);
                    transform: translateX(5px);
                }

                .option-input:checked + .option-label {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    border-color: #078586;
                    color: white;
                    transform: translateX(10px);
                    box-shadow: 0 10px 25px rgba(7, 133, 134, 0.3);
                }

                .option-indicator {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #078586;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .option-input:checked + .option-label .option-indicator {
                    border-color: white;
                    background: white;
                }

                .option-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: transparent;
                    transition: all 0.3s ease;
                }

                .option-input:checked + .option-label .option-dot {
                    background: #078586;
                }

                .option-text {
                    flex: 1;
                }

                .option-content {
                    font-weight: 500;
                    font-size: 1rem;
                    line-height: 1.4;
                }

                .form-navigation {
                    padding: 2rem 2.5rem;
                    background: #f8fffe;
                    border-top: 2px solid #e6f7f7;
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
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .prev-btn {
                    background: #e9ecef;
                    color: #6c757d;
                }

                .prev-btn:hover {
                    background: #dee2e6;
                    transform: translateX(-3px);
                }

                .next-btn, .submit-btn {
                    background: linear-gradient(135deg, #078586 0%, #0a9b9d 100%);
                    color: white;
                }

                .next-btn:hover, .submit-btn:hover {
                    transform: translateX(3px);
                    box-shadow: 0 5px 15px rgba(7, 133, 134, 0.3);
                }

                .nav-btn.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none !important;
                }

                .nav-btn.disabled:hover {
                    transform: none;
                    box-shadow: none;
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top-color: white;
                    animation: spin 1s ease-in-out infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.25rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.1rem;
                    }
                    
                    .hero-icon {
                        width: 80px;
                        height: 80px;
                        font-size: 2rem;
                    }
                    
                    .question-header {
                        padding: 1.5rem;
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                    
                    .question-content {
                        padding: 2rem 1.5rem;
                    }
                    
                    .form-navigation {
                        padding: 1.5rem;
                    }
                    
                    .question-title {
                        font-size: 1.25rem;
                    }
                    
                    .option-label {
                        padding: 1rem;
                    }
                    
                    .nav-buttons {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    .nav-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }

                @media (max-width: 576px) {
                    .hero-title {
                        font-size: 1.75rem;
                    }
                    
                    .progress-info {
                        font-size: 0.8rem;
                    }
                    
                    .question-number {
                        width: 50px;
                        height: 50px;
                        font-size: 1.25rem;
                    }
                }
            `}</style>
        </Layout>
    )
}