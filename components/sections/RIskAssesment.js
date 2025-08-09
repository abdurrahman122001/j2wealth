// components/sections/RiskAssessmentHero.js
import { useRiskAssessment } from '@/context/RiskAssessmentContext'

const RiskAssessmentHero = () => {
    const { currentStep, totalSteps } = useRiskAssessment()
    
    const progressPercentage = (currentStep / totalSteps) * 100

    return (
        <>
            <section className="hero-section bg-gradient-primary py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-content text-center text-white">
                                <h1 className="hero-title display-4 fw-bold mb-3">
                                    Investment Risk Assessment
                                </h1>
                                <p className="hero-subtitle lead mb-4">
                                    Discover your investment personality and get personalized recommendations
                                </p>
                                <div className="progress-wrapper mx-auto" style={{maxWidth: '400px'}}>
                                    <div className="progress mb-3" style={{height: '8px'}}>
                                        <div 
                                            className="progress-bar bg-success" 
                                            role="progressbar" 
                                            style={{width: `${progressPercentage}%`}}
                                            aria-valuenow={progressPercentage}
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <p className="progress-text small">
                                        Step {currentStep} of {totalSteps} ({Math.round(progressPercentage)}% Complete)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                
                .progress-bar {
                    transition: width 0.3s ease;
                }
                
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </>
    )
}

export default RiskAssessmentHero