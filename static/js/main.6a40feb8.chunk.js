(this["webpackJsonpscale.haus"]=this["webpackJsonpscale.haus"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5a9afa62.png"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/throughput.dd880d76.svg"},function(e,t,a){e.exports=a.p+"static/media/devops_icon.09ce8ece.svg"},function(e,t,a){e.exports=a.p+"static/media/automate.1b2c0ca3.svg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bg.1220949f.svg"},function(e,t,a){e.exports=a.p+"static/media/big-data.b9347a97.svg"},function(e,t,a){e.exports=a.p+"static/media/cloud-migrate.9ffd9895.svg"},function(e,t,a){e.exports=a.p+"static/media/engage.44198db7.svg"},function(e,t,a){e.exports=a.p+"static/media/assess.93ca4c8e.svg"},function(e,t,a){e.exports=a.p+"static/media/implement.7ffd3060.svg"},function(e,t,a){e.exports=a.p+"static/media/handover.1e06eddf.svg"},function(e,t,a){e.exports=a.p+"static/media/support.55afd01e.svg"},function(e,t,a){e.exports=a.p+"static/media/cloud-detail.8021e11d.svg"},function(e,t,a){e.exports=a.p+"static/media/devops.84e85d41.svg"},function(e,t,a){e.exports=a.p+"static/media/iac.4b016c8a.svg"},function(e,t,a){e.exports=a.p+"static/media/people.5baac340.svg"},function(e,t,a){e.exports=a.p+"static/media/security.a6faf8c7.svg"},function(e,t,a){e.exports=a.p+"static/media/data-gov.81445251.svg"},function(e,t,a){e.exports=a.p+"static/media/projman.b17c742e.svg"},function(e,t,a){e.exports=a.p+"static/media/terraform.e2c37a33.svg"},function(e,t,a){e.exports=a.p+"static/media/Moby-logo.04329af3.svg"},function(e,t,a){e.exports=a.p+"static/media/netork.6ed51a75.svg"},function(e,t,a){e.exports=a.p+"static/media/cloud-monitoring.fc767cdb.svg"},function(e,t,a){e.exports=a.p+"static/media/monitoring.3faa81a4.png"},function(e,t,a){e.exports=a(71)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(29),r=a.n(i),s=(a(56),a(11)),l=a(19),c=a(15),u=a(14),m=a(1),d=function(e){return e.children},h=(a(57),a(12)),p=a.n(h),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return window.innerWidth>=900?(console.log("Hello"),n.a.createElement(d,null,n.a.createElement("div",{className:"main-nav"},n.a.createElement("div",{className:"logo"},n.a.createElement(m.b,{to:"/"},n.a.createElement("img",{src:p.a,alt:"ScaleHaus"}))),n.a.createElement("div",{className:"main-links"},n.a.createElement(m.b,{to:"/cloud"},"Cloud Management"),n.a.createElement(m.b,{to:"/devops"},"DevOps"),n.a.createElement(m.b,{to:"/monitoring"},"Monitoring"),n.a.createElement(m.b,{to:"/iac"},"IaC"))))):(console.log("mobile"),n.a.createElement(d,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"mobile-nav",onClick:this.props.openNav},n.a.createElement("div",{className:"bar1"}),n.a.createElement("div",{className:"bar2"}),n.a.createElement("div",{className:"bar3"})),n.a.createElement("div",{id:"mySidenav",className:"sidenav"},n.a.createElement(m.b,{to:"/cloud",onClick:this.props.openNav},"Cloud Management"),n.a.createElement(m.b,{to:"/devops",onClick:this.props.openNav},"DevOps"),n.a.createElement(m.b,{to:"/iac",onClick:this.props.openNav},"IaC"),n.a.createElement(m.b,{to:"/monitoring",onClick:this.props.openNav},"Monitoring")))))}}]),a}(n.a.Component),f=a(2),g=(a(63),a(31)),v=a.n(g),b=a(17),w=a.n(b),E=a(32),k=a.n(E),S=a(33),x=a.n(S),C=a(20),N=a.n(C),I=a(21),O=a.n(I),T=a(8),W=a(18);a(67);function A(){var e=Object(W.b)(),t=e.register,a=e.handleSubmit,o=e.errors;return console.log(o),n.a.createElement("div",{className:"form-component"},n.a.createElement("form",{onSubmit:a((function(e){return console.log(e)}))},n.a.createElement("select",{name:"Title",ref:t({required:!0})},n.a.createElement("option",{value:"Mr"},"Mr"),n.a.createElement("option",{value:"Mrs"},"Mrs"),n.a.createElement("option",{value:"Miss"},"Miss"),n.a.createElement("option",{value:"Dr"},"Dr")),n.a.createElement("input",{type:"text",placeholder:"First name",name:"First name",ref:t({required:!0,maxLength:80})}),n.a.createElement("span",null,n.a.createElement(W.a,{errors:o,name:"First name",message:"This field is required"})),n.a.createElement("input",{type:"text",placeholder:"Last name",name:"Last name",ref:t({required:!0,maxLength:100})}),n.a.createElement("span",null,n.a.createElement(W.a,{errors:o,name:"Last name",message:"This field is required"})),n.a.createElement("input",{type:"text",placeholder:"Email",name:"Email",ref:t({required:"This field is required",pattern:{value:/^\S+@\S+$/i,message:"Please enter a valid email address"}})}),n.a.createElement("span",null,n.a.createElement(W.a,{errors:o,name:"Email",render:function(e){var t=e.messages;return t&&Object.entries(t).map((function(e){var t=Object(T.a)(e,2),a=t[0],o=t[1];return n.a.createElement("p",{key:a},o)}))}}),"  "),n.a.createElement("input",{type:"tel",placeholder:"Mobile number",name:"Mobile number",ref:t({required:!0,minLength:6,maxLength:12})}),n.a.createElement("input",{type:"text",placeholder:"Company",name:"Company",ref:t}),n.a.createElement("input",{type:"submit"})))}var P=function(){return n.a.createElement("div",{className:"contact-us",id:"contact"},n.a.createElement("h1",null,"Want to learn more and discuss pricing? Contact us for more!"),n.a.createElement(A,null))},D=a(34),M=a.n(D),j=a(35),Y=a.n(j),H=a(36),q=a.n(H),L=a(37),R=a.n(L),B=a(38),F=a.n(B),G=(a(68),function(){var e=[{name:M.a,style:{justifySelf:"flex-end"}},{name:Y.a,style:{gridRowStart:"2",gridColumnStart:"2",justifySelf:"flex-start"}},{name:q.a,style:{gridRowStart:"3",gridColumnStart:"1",justifySelf:"flex-end"}},{name:R.a,style:{gridRowStart:"4",gridColumnStart:"2",justifySelf:"flex-start"}},{name:F.a,style:{gridRowStart:"5",gridColumnStart:"1",justifySelf:"flex-end"}}];return n.a.createElement("div",{className:"next-steps"},n.a.createElement("h1",null,"What's next?"),n.a.createElement("div",{className:"timeline"},e.map((function(e){return n.a.createElement("img",{src:e.name,style:e.style,alt:"Our Process"})}))))}),U=function(){var e=window.innerWidth<900;return n.a.createElement(d,null,e?n.a.createElement("img",{id:"mobile-logo",src:p.a,alt:"ScaleHaus"}):null,n.a.createElement("div",{className:"marketing"},n.a.createElement("img",{src:v.a,alt:"Cloud-World"}),n.a.createElement("div",{className:"statement"},n.a.createElement("h1",null,"One Stop Shop For All Your Cloud Needs."),n.a.createElement("p",null,"With modern technology and major events leading to the remote interaction of employees and clients alike, the push to migrate to the cloud are larger than ever before. With security, reliable data flows, and positive customer experience all critical, ScaleHaus is here to jump start your company in all of your cloud and delivery needs."),n.a.createElement("button",{onClick:function(){document.getElementById("contact").scrollIntoView({behavior:"smooth"})}},"Get Started"))),n.a.createElement("h1",{id:"why-heading"},"How will ScaleHaus Transform Your Business?"),n.a.createElement("div",{className:"why"},n.a.createElement(w.a,{bottom:!0,distance:"15%",duration:2e3},n.a.createElement("div",{className:"feat-item"},n.a.createElement("div",{className:"text"},n.a.createElement("h1",null,"Cloud Management"),n.a.createElement("p",null,"Whether you are looking to migrate from on-prem or migrate from one cloud provider to another, we remove the headache.")),n.a.createElement("img",{src:x.a,alt:"migrate"}),n.a.createElement(m.b,{to:"/cloud"},n.a.createElement("button",null,"Migrate")))),n.a.createElement(w.a,{bottom:!0,distance:"15%",duration:2e3},n.a.createElement("div",{className:"feat-item"},n.a.createElement("div",{className:"text"},n.a.createElement("h1",null,"Monitoring"),n.a.createElement("p",null,"Whether it be server monitoring or APM, ScaleHaus will make sure you don't miss a beat. Catch issues before your clients.")),n.a.createElement("img",{src:N.a,alt:"Secure"}),n.a.createElement(m.b,{to:"/monitoring"},n.a.createElement("button",null,"Monitor")))),n.a.createElement(w.a,{bottom:!0,distance:"15%",duration:2e3},n.a.createElement("div",{className:"feat-item"},n.a.createElement("div",{className:"text"},n.a.createElement("h1",null,"DevOps & Enhanced Delivery"),n.a.createElement("p",null,"Make deployments flawless with our CI/CD. Save resources by streamlining deployments and eliminating manual tasks.")),n.a.createElement("img",{src:O.a,alt:"devops"}),n.a.createElement(m.b,{to:"/devops"},n.a.createElement("button",null,"Deliver")))),n.a.createElement(w.a,{bottom:!0,distance:"15%",duration:2e3},n.a.createElement("div",{className:"feat-item"},n.a.createElement("div",{className:"text"},n.a.createElement("h1",null,"Infrastructure as Code & Docker Containers"),n.a.createElement("p",null,"Eradicate manual environment build's and significantly reduce errors with IaC. ScaleHaus provides moduling and training to get your environment automated and stabilized.")),n.a.createElement("img",{src:k.a,alt:"data"}),n.a.createElement(m.b,{to:"/iac"},n.a.createElement("button",null,"Construct"))))),n.a.createElement(G,null),n.a.createElement(P,null))},z=(a(69),function(e){var t=window.innerWidth<900;return n.a.createElement(d,null,t?n.a.createElement(m.b,{to:"/"},n.a.createElement("img",{id:"mobile-logo",src:p.a,alt:"ScaleHaus"})):null,n.a.createElement("div",{className:"marketing"},n.a.createElement("img",{src:e.bg,alt:e.alt,style:e.style}),n.a.createElement("div",{className:"statement"},n.a.createElement("h1",null,e.heading),n.a.createElement("p",null,e.description))),n.a.createElement("div",{className:"main-info"},e.img.map((function(e){return n.a.createElement("div",{className:"services-imgs"},n.a.createElement("img",{src:e.img,alt:"service"}),n.a.createElement("h1",null,e.title),n.a.createElement("p",null,e.text))}))),n.a.createElement(P,null))}),K=a(39),V=a.n(K),J=a(40),$=a.n(J),X=a(41),_=a.n(X),Q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){return window.scrollTo(0,0)},e.componentDidUpdate=function(t){e.props.location!==t.location&&window.scrollTo(0,0)},e.render=function(){return e.props.children},e}return a}(o.PureComponent),Z=Object(f.f)(Q),ee=a(42),te=a.n(ee),ae=a(43),oe=a.n(ae),ne=a(44),ie=a.n(ne),re=[{img:te.a,text:"We will get you set up in the cloud. You keep the ownership and can lean on us for any troubleshooting",title:"Your people, your cloud"},{img:oe.a,text:"Security is our top priority. Not only will your cloud setup be secure out of the gate, but we will also assist your development and operations teams in understanding best practice and maintaining a tight perimeter",title:"Lock and Key"},{img:ie.a,text:"We take compliance and data governance very seriously. We will make sure that NDA's are signed, as well as ownership and viewing of data remains with your organization.",title:"Compliance"}],se=a(45),le=a.n(se),ce=a(22),ue=a.n(ce),me=[{img:O.a,text:"Partnering with ScaleHaus means you get our Continous Integration and Continuous Delivery. Never waste time on manual or faulty steps. Never lack confidence in code rolls.",title:"CI/CD"},{img:le.a,text:"Agile and Kanban project management means better billing, more efficient development, and happier clients.",title:"Project Management"},{img:ue.a,text:"No more manual redundant tasks. All of us at ScaleHaus love to automate the mundane. We train and work through the day to day work load with your operations team to make sure no time is ever wasted on something that jenkins can handle.",title:"Automate"}],de=a(46),he=a.n(de),pe=a(47),ye=a.n(pe),fe=[{img:he.a,text:"ScaleHaus engineers bring a wealth of terraform experience to you. We will get your environment infrastructure written, organized, and deployed.",title:"Hashicorp Terraform"},{img:ye.a,text:"If your organization has yet to join the container revolution, we are here to help. We will help your team understand immutable application containers with Docker. Never be surprised in production",title:"Docker"},{img:ue.a,text:"Our IaC implementation comes with automated pipelines for your infrastructure. Having infra issues in Dev and spending countless hours resolving it? Blow it away and rebuilt it with a button click.",title:"Automated Pipelines"}],ge=a(48),ve=a.n(ge),be=a(49),we=a.n(be),Ee=[{img:N.a,text:"Prevent resource bottlenecks by collect application metrics with APM monitoring. Understand how your application is performing and work to make a more efficient and stable application.",title:"APM & Synthetic"},{img:ve.a,text:"ScaleHaus not only helps you monitor your applications, but we will make sure you monitoring your entire newtork and servers efficiently, on-prem or cloud! We help reduce cost by using open source monitoring tools that never miss a beat.",title:"Network & Server"},{img:we.a,text:"Cloud monitoring and metric collection can be a headache for many organizations. Make sure your cloud is performing as efficiently as possible to reduce the operating costs typically associated. Never overpay for your cloud!",title:"Cloud"}],ke=a(50),Se=a.n(ke),xe=function(){return n.a.createElement("div",{className:"legal"},n.a.createElement("h1",null,"PRIVACY POLICY"),n.a.createElement("hr",null),n.a.createElement("p",null,"ScaleHaus, LLC (\u201ccompany\u201d, \u201cI\u201d, \u201cwe\u201d or \u201cus\u201d) is dedicated to respecting the privacy of your personal information, and this privacy policy describes what information is collected from you on scale.haus (hereinafter the \u201cwebsite\u201d) and how it is used. The term \u201cyou\u201d refers to anyone who uses, visits and/or views the website. By visiting and using the website, you accept and agree to be bound by this privacy policy. Your continued use of the website after posting of any changes to our Privacy Policy constitutes your acceptance of those changes and updates. You must not access or use the website if you do not wish to be bound by this Privacy Policy."),n.a.createElement("h1",null,"CHILDREN\u2019S PRIVACY"),n.a.createElement("p",null,"We respect the privacy of children and \u201cchild\u201d means an individual under the age of 13. All information and content on this website is intended for individuals over the age of 18. Children under the age of 13 are prohibited from using this website. We do not knowingly collect, use or disclose personal information from children under the age of 13 without prior parental or guardian consent. If you believe personal information is collected from someone under the age of 13 without parental or guardian consent, then please contact us to have that information deleted."),n.a.createElement("h1",null,"WHAT INFORMATION WE COLLECT AND HOW IT IS USED"),n.a.createElement("p",null,"When you access the website, you may provide certain personally identifiable information including but not limited to your name, email address, phone number, address, avatar image, credit card information when you make a purchase on the website. This information is collected when you register on the site, place an order, subscribe to a newsletter, contact us, use the search feature on the website, provide comments or any other feedback, fill out a form or use live chat or enter any other information on the website to communicate with us. From time to time, we may also collect information that you submit when you participate in any online surveys that we may post on our website."),n.a.createElement("p",null,"Your personal information is used to personalize your experience, improve the website to better serve you, provide customer service support, efficiently process your requests or transactions, tailor advertisements to you, elicit reviews of services or products, provide you offers, promotions and to follow up with you through correspondence (email, live chat, or phone)."),n.a.createElement("p",null,"We may also use this information to provide you offers and promotions from our partners and/or our affiliates in exchange for a commission without additional cost to you."),n.a.createElement("p",null,"Additionally, like other websites, this website automatically collects certain information about you through Log Data and Google Analytics. Log Data is information about your computer\u2019s Internet Protocol Address, which is your \u201cIP\u201d address, browser information, Internet Service Provider\u2019s information, your operating system, and your browser type. Similarly, Google Analytics collects certain information about your location, browsing history, the pages you visit, equipment you used to access the website, traffic patterns, and other general patterns related to your use of the website."),n.a.createElement("p",null,"This information is used to analyze website statistics related to user behavior and interests, improve our performance and your use of the website and to further enhance our products and services offered to you."),n.a.createElement("h1",null,"COMMENTS AND SOCIAL MEDIA"),n.a.createElement("p",null,"If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. When you leave a comment, your name, email address and website/organization name is not shared with a third party, and may be used to communicate with you."),n.a.createElement("p",null,"Social media accounts and sharing options are available on this website. Social media sites (Facebook, Twitter, YouTube, and so forth) can track your personal information. Should you choose to interact with us on social media, please note that you will be voluntarily disclosing that personal information. This information is no longer private. It becomes public information and can be collected and used by others. We have no control over and take no responsibility for the use, storage or dissemination of such publicly disclosed personal information by you."),n.a.createElement("p",null,"Any such interactions via comments and social media with us do not subject us to any kind of liability related to misuse of your information by others."),n.a.createElement("h1",null,"USE OF COOKIES"),n.a.createElement("p",null,"The website may use cookies to facilitate your use of the website. Cookies are files with small amounts of data including an anonymous unique identifier that a website sends to your computer\u2019s hard drive when you are viewing the website. Just like other websites, we automatically collect some non-personally identifiable information including but not limited to your IP address, geographic location, language preference, date and time of visitors."),n.a.createElement("p",null,"When you leave a comment on our website, you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment."),n.a.createElement("p",null,"If you have an account and you log in to this website, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser."),n.a.createElement("p",null,"We may use cookies for various reasons such as optimizing and personalizing your browsing experience, checking our website analytics, saving your preferences and settings for future use, serving ads based on your liking and interests, affiliate marketing and for posting comments on our website."),n.a.createElement("p",null,"This information is only collected to better serve and understand your user experience on the website.  You have the option of turning off cookies on your computer should you wish to do so. If you choose to do that, you may not be able to view all features and content of this website."),n.a.createElement("h1",null,"USE OF WEB BEACONS AND PIXELS"),n.a.createElement("p",null,"In conjunction with the use of cookies, third parties may also use web beacons, which are also known as clear GIFs, web bugs or pixel tags to collect general information about your use of our website. They monitor user activity and are used to track customer behavior data. This information may be relevant to third parties such as the ad networks used on our website to tailor the advertising based on your behavior and interests."),n.a.createElement("p",null,"We may use social media pixels to track and collect general information about your use in compliance with different social media sites (Facebook, Twitter, etc) for the purpose of promoting products, tracking conversions, remarketing, running target advertisements and so forth."),n.a.createElement("p",null,"Third parties like Facebook may use their own cookies, web beacons and other technologies to collect and receive information from our website for the purpose of providing target advertisements. You may see our ads on Facebook after you have visited our website."),n.a.createElement("h1",null,"THIRD PARTY LINKS AND USE"),n.a.createElement("p",null,"We may include, offer or advertise third party links, products or services on the website. Once you click on a third party link and leave this website, you are no longer bound by our Privacy Policy and Terms and Conditions."),n.a.createElement("p",null,"Articles on this website may include embedded content (e.g. videos, images, advertisements, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website."),n.a.createElement("p",null,"We may use Google Adsense advertising along with any other third party advertising on the website. Google is a third party that also uses cookies to serve ads on the website for the purpose of providing a positive user experience. Third party vendors such as Google use cookies to serve ads based on a user\u2019s prior visits to the website. You can opt out of Google by visiting their privacy policy and ad settings."),n.a.createElement("p",null,"We have no control over these third parties and they have their own privacy policies. Neither are we responsible for the activities and practices of these third parties. You should contact them directly and read their privacy policies for any questions. You also agree that your use of these third party websites is solely at your risk."),n.a.createElement("h1",null,"DISCLOSURE OF YOUR INFORMATION"),n.a.createElement("p",null,"As a general rule, we do not disclose your personal information to third parties without your consent with the exception of the following circumstances:"),n.a.createElement("ol",null,n.a.createElement("li",null,"We may disclose your information to our trusted third parties that work with us such as our website hosting partners, email marketing service provider, other service providers that assist in the operation of the website, and any other affiliates and subsidiaries we rely upon to provide you products and services offered here."),n.a.createElement("li",null,"We may disclose your information in order to comply with state or federal regulations related to copyright infringement lawsuits or any other legal claims related to the website."),n.a.createElement("li",null,"We may disclose your information to our successor and/or acquiring party in the event of a merger, acquisition, restructuring, dissolution or partial sale in the future. However, your personal information will be transferred to the acquiring party in accordance with this privacy policy.")),n.a.createElement("h1",null,"EMAIL MARKETING"),n.a.createElement("p",null,"You have the option of opting in or unsubscribing from our email list. By subscribing and opting in, you agree to receiving newsletters, updates, messages, promotional materials and any other content related to this website. When you send an email, your email message along with email address and responses are saved for communication purposes with you. This information is kept confidential and we do not share, sell or trade your email information with third parties except as otherwise stated in this privacy policy."),n.a.createElement("p",null,"We do not envision offering goods or services to individuals living in the European Union as outlined in the General Data Protection Regulation (\u201cGDPR\u201d)."),n.a.createElement("p",null,"If you are in the European Union and opt in to receive any of our free products or services and/or purchase any products or services through our website then you will be subscribed to receive our free email newsletter once you affirmatively consent to it. Please see Opt Out section below should you wish to \u201cunsubscribe\u201d and not receive any emails from us."),n.a.createElement("p",null,"But if you are NOT in the European Union then you will be automatically subscribed to receive our free email newsletter once you opt in to receive any of our free products or services and/or purchase any products or services through our website. Please see Opt Out section below should you wish to \u201cunsubscribe\u201d and not receive any emails from us."),n.a.createElement("h1",null,"OPT OUT"),n.a.createElement("p",null,"We comply with the CAN-SPAM Act of 2003 and do not spam or send misleading information. Should you wish to no longer receive communication from us, you have the option of unsubscribing by clicking \u201cunsubscribe\u201d in the bottom of the email we send to you or by contacting us."),n.a.createElement("p",null,"As for third party websites, please contact them directly to unsubscribe and/or opt out from their communications. We are in compliance with the GDPR along with the email marketing service we use to collect your data."),n.a.createElement("h1",null,"GDPR VISITOR RIGHTS"),n.a.createElement("p",null,"Under the GDPR, if you are within the European Union, you are entitled to certain rights and information listed below. We will retain any information you choose to provide to us until the earlier of:"),n.a.createElement("ol",null,n.a.createElement("li",null,"You ask us to delete the information by sending a request to sparlor@scale.haus. Please note that such requests may result in you no longer being able to access paid or free content previously provided to you."),n.a.createElement("li",null,"Our decision to cease using our existing data providers."),n.a.createElement("li",null,"The Company decides to no longer be in business or continue to offer the services."),n.a.createElement("li",null,"The data is no longer needed to provide you service, is too costly to maintain further retention, or the Company finds it outdated.")),n.a.createElement("p",null,"You have the right to request access to your data that we store and have the ability to access your personal data."),n.a.createElement("p",null,"You have the rights to either rectify or erase your personal data. You have the right to verify the accuracy of your personal data and have it corrected or removed completely"),n.a.createElement("p",null,"You have the right to seek restrictions on the processing of your data. When you restrict the processing of your data, we can store your data but cannot process it further."),n.a.createElement("p",null,"You have the right to object to the processing of your data in certain circumstances including but not limited to direct marketing, profiling, scientific or historical research purposes, statistical purposes, automated decision making and profiling and tasks based on legitimate interests or in the public interest/exercise of official authority."),n.a.createElement("p",null,"You have the right to the portability of your data. You have the right to request your personal data from us, receive it and transfer it to another controller."),n.a.createElement("p",null,"You have the right to withdraw consent at any time. If you have provided consent to the Company\u2019s processing of your personal data, you have the right to withdraw that consent any time without affecting the lawfulness of processing based upon consent that occurred prior to your withdrawal of consent."),n.a.createElement("p",null,"You have the right to lodge a complaint with a supervisory authority that has jurisdiction over issues related to the General Data Protection Regulation."),n.a.createElement("p",null,"We require only the information that is reasonably necessary to enter into a contract with you. We will not require you to provide consent for any unnecessary processing as a condition of entering into a contract with us."),n.a.createElement("h1",null,"SECURITY"),n.a.createElement("p",null,"The security of your personal information is important to us, and we strive to follow generally commercial industry standards to protect your personal information submitted to us voluntarily and automatically. However, no method of transmission over the Internet is 100% secure and we cannot guarantee absolute security of your information. When you make a credit card purchase or purchase through any means on the website, you will be directed to a third party vendor to complete the transaction. Any information you provide during the checkout process is not stored on our website but instead provided to the third party vendor that completes the purchase transaction."),n.a.createElement("p",null,"By using this website, you agree to hold us harmless for any security breach and for any unauthorized use of your personal information by third parties. You also agree that we cannot be held responsible for any disclosure of your information through our website without our knowledge and consent."),n.a.createElement("h1",null,"PRIVACY POLICY UPDATES"),n.a.createElement("p",null,"This privacy policy is effective as of August 23, 2019  and will be updated and modified as needed. You are responsible for visiting this page periodically to check for future updates to this policy. Any modifications to this privacy policy will be effective upon our publishing of the new terms, and your continued use of our website after the posting of any updates constitutes your acceptance of our modified privacy policy."),n.a.createElement("h1",null,"CONTACT"),n.a.createElement("p",null,"For any questions or comments regarding the privacy policy, please contact us at sparlor@scale.haus."))},Ce=function(){var e=re,t=me,a=Ee;return n.a.createElement(Z,null,n.a.createElement(f.c,null,n.a.createElement(f.a,{path:"/",exact:!0,component:U}),n.a.createElement(f.a,{path:"/cloud",render:function(t){return n.a.createElement(z,Object.assign({},t,{heading:"Migrate to the Cloud Hassle-free",description:"ScaleHaus engineers will move your company to the cloud and hand over to you to manage. We offer long-term support so that your business thrives.",bg:V.a,img:e}))}}),n.a.createElement(f.a,{path:"/devops",render:function(e){return n.a.createElement(z,Object.assign({},e,{heading:"DevOps Implementation",description:"Stabilize production by adapting to agile and devops methodologies. Integrate our DevOps solutions with your cloud infrastructure to ensure day to day operations go unhindered. Trust us, we don't like waking up in the middle of the night any more than you do.",bg:$.a,img:t}))}}),n.a.createElement(f.a,{path:"/iac",render:function(e){return n.a.createElement(z,Object.assign({},e,{heading:"Infrastructure as Code & Docker Containers",description:"ScaleHaus will get your company up to speed by automating infrastructure builds and dockerizing your applications. Reduce cost, and bug troubleshooting with terraform and docker to make sure you know what to expect in production.",bg:_.a,style:{paddingBottom:0},img:fe}))}}),n.a.createElement(f.a,{path:"/monitoring",render:function(e){return n.a.createElement(z,Object.assign({},e,{heading:"Application and Network Monitoring",description:"Knowing what events are occuring throughtout your apps and infrastructure are key to client retention and cost savings. Catch potential issues in production before your clients do with APM, Network, and Synthetic monitoring.",bg:Se.a,img:a}))}}),n.a.createElement(f.a,{path:"/privacy-policy",exact:!0,component:xe})))},Ne=(a(70),function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"footer-content"},n.a.createElement("div",{className:"footer-col"},n.a.createElement("h3",null,"Our Services"),n.a.createElement(m.b,{to:"/cloud-migration"},"Cloud Migration"),n.a.createElement(m.b,{to:"/devops"},"DevOps"),n.a.createElement(m.b,{to:"/monitoring"},"Monitoring"),n.a.createElement(m.b,{to:"/iac"},"Infrastructure as Code")),n.a.createElement("div",{className:"footer-col"},n.a.createElement("h3",null,"Legal"),n.a.createElement(m.b,{to:"/privacy-policy"},"Privacy Policy"))))}),Ie=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={navButton:!0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement(y,{openNav:function(){!0===e.state.navButton?(document.getElementById("mySidenav").style.width="100%",document.querySelector(".container").classList.add("change"),e.setState({navButton:!1})):(document.getElementById("mySidenav").style.width="0",document.querySelector(".container").classList.remove("change"),e.setState({navButton:!0}))}}),n.a.createElement(Ce,null),n.a.createElement(Ne,null))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n.a.createElement(m.a,null,n.a.createElement(Ie,null));r.a.render(Oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.6a40feb8.chunk.js.map