// import React from 'react'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
function MainBody({ currentSec }) {
    const referRef = useRef();
    const orderRef = useRef();
    const friendRef = useRef();
    const earnRef = useRef();
    const redeemRef = useRef();
    const exploreRef = useRef();
    const termsRef = useRef();
    useEffect(() => {
        // const currentSec = parseInt(currentSec)
        if (currentSec === 0) {
            window.scrollTo({
                top: referRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
        if (currentSec === 1) {
            window.scrollTo({
                top: orderRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
        if (currentSec === 2) {
            window.scrollTo({
                top: friendRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
        if (currentSec === 3) {
            window.scrollTo({
                top: earnRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
        if (currentSec === 4) {
            window.scrollTo({
                top: redeemRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
        if (currentSec === 5) {
            window.scrollTo({
                top: exploreRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
        if (currentSec === 6) {
            window.scrollTo({
                top: termsRef.current.offsetTop - 100,
                behavior: "smooth"
            })
        }
    }, [currentSec])
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0)
    }
    return (
        <main className='main'>
            <div ref={referRef} id="refer" className='sec'>
                <h1>Referral Program</h1>
                <p>Our goal is to help Tesla owners share their passion for Tesla’s products and our mission — to accelerate the world’s transition to sustainable energy. As an owner, every time you bring a new friend or family member into the Tesla community, you and your friend both earn credits — you earn Referral Credits and your friend earns Buyer Credits. You also earn Loyalty Credits when you purchase additional qualifying Tesla products, as a thank you for being a loyal Tesla owner.</p>
                <p>All of your credits have equal value and accrue under one balance in your Loot Box. Credits can be redeemed for Tesla Referral awards in the Referral Shop of the Loot Box, after the Grant Date — the date when the solar system is activated.</p>
                <p>While there is no limit to the number of credits you can earn, credits do expire 12 months from the Grant Date. Referring additional friends or purchasing additional qualifying products on your existing Tesla account extends the expiration date for all of the credits by 12 months from the most recent Grant Date, as long as the solar activation date precedes the previous credit expiration date. Credit amounts are subject to change until the order is placed and are not redeemable for cash value. Credits cannot be transferred between accounts or assigned to other people. The Referral Program is subject to these <Link to="terms">Terms and Conditions</Link>.</p>
                <p>If you or a friend placed an order through a referral link prior to November 21, 2022, your order falls under a previous Referral Program. <Link>Learn more about the previous phases of the Referral Program.</Link>
                </p>
                <p>Thank you for supporting the world’s transition to sustainable energy.</p>
            </div>
            <div ref={orderRef} id="order" className='sec'>
                <h1>Place an Order</h1>
                <p>When you purchase a qualifying Tesla product through a referral link, you and your friend will both earn credits. The referral cannot be added after the order is placed.</p>
                <h4>To purchase with a referral link:</h4>
                <p className='row'>1. <li>Visit your friend’s referral link.</li></p>
                <p className='row'>2. <li>Purchase the Tesla product of your choice from the referral link.</li></p>
                <p className='row'>3. <li>After you place the order, credits will appear as ‘pending’ in the referrer’s Loot Box until the Grant Date.</li></p>
                <p><Link to="#refer" onClick={scrollToTop}>Back to Top</Link></p>
            </div>
            <div ref={friendRef} id="friend" className='sec'>
                <h1>Refer a Friend</h1>
                <p>Share your referral link with your friends and family directly from your Loot Box.</p>
                <h4>To refer a friend:</h4>
                <p className='row'>1. <li>Go to your Loot Box located in the Tesla app.</li></p>
                <p className='row'>2. <li>View the amount of Referral Credits you will earn and the Buyer Credits your friend will receive for each qualifying Tesla product.</li></p>
                <p className='row'>3. <li>Tap ‘Refer.’</li></p>
                <p className='row'>4. <li>From your list of contacts, select the friend you’d like to refer and send the referral message. You can also tap the share icon in the upper-right corner to send your referral link.</li></p>
                <p className='row'>5. <li>After your friend places an order, credits will appear as ‘pending’ in your Loot Box until the Grant Date.</li></p>
                <p><Link to="#refer" onClick={scrollToTop}>Back to Top</Link></p>
            </div>
            <div ref={earnRef} id="earn" className='sec'>
                <h1>Earn Loyalty Credits</h1>
                <p>Existing owners automatically earn Loyalty Credits when they purchase additional qualifying Tesla products using the same Tesla Account. Loyalty Credits are automatically granted; there is no referral code or link needed.</p>
                <h4>To earn Loyalty Credits:</h4>
                <p className='row'>1.<li>Go to your Loot Box located in the Tesla app.</li></p>
                <p className='row'>2. <li>Tap ‘Loyalty’ on the Credits screen to view qualifying products.</li></p>
                <p className='row'>3. <li>Purchase the Tesla product of your choice using your email associated with your existing Tesla products.</li></p>
                <p className='row'>4. <li>After you place the order, credits will automatically appear as ‘pending’ in your Loot Box until the Grant Date.</li></p>
                <p>To earn Loyalty Credits, you must own (or have previously owned) a qualifying product, and your subsequent purchase of an additional qualifying product must be made using the same Tesla Account. Credits cannot be transferred between accounts — even if you own both.</p>
                <p>If an existing owner attempts to order through a referral link (whether their own or a friend’s), they will not qualify for Buyer Credits, nor will the referrer qualify for Referral Credits, because the buyer is already part of the Tesla community. Instead, the owner automatically earns Loyalty Credits.</p>
                <p><Link to="#refer" onClick={scrollToTop}>Back to Top</Link></p>
            </div>
            <div ref={redeemRef} id="redeem" className='sec'>
                <h1>Redeem Credits for Awards</h1>
                <p>Visit your Loot Box in the Tesla app to view your credit balance and shop for awards.</p>
                <h4>To shop with credits:</h4>
                <p className='row'>1.<li>Go to your Loot Box located in the Tesla app.</li></p>
                <p className='row'>2.<li>Tap ‘Shop.’</li></p>
                <p className='row'>3.<li>View the available awards and the number of credits needed to claim each award.</li></p>
                <p className='row'>4.<li>Select your award.</li></p>
                <p className='row'>5.<li>Tap ‘Redeem.’</li></p>
                <p className='row'>6.<li>Enter your shipping address and review your remaining credit balance upon redemption.</li></p>
                <p className='row'>7.<li>Tap ‘Redeem Credits’ to claim your award.</li></p>
                <p>All credit redemptions are final. No returns or exchanges are accepted. Credits can only be redeemed for awards in the Loot Box of the Tesla app. Credits cannot be used to purchase merchandise or accessories on Tesla Shop, nor can they be applied to any other Tesla product or service.</p>
                <p><Link to="#refer" onClick={scrollToTop}>Back to Top</Link></p>
            </div>
            <div ref={exploreRef} id="explore" className='sec'>
                <h1>Explore Your Loot Box</h1>
                <p>Information about Tesla’s Referral Program and your referral activity are available in the Loot Box of the Tesla app.</p>
                <h4><li>Referral Links</li></h4>
                <p className='explore'>View and share your referral link with friends and family directly from the Loot Box.</p>
                <h4><li>Qualifying Tesla Products for the Referral Program</li></h4>
                <p className="explore">
                    View the Tesla products that are included in the Referral Program on the Credits screen in your Loot Box. For each product, you will find the number of Referral Credits or Loyalty Credits you will earn, as well as the Buyer Credits your friend will receive upon delivery or activation of the Tesla product.
                </p>
                <h4><li>Referral Shop with Available Awards</li></h4>
                <p className="explore">
                    Explore available awards and the number of credits you need to redeem each award. Shop with the credits you have earned in the Referral Shop.
                </p>
                <h4><li>Referral History</li></h4>
                <p className="explore">
                    On the Credits screen, tap ‘History’ to view friends you have referred, as well as the status of your referral.
                </p>
                <h4><li>Credit History</li></h4>
                <p className="explore">
                    On the Redeem screen of your Loot Box, tap ‘Balance’ to view your available balance and credit transaction history.
                </p>
                <h4><li>Expiration Dates</li></h4>
                <p className="explore">
                    Your credits expire 12 months and Supercharging miles expire 6 months from their respective Grant Dates.
                </p>
                <p className="explore">
                    If you earn additional credits, the expiration date for all of your credits will be extended by 12 months from the most recent Grant Date. In order to extend the expiration date for all of your credits, the delivery or solar activation date must precede the previous credit expiration date.
                </p>
                <p className="explore">
                    If you redeem credits for additional Supercharging miles, the expiration date for all of your Supercharging miles will be extended by 6 months, up to 36 months.
                </p>
                <p className="explore">
                    <Link>Download the Tesla app </Link> to access the Loot Box.
                </p>
                <p><Link to="#refer" onClick={scrollToTop}>Back to Top</Link></p>
            </div>
            <div ref={termsRef} id="terms" className='sec'>
                <h1>Terms and Conditions</h1>
                <p>Effective November 21, 2022</p>
                <p>By participating in Tesla’s Referral Program, you are agreeing to these Terms and Conditions and understand that they are subject to change. Referral Credits are available to current owners in the Tesla community who refer first-time Tesla customers. Buyer Credits are also granted to first-time customers who order a qualifying Tesla product through a referral link. Loyalty Credits are granted to current Tesla owners who are purchasing additional Tesla products for themselves. Credit values and award availability may differ by geographic region and Tesla product. Credit values, award offerings, and program eligibility are determined by the registration or installation address of the buyer and the residency address of the referrer. Credits are awarded after the installation and activation of a Tesla energy product (the “Grant Date”). Tesla specifically disclaims any representations or warranties related to the availability of awards, which are subject to change and of limited quantity. Awards will be made available in the Loot Box section of the Tesla app.</p>
                <p>
                    Tesla customer must be at least 18 years old to be eligible for credits, which are non-transferable and not redeemable for cash. Credits must be redeemed within 12 months of their Grant Date, or they will expire. All credit redemptions are final. No returns or exchanges are accepted. Credits can only be redeemed for awards in the Loot Box of the Tesla app. Credits cannot be redeemed for merchandise or accessories on Shop.Tesla.com or applied to any other Tesla product or service. Credits cannot be applied retroactively or to awards that are no longer available in the Referral Shop. Referrals cannot be applied after an order has been placed. The customer is responsible for all taxes and local requirements and fees. Program and awards are conditional on and subject to local laws and regulations. Unfortunately, Ohio and Virginia residents are not eligible for Referral Program awards. Merchandise and accessories awards are only available in regions where Tesla Shop has launched. Only primary account holders can redeem credits for awards. The customer may not be a customer-facing employee, legal representative or partner of Tesla or any Affiliate of Tesla. Nothing in the Referral Program shall be deemed to create any kind of relationship between the referrer and Tesla or any of Tesla’s Affiliates. The referrer has no authority to represent or bind Tesla.
                </p>
                <p>
                    We introduce programs such as these in good faith and expect the same good faith in return. The intent of this program is to reward loyal Tesla owners for sharing their passion for Tesla products with their friends and family. Referral links should be shared from one person to another, not broadcast en masse on public platforms. To be clear, commercializing, advertising, mass-distributing, selling or paying or offering incentives for use of referral links is not appropriate, and we will not honor referral links associated with behavior that violates these Terms and Conditions. Customers who have violated any Tesla policy are disqualified from this program. Additionally, we reserve the right to withhold awards where we believe customers are acting in bad faith or otherwise acting contrary to the intent of this program. We cannot cover every nefarious scenario, nor will we attempt to, but we do promise to be fair and reasonable. If you disagree with us, it will be your responsibility to show us that you have not violated any Tesla policies or these Terms and Conditions.
                </p>
                <p><Link to="#refer" onClick={scrollToTop}>Back to Top</Link></p>
            </div>
        </main>
    )
}

export default MainBody