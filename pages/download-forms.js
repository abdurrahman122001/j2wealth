import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Download() {
    const [activeTab, setActiveTab] = useState('MF FORM');

    const downloadData = {
        'MF FORM': [
            { name: '360-ONE MF Common Application Form.pdf', downloadUrl: '#' },
            { name: 'Aditya Birla MF Common-Application-Form.pdf', downloadUrl: '#' },
            { name: 'AXIS MF Common Application FORM.pdf', downloadUrl: '#' },
            { name: 'Bajaj MF Common Application Form.pdf', downloadUrl: '#' },
            { name: 'Bandhan MF Common Application Form.pdf', downloadUrl: '#' },
            { name: 'Baroda BNP Common Application Form.pdf', downloadUrl: '#' },
            { name: 'Canara Robeco MF Common Application Form.pdf', downloadUrl: '#' },
            { name: 'DSP MF Common Application Form.pdf', downloadUrl: '#' },
            { name: 'Edelweiss MF Common Application Form.pdf', downloadUrl: '#' }
        ],
        'SIP FORM': [
            { name: 'HDFC SIP Application Form.pdf', downloadUrl: '#' },
            { name: 'ICICI SIP Registration Form.pdf', downloadUrl: '#' },
            { name: 'SBI SIP Mandate Form.pdf', downloadUrl: '#' },
            { name: 'Axis SIP Common Form.pdf', downloadUrl: '#' },
            { name: 'Kotak SIP Application Form.pdf', downloadUrl: '#' }
        ],
        'STP FORM': [
            { name: 'HDFC STP Application Form.pdf', downloadUrl: '#' },
            { name: 'ICICI STP Transfer Form.pdf', downloadUrl: '#' },
            { name: 'SBI STP Registration Form.pdf', downloadUrl: '#' },
            { name: 'Axis STP Common Form.pdf', downloadUrl: '#' },
            { name: 'Kotak STP Application Form.pdf', downloadUrl: '#' }
        ],
        'SWP FORM': [
            { name: 'HDFC SWP Application Form.pdf', downloadUrl: '#' },
            { name: 'ICICI SWP Withdrawal Form.pdf', downloadUrl: '#' },
            { name: 'SBI SWP Registration Form.pdf', downloadUrl: '#' },
            { name: 'Axis SWP Common Form.pdf', downloadUrl: '#' },
            { name: 'Kotak SWP Application Form.pdf', downloadUrl: '#' }
        ],
        'OTHER': [
            { name: 'KYC Form.pdf', downloadUrl: '#' },
            { name: 'Change of Address Form.pdf', downloadUrl: '#' },
            { name: 'Nomination Form.pdf', downloadUrl: '#' },
            { name: 'Account Transfer Form.pdf', downloadUrl: '#' },
            { name: 'Statement Request Form.pdf', downloadUrl: '#' }
        ]
    };

    const tabs = ['MF FORM', 'SIP FORM', 'STP FORM', 'SWP FORM', 'OTHER'];

    const getTabColor = (tab) => {
        const colors = {
            'MF FORM': '#E8F4FD',
            'SIP FORM': '#4A90E2',
            'STP FORM': '#5BA3F5',
            'SWP FORM': '#6BB6FF',
            'OTHER': '#7B68EE'
        };
        return colors[tab] || '#078586';
    };

    return (
        <>
            <Layout breadcrumbTitle="Downloads" headerStyle={4} footerStyle={4}>
                <div className="auto-container">
                    <div className="row default_row">
                        <div id="primary" className="content-area service col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {/*===============spacing==============*/}
                            <div className="pd_top_90" />
                            {/*===============spacing==============*/}
                            <main id="main" className="site-main" role="main">
                                <article className="clearfix service type-service status-publish has-post-thumbnail hentry">
                                    {/* Download Form Section */}
                                    <div className="download-section" style={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        marginBottom: '40px',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        {/* Header with ARN and EUIN */}
                                        <div style={{
                                            padding: '20px',
                                            borderBottom: '1px solid #e0e0e0',
                                            backgroundColor: '#f8f9fa'
                                        }}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                                        <label style={{
                                                            fontWeight: '600',
                                                            color: '#333',
                                                            marginRight: '15px',
                                                            minWidth: '80px'
                                                        }}>ARN NO.</label>
                                                        <input 
                                                            type="text" 
                                                            value="157200" 
                                                            readOnly
                                                            style={{
                                                                border: '1px solid #ddd',
                                                                padding: '8px 12px',
                                                                borderRadius: '4px',
                                                                backgroundColor: 'white',
                                                                width: '150px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                                        <label style={{
                                                            fontWeight: '600',
                                                            color: '#333',
                                                            marginRight: '15px',
                                                            minWidth: '80px'
                                                        }}>EUIN NO.</label>
                                                        <input 
                                                            type="text" 
                                                            placeholder="Enter EUIN Number"
                                                            style={{
                                                                border: '1px solid #ddd',
                                                                padding: '8px 12px',
                                                                borderRadius: '4px',
                                                                backgroundColor: 'white',
                                                                width: '150px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tabs */}
                                        <div className="tab-container">
                                            <div className="tab-header" style={{
                                                display: 'flex',
                                                borderBottom: '1px solid #e0e0e0'
                                            }}>
                                                {tabs.map((tab, index) => (
                                                    <button
                                                        key={tab}
                                                        onClick={() => setActiveTab(tab)}
                                                        style={{
                                                            flex: 1,
                                                            padding: '15px 20px',
                                                            border: 'none',
                                                            backgroundColor: activeTab === tab ? getTabColor(tab) : '#f8f9fa',
                                                            color: activeTab === tab ? (tab === 'MF FORM' ? '#333' : 'white') : '#666',
                                                            fontWeight: activeTab === tab ? '600' : '500',
                                                            fontSize: '14px',
                                                            cursor: 'pointer',
                                                            borderBottom: activeTab === tab ? `3px solid ${tab === 'MF FORM' ? '#4A90E2' : getTabColor(tab)}` : 'none',
                                                            transition: 'all 0.3s ease',
                                                            borderRight: index < tabs.length - 1 ? '1px solid #e0e0e0' : 'none'
                                                        }}
                                                    >
                                                        {tab}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Tab Content */}
                                            <div className="tab-content" style={{
                                                backgroundColor: 'white'
                                            }}>
                                                <table style={{
                                                    width: '100%',
                                                    borderCollapse: 'collapse'
                                                }}>
                                                    <tbody>
                                                        {downloadData[activeTab]?.map((item, index) => (
                                                            <tr key={index} style={{
                                                                borderBottom: index < downloadData[activeTab].length - 1 ? '1px solid #f0f0f0' : 'none'
                                                            }}>
                                                                <td style={{
                                                                    padding: '15px 20px',
                                                                    fontSize: '14px',
                                                                    color: '#333',
                                                                    fontWeight: '500'
                                                                }}>
                                                                    {item.name}
                                                                </td>
                                                                <td style={{
                                                                    padding: '15px 20px',
                                                                    textAlign: 'right',
                                                                    width: '120px'
                                                                }}>
                                                                    <Link 
                                                                        href={item.downloadUrl}
                                                                        style={{
                                                                            color: '#078586',
                                                                            textDecoration: 'none',
                                                                            fontWeight: '600',
                                                                            fontSize: '14px',
                                                                            padding: '8px 16px',
                                                                            border: '1px solid #078586',
                                                                            borderRadius: '4px',
                                                                            transition: 'all 0.3s ease',
                                                                            display: 'inline-block'
                                                                        }}
                                                                        onMouseOver={(e) => {
                                                                            e.target.style.backgroundColor = '#078586';
                                                                            e.target.style.color = 'white';
                                                                        }}
                                                                        onMouseOut={(e) => {
                                                                            e.target.style.backgroundColor = 'transparent';
                                                                            e.target.style.color = '#078586';
                                                                        }}
                                                                    >
                                                                        Download
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </article>
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
                                    <h2 style={{color: 'white'}}>Need Help with Forms?</h2>
                                    <p style={{color: 'rgba(255,255,255,0.8)'}}>Contact our support team for assistance with form completion and submission. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Contact">
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
                                                    defaultValue="Get Help" 
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