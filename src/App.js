import {Salesforce} from "./assets";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Salesforce} className={'salesforce-logo'} alt={'Salesforce company logo'}/>
                <h1>Salesforce Tutorial Information</h1>
                <h3>What is CRM</h3>
                <h5>- CRM stands for customer relationship management</h5>
                <h4> what is does is stores customer contact information like names, address, and phone
                    numbers <br/> All this while tracking customer
                    activity like website visits, phone calls, email and more</h4>
                <br/><br/>
                <h5>Other processes that crm handles</h5>
                <ul style={{textAlign: 'left'}}>
                    <li>Deal tracking</li>
                    <li>Contact, lead and opportunity management</li>
                    <li>Product planning, manufacturing, planning, and shipping</li>
                    <li>Reporting on customer interactions through case management</li>
                    <li>What the roi is what are the general and total sales for them etc...</li>
                </ul>
                <hr className={'breaker'}/>
                <div style={{height: '10vh'}}/>
                <h3>What is ROI of MROI? </h3>
                <h5>Marketing ROI, or MROI for short, is the return on investment your company receives from all of your
                    marketing activities. It refers to all profit and revenue growth from all of your different
                    marketing channels. These channels may include email marketing, social media marketing, digital
                    marketing, and any other type of marketing.</h5>
                <h3>Why is MROI soooo important?</h3>
                <h5>Marketing ROI illustrates how your marketing is performing and how it is impacting your business.
                    This clear information can deliver huge competitive advantages. When MROI data shows you which
                    marketing channels are most effective and most profitable, you can pivot your marketing spend to
                    focus on those channels and reach more customers.</h5>
                <h3>How do you use salesforce to track roi? </h3>
                <h5>By deploying a Marketing Measurement Strategy businesses are able to effectively manage MROI<br/>The
                    four components of an MMS are: </h5>
                <ul style={{textAlign: 'left'}}>
                    <li>Setting Clear Goals</li>
                    <li>Identification of costs</li>
                    <li>Getting the right technology</li>
                    <li>Creating a formula for calculating MROI</li>
                </ul>
                <h4>Note: Email marketing ROI is generally highly profitable. An average email ROI is 3800% which is why
                    so many companies have very rich email marketing strategies. This especially pertains to SMBs, or
                    small to medium-size businesses. </h4>
                <h6>The basic formula is <em>MROI = (Marketing Value - Marketing Cost) / Marketing Cost</em></h6>
                <hr className={'breaker'}/>
                <div style={{height: '10vh'}}/>
                <h3>WHat are MQLs and SQLs and how does Salesforce help to manage them?</h3>
                <h6>MQL refers to a lead that is more likely to become a customer compared to other leads based on lead
                    intelligence and is usually conveyed by closed-loop reporting. SQL means that the sales team has
                    qualified this lead as a potential customer. The SQL is in the buying cycle, while the MQL is not
                    ready for that buying stage just yet.</h6>
                <h6>This way of defining MQLs and SQLs in a modern Marketing and sales environment is essential to
                    understanding the idea that sales and marketing should be working together throughout the entire
                    sales and marketing process instead of pitting them against one another in a versus state.</h6>
                <h6>Salesforce, simply put, is a tool that helps to manage the successful conversion of turning an MQL
                    into an SQL.</h6>
                <h3>How to Generate and Calculate Lead Generation</h3>
                <h5>Step by step process</h5>
                <ul style={{textAlign: 'left'}}>
                    <li>Inquiry</li>
                    <h6>WHen the visitor fills out a form, or is returning to the site both have your permission to
                        market to them. An inquiry turns into an MCL or <em style={{fontSize: '18px'}}>Marketing
                            Captured Lead</em> when you confirm a match
                        with your Ideal Customer Profile or ICP. How are they? Why would we want them to be interested
                        in our services?</h6>
                    <li>Marketing Qualified Lead</li>
                    <h6>An MCL becomes an MQL when a prospect meets a predetermined qualifier. The prospect will show
                        the right level of interest online as determined by our clients or with a lead development rep
                        or LDR. MQLs require one-to-one nurturing.</h6>
                    <li>Sales Qualified Lead</li>
                    <h6>An MQL turns into an SQL when they have agreed to a meeting with sales. This is generally
                        determined using the <em>BANT</em> method. Which is as follows:</h6>
                    <ul style={{textAlign: 'left'}}>
                        <li>Budget</li>
                        <li>Authority to purchase</li>
                        <li>Needs</li>
                        <li>Timeline</li>
                    </ul>
                    <li style={{marginTop: '3rem'}}>Opportunity</li>
                    <h6>This is when an SQL is finally turned over to sales to work it's magic and close the deal</h6>
                </ul>
                <hr className={'breaker'}/>
                <div style={{height: '10vh'}}/>
                <h3>Mastering the "Lead Waterfall"</h3>
                <h4>Calculating meaningful lead generation goals requires looking at and understanding every stage of
                    the sales funnel. </h4>
                <h5>For example:</h5>
                <h6> If a company has a revenue goal of 1 million dollars and email marketing is expected to contribute
                    25% of $250k divide the amount by average price deal which is 10k in this example... the number of
                    deals to reach this goal through email marketing is 25</h6>
                <h5>This is the point where numbers can be generated</h5>
                <h5>A formula for equating this is as follows</h5>
                <h6><em>REQUIRED MARKETING CONTRIBUTION / AVERAGE CONVERSION RATE = NUMBER OF EMAIL MARKETING LEADS
                    NEEDED</em></h6>
                <ul style={{textAlign: 'left'}}>
                    <li>To close 25 deals with a 25% win rate 100 opportunities are needed</li>
                    <li>For 100 opportunities with a 50% SQL : Opp conversion rate 200 SQLs are needed</li>
                    <li>For 200 SQLs with a 50% MQL : SQL conversion rate 400 MQLs are needed</li>
                    <li>For 400 MQLs with a 50% MCL : MQL conversion rate 800 MCLs are needed</li>
                    <li>For 800 MCLs with a 3% inquiry : MCL conversion rate 26,666 inquiries as needed</li>
                </ul>
                <h4>In this way it's easy to discern why the work of the email marketing team of Progressive Leasing is
                    so crucial to so many businesses in generating motion through the sales funnel</h4>
            </header>
        </div>
    );
}

export default App;
