import React from 'react';
import { Check } from 'lucide-react';
import './index.scss';
const PRICING_PLANS = {
    basic: {
        planType: 'basic',
        title: 'Basic',
        price: '$4.99',
        period: '/month',
        creditsInfo: '10,000 Credits monthly',
        creditsInfoDescription: '10,000 extra credits first month [LIMITED TIME]',
        buttonLink: 'https://buy.stripe.com/28E8wQeqhfPK2g5g014Ni05',
        // buttonLink: 'https://buy.stripe.com/test_00w6oIfulavq6wl7tv4Ni04',
        features: [
            '1 daily Global Chat Summary',
            '250 Group Chat Summary ',
            '200 Images Summary ',
            '60 mins video & Voice Summary',
            '10k-characters AI Translation',
            '10k-characters Grammar Check',
            '60-pages Web & Doc Summary',
            'AI Chat Folders',
        ],
        buttonText: 'Get Started',
        isSelected: false,
    },
    pro: {
        planType: 'pro',
        title: 'Pro',
        price: '$9.99',
        period: '/month',
        creditsInfo: '60,000 Credits monthly',
        creditsInfoDescription: '60,000 extra credits first month [LIMITED TIME]',
        buttonLink: 'https://buy.stripe.com/28EdRa2HzdHC3k9g014Ni07',
        // buttonLink: 'https://buy.stripe.com/test_dRm00keqh1YU4oddRT4Ni06',
        features: [
            '3 daily Global Chat Summary',
            '1k Group Chat Summary',
            '1k Images Summary',
            '300 min Video & Voice Summary',
            '300k-characters AI Translation',
            '300k-characters Grammar Check',
            '300 pages Web & Doc Summary',
            '120 Schedule Meetings',
            'Urgent Alert',
            'AI Chat Folders',
            'Priority Support',
        ],
        buttonText: 'Upgrade',
        isSelected: true,
    },
    plus: {
        planType: 'plus',
        title: 'Plus',
        price: '$19.99',
        period: '/month',
        creditsInfo: '120,000 Credits monthly',
        creditsInfoDescription: '120,000 extra credits first month [LIMITED TIME]',
        buttonLink: 'https://buy.stripe.com/14A3cwbe5fPKcUJ4hj4Ni08',
        // buttonLink: 'https://buy.stripe.com/test_28EdRa2HzdHC3k9g014Ni07',
        features: [
            '3 daily Global Chat Summary',
            '2k Group Chat Summary ',
            '2k Images Summary ',
            '600 min Video & Voice Summary',
            '600k-characters AI Translation',
            '600k-characters Grammar Check',
            '600 pages Web & Doc Summary',
            'Unlimited Schedule Meetings',
            'Urgent Alert',
            'AI Chat Folders',
            'Users Portrait',
            'Priority Support',
        ],
        buttonText: 'Upgrade',
        isSelected: false,
    },
};
export const PricePage = () => {
    return (
        <div className='px-[24px] pt-[120px] pb-[100px]'>
            <section className="flex flex-col items-center gap-4 pt-12 md:pt-20 pb-8 md:pb-12 px-5 md:px-20 w-full">
                <h1 className="font-display text-[56px] md:text-[48px] font-[800] text-[var(--text-primary)] text-center">
                    Simple, Transparent Pricing
                </h1>
                <p className="font-body text-[20px] text-[#666] text-center max-w-[600px]">
                    Choose the plan that fits your needs. Cancel anytime.
                </p>
            </section>
            <div className="flex gap-[24px] justify-center mt-[24px]">
                {Object.keys(PRICING_PLANS).map((planType) => {
                    const plan = PRICING_PLANS[planType];
                    return (
                        <div
                            key={planType}
                            className="pricingCard"
                        >
                            <div className="topContent">
                                <div className="cardHeader">
                                    <h3 className="planTitle">{plan.title}</h3>
                                </div>

                                <div className="pricing">
                                    <div className="priceRow">
                                        <span className="price">{plan.price}</span>
                                        <span className="period">{plan.period}</span>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <div className="creditsInfo">{plan.creditsInfo}</div>
                                    <div className="creditsInfoDescription">{plan.creditsInfoDescription}</div>
                                </div>
                            </div>

                            <div className="botInfo">
                                <ul className="features">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="feature">
                                            <span className="listdot">
                                                <Check className="checkIcon" size={12} />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}