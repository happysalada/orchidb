<script lang="ts">
  import FaqItem from "./FaqItem.svelte";
</script>
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <FaqItem question="What is an estimate?" answer={`
          An estimate is a document that outlines how much a seller expects to charge a buyer for goods and/or services. Once the goods and/or services have been provided, the seller can charge more or less than the initial estimate.
          An estimate should include the following information:
          Your company name, address, and contact information
          The customer’s company name and address
          Date of the estimate   
          Description of the product and/or service to be provided
          The amount(s) being charged
          Sales Tax amount if applicable
          The total estimated amount
        `} />
        <FaqItem question="Are estimates legally binding?" answer={`
          An estimate is not a legally binding contract. It is not a promise. The seller can withdraw their offer, or the customer can reject it.
        `} />
        <FaqItem question="What is a quote (or quotation, sales quote, price quote)?" answer={`
          A quote is a proposal that sets out the fixed price or fees payable for the delivery of finite products and/or services. A quote is issued before any products are delivered or before a project starts. A quote’s price is valid for a limited time. For example, 30 days.
          Once the goods and/or services have been provided, the seller must charge the price in the quote.
        `} />
        <FaqItem question="Are quotes legally binding?" answer={`
          A quote is not a legally binding contract. A quote is not a promise by a seller to deliver a product or service nor is it a promise by a buyer to acquire a product or service.          
        `} />
        <FaqItem question="Does the acceptance of a quote create a contract?" answer={`
          A customer’s acceptance of a quote does not change the quote into a contract. A contract is formed when both parties (buyer and seller) agree to their part e.g. the payment of a sum in exchange of the delivery of a product or service.
        `} />
        <FaqItem question="What is a project?" answer={`
          A project is defined as the delivery of a sequence of products and/or services within a finite timeframe. A project has a start date and end date. A project is not open ended. Depending on the type of project, the key criteria that comprise a project include:
          Your company name, address, and contact information
          The customer’s company name and address
          Project Start Date
          Project End Date
          Project Name
          List of products and/or services to be delivered by the seller (sometimes called deliverables)
          Scope of the project including what is included and what is not included
          Amount payable
          Sales tax if applicable
          Terms & Conditions (including payment terms)
        `} />
        <FaqItem question="What is a project proposal?" answer={`
          A project proposal is a great way to show you customer that you know what you are talking about. A proposal includes the following:
          Your company name, address, and contact information
          The customer’s company name and address
          Project Start Date
          Project End Date
          Project Name
          List of products and/or services to be delivered by the seller (sometimes called deliverables)
          Scope of the project including what is included and what is not included
          Project roadmap and key milestones
          Project Governance including roles and responsibilities
          Amount payable
          Sales tax if applicable
          Terms & conditions (including payment terms)
          References (sometimes known as credentials)
          About Us (a summary of the founders or leaders of the company, including its people, this can include a history of the company and some key numbers such as revenue, number of employees, locations, high level service catalogue)
        `} />
        <FaqItem question="What is a contract?" answer={`
          A contract is a legally enforceable agreement that creates, defines, and governs mutual rights and obligations among its parties. A contract typically involves the transfer of goods, services, money, or a promise to transfer any of those at a future date. In the event of a breach of contract, the injured party may seek judicial remedies such as damages or rescission. Contract law, the field of the law of obligations concerned with contracts, is based on the principle that agreements must be honoured (source: Wikipedia).
          If you need help writing a contract, we suggest you take advise from a qualified specialist (for example a lawyer).
        `} />
        <FaqItem question="What is the difference between a proposal and a contract?" answer={`
          A contract is a legally binding agreement which binds parties to fulfill their obligations. A contract can reference a proposal. Parties sign a contract after an RFI and / or RFP process?
        `} />
        <FaqItem question="What is an RFI, what is an RFP, or a RFQ?" answer={`
          Step 1: a customer reaches out to a long list of suppliers to understand whether they are qualified to provide a product or service. This is often defined as a “Request for Information” (RFI) process.
          Step 2: a customer reaches out to a shortlist of suppliers to request a product or service. This is often defined as a “Request for Proposal” (RFP) process.
          Step 3: a supplier sends a proposal to a customer. This is sometimes referred to as  response to a request for proposal.
          Step 4: the customer selects its preferred supplier after a review and/or interview process
          Step 5: the two parties sign a contract
        `} />
        <FaqItem question="What is an invoice (bill, bill of sales, commercial invoice)?" answer={`
          If you sell a product or a service to customer, you need to give them an invoice that summarises the transaction. An invoice is also sometimes called a bill. An invoice is provided to the customer after the work is completed.
        `} />
        <FaqItem question="What is a pro-forma invoice?" answer={`
          A pro forma invoice is a preliminary invoice that is sent out once a customer has agreed to a purchase. The actual invoice cannot be sent out because the products and services have not been fully delivered and/or the final details have not been confirmed.
        `} />
        <FaqItem question="What is a receipt?" answer={`
          An invoice is not the same as a receipt, which is an acknowledgement of payment. For example, if you pay for a new mobile phone in a shop, the shop keeper will give you a receipt to prove that you have paid for the product.
        `} />
        <FaqItem question="What does an invoice include?" answer={`
          What does an invoice include?
          An invoice is by default unique and must include the following: 
          The invoice must include:
          Date the invoice was issued
          Unique identification number
          Your company name, address, and contact information
          The customer’s company name and address
          Description of the product or service that you’re charging for
          Date the goods or service were provided (supply date)
          Amount(s) being charged
          Sales tax amount if applicable
          Total amount owed by the buyer
          The terms of payment (when the customer should pay e.g. 7 days after the invoice date)
          The payment channel (how the customer should pay you e.g. bank transfer)
        `} />
        <FaqItem question="What are “terms of payment” or “payment terms”?" answer={`
          Payment terms indicate 2 fundamental pieces of information:
          The date the supplier should receive payment for an invoice. In general payment terms are defined as the number of days between the invoice date and the payment date, for example:
          On receipt (where the invoice date is the same as the payment date)
          7 days (the payment date is 7 days after the invoice date)
          14 days
          30 days
          60 days
          90 days
          The payment channel the customer should use to pay the supplier, for example:
          Credit or Debit card
          Bank transfer (sometimes called wire, SWIFT, or electronic funds transfer (EFT)
          Buy now pay later (BNPL) account
          These terms are included in the invoice generated by suppliers of products and services and sent to customers.
        `} />
        <FaqItem question="What is a credit note?" answer={`
          A credit note is a negative invoice. Instead of a customer owing money to a supplier following the issuance of an invoice, a credit note is when a supplier owes money to a customer. This happens when a contract or an invoice is amended. Issuing a credit note to a customer also avoids allows you to legally amend an invoice without having to delete or alter it.
        `} />
        <FaqItem question="I have a sole proprietorship: are invoices different?" answer={`
          If you’re a sole proprietor, the invoice must also include:
          Your name and any business name being used
          An address where any legal documents can be delivered to you if you are using a business name
        `} />
        <FaqItem question="What business structure should I choose in the USA?" answer={`
          Believe it or not, the planning phase of starting a business, ends with choosing a business structure. In order to choose your business structure you should know what product or service you will provide, in which geography, to which client segment, through which channel (for example, a brick & mortar shop, online), at what price, and more importantly with whom you would like to conduct the business. Some of the key questions include :
          Do you want start out on your own and be the sole beneficial owner ?
          Will you co-found your business with a partner?
          How do I want to be taxed ?
          How much will I earn ?
          The choice of business structure will have personal, legal and tax implications. Examples of business structures include :
          Sole Proprietorship
          Partnership
          Limited Liability Company (LLC)
          Corporation – C Corp
          Corporation – S Corp
          Corporation – B Corp
          Corporation – Non Profit
        `} />

        <!-- More questions... -->
      </dl>
    </div>
  </div>
</div>
