import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function PayPremiumOnline() {
    const [selectedInsurance, setSelectedInsurance] = useState('');
    const [formData, setFormData] = useState({
        policyNumber: '',
        mobileNumber: '',
        email: '',
        premiumAmount: '',
        paymentMethod: 'credit_card'
    });

    const insuranceOptions = [
        {
            id: 'general',
            title: 'General Insurance',
            description: 'Motor, Home, Travel & Other General Insurance Premiums',
            icon: '/assets/images/general_insurance.jpg',
            color: '#FF6B6B'
        },
        {
            id: 'life',
            title: 'Life Insurance',
            description: 'Term Life, Whole Life & ULIP Premium Payments',
            icon: '/assets/images/life_insurance.jpg',
            color: '#4ECDC4'
        },
        {
            id: 'health',
            title: 'Health Insurance',
            description: 'Individual & Family Health Insurance Premiums',
            icon: '/assets/images/health_insurance.jpg',
            color: '#45B7D1'
        }
    ];

    const popularInsurers = [
        { name: 'LIC of India', logo: '/assets/images/lic-logo.png' },
        { name: 'HDFC Life', logo: '/assets/images/hdfc-life-logo.png' },
        { name: 'ICICI Prudential', logo: '/assets/images/icici-prudential-logo.png' },
        { name: 'SBI Life', logo: '/assets/images/sbi-life-logo.png' },
        { name: 'Bajaj Allianz', logo: '/assets/images/bajaj-allianz-logo.png' },
        { name: 'Max Life', logo: '/assets/images/max-life-logo.png' },
        { name: 'TATA AIG', logo: '/assets/images/tata-aig-logo.png' },
        { name: 'New India Assurance', logo: '/assets/images/new-india-logo.png' },
        { name: 'Oriental Insurance', logo: '/assets/images/oriental-logo.png' },
        { name: 'United India', logo: '/assets/images/united-india-logo.png' },
        { name: 'National Insurance', logo: '/assets/images/national-insurance-logo.png' },
        { name: 'Star Health', logo: '/assets/images/star-health-logo.png' }
    ];

    const paymentMethods = [
        { id: 'credit_card', name: 'Credit Card', icon: 'fa-credit-card' },
        { id: 'debit_card', name: 'Debit Card', icon: 'fa-credit-card' },
        { id: 'net_banking', name: 'Net Banking', icon: 'fa-university' },
        { id: 'upi', name: 'UPI Payment', icon: 'fa-mobile' },
        { id: 'wallet', name: 'Digital Wallet', icon: 'fa-wallet' }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment details:', { selectedInsurance, ...formData });
        // Handle payment processing here
    };

    return (
        <>
            <Layout breadcrumbTitle="Pay Premium Online" headerStyle={4} footerStyle={4}>
                <div className="auto-container">
                    <div className="row default_row">
                        <div id="primary" className="content-area service col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <main id="main" className="site-main" role="main">
                                
                                {/* Page Header */}
                                <div className="section-header text-center" style={{marginBottom: '50px'}}>
                                    <h1 style={{color: '#078586', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px'}}>
                                        Pay Your Insurance Premium Online
                                    </h1>
                                    <p style={{fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto'}}>
                                        Quick, secure, and hassle-free premium payments for all your insurance policies
                                    </p>
                                </div>

                                {/* Insurance Type Selection */}
                                <div className="insurance-selection" style={{marginBottom: '50px'}}>
                                    <h2 style={{color: '#333', textAlign: 'center', marginBottom: '40px', fontSize: '28px'}}>
                                        Select Insurance Type
                                    </h2>
                                    <div className="row">
                                        {insuranceOptions.map((option) => (
                                            <div key={option.id} className="col-lg-4 col-md-6 col-sm-12">
                                                <div 
                                                    className="insurance-card"
                                                    onClick={() => setSelectedInsurance(option.id)}
                                                    style={{
                                                        padding: '30px',
                                                        border: selectedInsurance === option.id ? `3px solid ${option.color}` : '2px solid #e0e0e0',
                                                        borderRadius: '12px',
                                                        textAlign: 'center',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        backgroundColor: selectedInsurance === option.id ? `${option.color}15` : 'white',
                                                        marginBottom: '30px',
                                                        boxShadow: selectedInsurance === option.id ? `0 8px 25px ${option.color}30` : '0 4px 15px rgba(0,0,0,0.1)'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        if (selectedInsurance !== option.id) {
                                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                                        }
                                                    }}
                                                    onMouseOut={(e) => {
                                                        if (selectedInsurance !== option.id) {
                                                            e.currentTarget.style.transform = 'translateY(0)';
                                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                                        }
                                                    }}
                                                >
                                                    <img 
                                                        src={option.icon}
                                                        alt={option.title}
                                                        style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            borderRadius: '50%',
                                                            objectFit: 'cover',
                                                            margin: '0 auto 20px'
                                                        }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextElementSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        backgroundColor: option.color,
                                                        borderRadius: '50%',
                                                        display: 'none',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        margin: '0 auto 20px',
                                                        fontSize: '36px',
                                                        color: 'white'
                                                    }}>
                                                        {option.id === 'general' && <i className="fa fa-car" />}
                                                        {option.id === 'life' && <i className="fa fa-heart" />}
                                                        {option.id === 'health' && <i className="fa fa-plus-square" />}
                                                    </div>
                                                    <h3 style={{color: '#333', fontSize: '22px', fontWeight: 'bold', marginBottom: '15px'}}>
                                                        {option.title}
                                                    </h3>
                                                    <p style={{color: '#666', fontSize: '14px', lineHeight: '1.6'}}>
                                                        {option.description}
                                                    </p>
                                                    {selectedInsurance === option.id && (
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: '15px',
                                                            right: '15px',
                                                            width: '25px',
                                                            height: '25px',
                                                            backgroundColor: option.color,
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white',
                                                            fontSize: '12px'
                                                        }}>
                                                            <i className="fa fa-check" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Form */}
                                {selectedInsurance && (
                                    <div className="payment-form-section" style={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '12px',
                                        padding: '40px',
                                        marginBottom: '50px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                    }}>
                                        <h2 style={{color: '#078586', fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center'}}>
                                            Premium Payment Details
                                        </h2>
                                        
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group" style={{marginBottom: '25px'}}>
                                                        <label style={{fontWeight: '600', color: '#333', marginBottom: '8px', display: 'block'}}>
                                                            Policy Number *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="policyNumber"
                                                            value={formData.policyNumber}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="Enter your policy number"
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px 15px',
                                                                border: '2px solid #e0e0e0',
                                                                borderRadius: '8px',
                                                                fontSize: '14px',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onFocus={(e) => e.target.style.borderColor = '#078586'}
                                                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group" style={{marginBottom: '25px'}}>
                                                        <label style={{fontWeight: '600', color: '#333', marginBottom: '8px', display: 'block'}}>
                                                            Mobile Number *
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            name="mobileNumber"
                                                            value={formData.mobileNumber}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="Enter mobile number"
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px 15px',
                                                                border: '2px solid #e0e0e0',
                                                                borderRadius: '8px',
                                                                fontSize: '14px',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onFocus={(e) => e.target.style.borderColor = '#078586'}
                                                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group" style={{marginBottom: '25px'}}>
                                                        <label style={{fontWeight: '600', color: '#333', marginBottom: '8px', display: 'block'}}>
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="Enter email address"
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px 15px',
                                                                border: '2px solid #e0e0e0',
                                                                borderRadius: '8px',
                                                                fontSize: '14px',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onFocus={(e) => e.target.style.borderColor = '#078586'}
                                                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group" style={{marginBottom: '25px'}}>
                                                        <label style={{fontWeight: '600', color: '#333', marginBottom: '8px', display: 'block'}}>
                                                            Premium Amount (₹) *
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="premiumAmount"
                                                            value={formData.premiumAmount}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="Enter premium amount"
                                                            min="1"
                                                            style={{
                                                                width: '100%',
                                                                padding: '12px 15px',
                                                                border: '2px solid #e0e0e0',
                                                                borderRadius: '8px',
                                                                fontSize: '14px',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onFocus={(e) => e.target.style.borderColor = '#078586'}
                                                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment Method Selection */}
                                            <div className="payment-methods" style={{marginBottom: '30px'}}>
                                                <label style={{fontWeight: '600', color: '#333', marginBottom: '15px', display: 'block'}}>
                                                    Select Payment Method *
                                                </label>
                                                <div className="row">
                                                    {paymentMethods.map((method) => (
                                                        <div key={method.id} className="col-lg-6 col-md-6 col-sm-12">
                                                            <div
                                                                onClick={() => setFormData({...formData, paymentMethod: method.id})}
                                                                style={{
                                                                    padding: '15px 20px',
                                                                    border: formData.paymentMethod === method.id ? '2px solid #078586' : '2px solid #e0e0e0',
                                                                    borderRadius: '8px',
                                                                    cursor: 'pointer',
                                                                    marginBottom: '15px',
                                                                    backgroundColor: formData.paymentMethod === method.id ? '#f0fffe' : 'white',
                                                                    transition: 'all 0.3s ease',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}
                                                            >
                                                                <i className={`fa ${method.icon}`} style={{
                                                                    fontSize: '20px',
                                                                    color: formData.paymentMethod === method.id ? '#078586' : '#666',
                                                                    marginRight: '15px'
                                                                }} />
                                                                <span style={{
                                                                    color: formData.paymentMethod === method.id ? '#078586' : '#333',
                                                                    fontWeight: formData.paymentMethod === method.id ? '600' : '500'
                                                                }}>
                                                                    {method.name}
                                                                </span>
                                                                {formData.paymentMethod === method.id && (
                                                                    <i className="fa fa-check-circle" style={{
                                                                        color: '#078586',
                                                                        marginLeft: 'auto'
                                                                    }} />
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    style={{
                                                        backgroundColor: '#078586',
                                                        color: 'white',
                                                        padding: '15px 40px',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        fontSize: '16px',
                                                        fontWeight: 'bold',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        minWidth: '200px'
                                                    }}
                                                    onMouseOver={(e) => e.target.style.backgroundColor = '#066B6B'}
                                                    onMouseOut={(e) => e.target.style.backgroundColor = '#078586'}
                                                >
                                                    <i className="fa fa-credit-card" style={{marginRight: '10px'}} />
                                                    Pay Premium Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {/* Popular Insurers */}
                                <div className="popular-insurers" style={{marginBottom: '50px'}}>
                                    <h2 style={{color: '#333', textAlign: 'center', marginBottom: '40px', fontSize: '28px'}}>
                                        Popular Insurance Companies
                                    </h2>
                                    <div className="row">
                                        {popularInsurers.map((insurer, index) => (
                                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                                <div style={{
                                                    padding: '20px',
                                                    backgroundColor: 'white',
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: '8px',
                                                    textAlign: 'center',
                                                    marginBottom: '20px',
                                                    transition: 'all 0.3s ease',
                                                    cursor: 'pointer',
                                                    minHeight: '120px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                }}>
                                                    <img 
                                                        src={insurer.logo}
                                                        alt={insurer.name}
                                                        style={{
                                                            maxWidth: '80px',
                                                            maxHeight: '50px',
                                                            objectFit: 'contain',
                                                            marginBottom: '15px'
                                                        }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextElementSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        backgroundColor: '#f8f9fa',
                                                        borderRadius: '8px',
                                                        margin: '0 auto 15px',
                                                        display: 'none',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '24px',
                                                        color: '#078586'
                                                    }}>
                                                        <i className="fa fa-shield" />
                                                    </div>
                                                    <h4 style={{fontSize: '14px', fontWeight: '600', color: '#333', margin: 0}}>
                                                        {insurer.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Security Features */}
                                <div className="security-section" style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '40px',
                                    borderRadius: '12px',
                                    marginBottom: '50px'
                                }}>
                                    <h2 style={{color: '#078586', textAlign: 'center', marginBottom: '30px', fontSize: '24px'}}>
                                        Secure & Trusted Payment Platform
                                    </h2>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 text-center">
                                            <div style={{marginBottom: '20px'}}>
                                                <i className="fa fa-shield" style={{
                                                    fontSize: '48px',
                                                    color: '#078586',
                                                    marginBottom: '15px'
                                                }} />
                                                <h4 style={{color: '#333', fontWeight: '600', marginBottom: '10px'}}>
                                                    SSL Encrypted
                                                </h4>
                                                <p style={{color: '#666', fontSize: '14px'}}>
                                                    256-bit SSL encryption for secure transactions
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 text-center">
                                            <div style={{marginBottom: '20px'}}>
                                                <i className="fa fa-clock-o" style={{
                                                    fontSize: '48px',
                                                    color: '#078586',
                                                    marginBottom: '15px'
                                                }} />
                                                <h4 style={{color: '#333', fontWeight: '600', marginBottom: '10px'}}>
                                                    Instant Processing
                                                </h4>
                                                <p style={{color: '#666', fontSize: '14px'}}>
                                                    Real-time payment processing and confirmation
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 text-center">
                                            <div style={{marginBottom: '20px'}}>
                                                <i className="fa fa-headphones" style={{
                                                    fontSize: '48px',
                                                    color: '#078586',
                                                    marginBottom: '15px'
                                                }} />
                                                <h4 style={{color: '#333', fontWeight: '600', marginBottom: '10px'}}>
                                                    24/7 Support
                                                </h4>
                                                <p style={{color: '#666', fontSize: '14px'}}>
                                                    Round-the-clock customer support assistance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>

                {/*-newsletter-*/}
                <section className="newsteller style_one" style={{backgroundColor: '#078586'}}>
                    {/*===============spacing==============*/}
                    <div className="pd_top_40" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h2 style={{color: 'white'}}>Need Help with Premium Payment?</h2>
                                    <p style={{color: 'rgba(255,255,255,0.8)'}}>Contact our support team for assistance with premium payments and policy queries.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Support">
                                            <div className="mc4wp-form-fields">
                                                <input 
                                                    type="email" 
                                                    name="EMAIL" 
                                                    placeholder="Your email for support" 
                                                    required 
                                                    style={{border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white'}}
                                                />
                                                <input 
                                                    type="submit" 
                                                    defaultValue="Get Support" 
                                                    style={{backgroundColor: 'white', color: '#078586', fontWeight: 'bold'}}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </section>
            </Layout>
        </>
    )
}