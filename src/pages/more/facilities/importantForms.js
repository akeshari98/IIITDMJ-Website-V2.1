import React, { useState } from 'react';
import { 
  Download, FileText, AlertCircle, Clock, Mail, CreditCard, 
  Building2, GraduationCap, FileCheck, User, BadgeCheck, 
  Globe, Wallet, Package, Info,
  Banknote,
} from 'lucide-react';
import PageHeader from '../../../components/PageHeader';

const AcademicServicesDashboard = () => {
  const [activeTab, setActiveTab] = useState('certificates');

  const certificatesAndServices = [
    {
      title: "Bonafied Certificate",
      description: "For Income Tax, Scholarship Application, Educational Loan, Demand Letter, Railway Pass, Identity Proof, Status of Sem. Fee (Paid/Unpaid)",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Irshad Ahmed Ansari",
      email: "irshad.ahmed@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1c8ottv3vybaTeIpZws-5_diorhfBlpiGq6c7H8k3hg8/edit?ts=5fca11b5&gxids=7628#responses",
      category: "Essential"
    },
    {
      title: "Fee Structure",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Irshad Ahmed Ansari",
      email: "irshad.ahmed@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1feghvMHAq7QZJ3C8-jdogGFgfTOSItviP4YenDq7wko/edit",
      category: "Financial"
    },
    {
      title: "Certificate of Medium of Instructions",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Irshad Ahmed Ansari",
      email: "irshad.ahmed@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/10GElxk5KL2nS1kFtpamF2n318e2H_NOHVIVddA4pqrY/edit",
      category: "Academic"
    },
    {
      title: "Character Certificate",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Shashank",
      email: "shashank@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/17WsPkAYDeYPtzgE7vosjECrmesNfJVAnrp8e0D9qzq8/edit",
      category: "Essential"
    },
    {
      title: "Migration Certificate",
      fee: "200/-",
      processingTime: "Issued along with final marksheet",
      contact: "Mr. Shashank",
      email: "shashank@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1jdcrDn_O08UAnzUOUYdxj2aUpbVbIJ72we3WWcO1fXw/edit",
      category: "Academic"
    },
    {
      title: "Pointer to %age Conversion Certificate",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Shashank",
      email: "shashank@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1qKzCu-kMwWrLRFoC4hFEHML6W3ZyHNR30k1JEyaR8pc/edit",
      category: "Academic"
    },
    {
      title: "Provisional Degree Certificate",
      description: "After completion of program",
      fee: "NA",
      processingTime: "3 days",
      contact: "Ms. Simran",
      email: "simran@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1PvZ0iE2FZcVkoqbJ4kTUNIuPm7uOCwCPLg1QI0FO95E/edit",
      category: "Academic"
    },
    {
      title: "Course Completion Certificate",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Ms. Simran",
      email: "simran@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe4N9maTrcifeGkafrHcwZsZSbYbvTbgCRdL-9NHYl4SPt8ZQ/viewform",
      category: "Academic"
    },
    {
      title: "Expected Date of Completion Certificate",
      description: "Only for B.Tech/BDes",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Ms. Simran",
      email: "simran@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1H20RH4fLCJqjb2sODScvHWLf77TqK-vAh4vxnYoSIQs/edit",
      category: "Academic"
    },
    {
      title: "Thesis Submission Certificate",
      description: "Only for PhD",
      fee: "200/-",
      processingTime: "3 days after receiving the panel and thesis",
      contact: "Mr. Richard",
      email: "richard@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1LMnnLarBjhMx27JRwCgDv48ruFlN6GFlCgA2-M2rKZE/edit",
      category: "Academic"
    },
    {
      title: "Rank Certificate",
      description: "B.Tech",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Ms. Simran",
      email: "simran@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1BAdNGIurQRU4nPCiSJOP0jLm7DQi-bt4GOzOcTZMKLo/edit",
      category: "Academic"
    },
    {
      title: "Transcript (PG)",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Shashank",
      email: "shashank@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1ECi-clY_CMr6v488K4nIlMWu2XplHQ0xzDkLqw75tXg/edit",
      category: "Academic"
    },
    {
      title: "Transcript (UG)",
      fee: "200/-",
      processingTime: "3 days",
      contact: "Mr. Shashank",
      email: "shashank@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/1ECi-clY_CMr6v488K4nIlMWu2XplHQ0xzDkLqw75tXg/edit",
      category: "Academic"
    },
    {
      title: "Withdrawal Application",
      fee: "NA",
      processingTime: "10 days",
      contact: "Mr. Pankaj Prajapati",
      email: "pankaj@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfh4TJvkxTv0AxI1-AtIMsmoVsRKeSN_s0peE9Wr_tL1h7Erw/viewform",
      category: "Administrative"
    },
    {
      title: "Refund of Withdrawal",
      description: "If applicable",
      fee: "NA",
      processingTime: "After Approval of Withdrawal + 15 days",
      contact: "Mr. Pankaj Prajapati",
      email: "pankaj@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNBYowxGA6Yvypkskk2yY8FBcswqpMSxHHoKCXdO_U31VZpg/viewform",
      category: "Financial"
    },
    {
      title: "Scholarships",
      description: "Central/State etc",
      fee: "NA",
      processingTime: "As per the concerned scheme of Scholarship",
      contact: "Mr. Richard",
      email: "richard@iiitdmj.ac.in",
      link: "NA",
      category: "Financial"
    },
    {
      title: "Refund Form",
      description: "For extra amount paid by students",
      fee: "NA",
      processingTime: "1 Month",
      contact: "Mr. Pankaj Prajapati",
      email: "pankaj@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScc20-b3060WBYp_kZLqb1piSi_S4R8yfcl2SisC7aCTbnizQ/viewform",
      category: "Financial"
    },
    {
      title: "Gradesheet",
      fee: "NA",
      processingTime: "Issued immediately after result declaration",
      contact: "Mr. Irshad Ahmed Ansari",
      email: "irshad.ahmed@iiitdmj.ac.in",
      link: "email-only",
      description: "Only mail is required",
      category: "Academic"
    },
    {
      title: "Duplicate Gradesheet",
      fee: "500/-",
      processingTime: "10 days",
      contact: "Mr. Nitin Tripathi",
      email: "ntripathi@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeZW4HfmdZ2iY-OJUW_Gu_sviTGH0PF_EiLHusI7KvAd5BPIA/viewform",
      category: "Academic"
    },
    {
      title: "No Backlog Certificate",
      description: "Only for B.Tech/BDes",
      fee: "200/-",
      processingTime: "3 Days",
      contact: "Ms. Simran",
      email: "simran@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScHXeXuUhRpajX8VTMLyMoZx8bZUHLzsX1SPv5jcYy47V2QGg/viewform",
      category: "Academic"
    },
    {
      title: "Education/Validation",
      description: "Verification for the Students certificate",
      fee: "3000/-",
      processingTime: "3 Days",
      contact: "Mr. Shashank",
      email: "shashank@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScCSeoTrCivHOEebZ0Jdx4MOwbWbtfF8GkWwKK-mQPkf6EuEw/viewform",
      category: "Verification"
    },
    {
      title: "Forwarding of Documents for Higher Studies",
      fee: "NA",
      processingTime: "-",
      contact: "Academic Section",
      email: "aracad@iiitdmj.ac.in",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfn_1v9gMbgLZ9j3rIe4hAufCeNpavgc7iCDzMP1lyRe9rLEQ/viewform",
      category: "Administrative"
    }
  ];

  const postalCharges = {
    india: [
      {
        type: "Grade sheets/Transcript/Certificate",
        fee: "200/-",
        link: "/dummy/postal-regular.pdf"
      },
      {
        type: "Final Degree Certificate",
        fee: "500/-",
        link: "/dummy/postal-degree.pdf"
      }
    ],
    international: [
      {
        type: "Grade sheets/Transcript",
        fee: "2500/-",
        link: "/dummy/postal-intl-regular.pdf"
      },
      {
        type: "Final Degree Certificate",
        fee: "2500/-",
        link: "/dummy/postal-intl-degree.pdf"
      }
    ]
  };

  const bankDetails = {
    bankName: "INDIAN BANK (Erstwhile Allahabad Bank)",
    accountNumber: "50030581281",
    accountName: "Fee A/c",
    ifscCode: "IDIB000M694",
    micrCode: "482019014",
    accountType: "CURRENT ACCOUNT",
    branch: {
      name: "Mehgawan, IIITDM, CAMPUS BRANCH, JABALPUR",
      tel: "0761-2794051",
      email: "br.mehgawan@allahabadbank.in"
    }
  };
  
  const importantForms = [
    {
      title: "Application form UG Students",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Application Form for UG.pdf",
      category: "Applications"
    },
    {
      title: "Application form PG (MTech/MDes/PhD) Students",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Application form for PG Students.pdf",
      category: "Applications"
    },
    {
      title: "I-Card form",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/I-Card -New.pdf",
      category: "Identity"
    },
    {
      title: "Library member id",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/library member id.pdf",
      category: "Identity"
    },
    {
      title: "Login form CC",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/loginform CC.pdf",
      category: "Access"
    },
    {
      title: "Proforma for Affidavit of Anti-Ragging",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Proforma for Affidavit of Anti-Ragging .pdf",
      category: "Declarations"
    },
    {
      title: "Proforma for Medical certificate",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Proforma for Medical certificate.pdf",
      category: "Medical"
    },
    {
      title: "Anti-Drug Declaration Form",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/ANTI-DRUG DECLARATION FORM TO BE SIGNED BY THE STUDENT.pdf",
      category: "Declarations"
    },
    {
      title: "Undertaking for Non submission of certificate",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Undertaking for non submission certificate.pdf",
      category: "Undertakings"
    },
    {
      title: "Undertaking for online certificate",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Undertaking for online documents.pdf",
      category: "Undertakings"
    },
    {
      title: "Withdrawal form",
      link: "https://www.iiitdmj.ac.in/admission.iiitdmj.ac.in/Admission21/Important form/Withdrawl form.pdf",
      category: "Others"
    },
    {
      title: "No Dues Form",
      link: "No Dues form.pdf",
      category: "Others"
    }
  ];
  const crumbs = [{crumb: "Important Forms", link:"#"}]
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
          {/* Full-width image with centered heading */}
          <PageHeader breadCrumbs={crumbs} title={"Important Forms"}/>
    
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Academic Services Portal</h1>
          <p className="mt-2 text-sm text-gray-600">Comprehensive guide to certificates, services, and procedures</p>
        </div>
      </div>

      {/* Important Notes Alert */}
      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Notes</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Submit application with all supporting documents to concerned dealing person</li>
                  <li>Processing time starts after submission of complete application and fee</li>
                  <li>Processing days are working days (excluding Sat/Sun/holidays)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8">
          <nav className="flex space-x-4 bg-white p-2 rounded-lg shadow-sm">
            {['certificates', 'postal', 'bank', 'important'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                } transition-colors duration-150`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="mt-8">
          {activeTab === 'certificates' && (
            <div className="grid gap-6">
              {certificatesAndServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                          {service.description && (
                            <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Fee: {service.fee}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {service.processingTime}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-2" />
                          {service.contact}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          {service.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <a
                        href={service.link}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'important' && (
            <div className="grid gap-6">
              {importantForms.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                          {/* {service.description && (
                            <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                          )} */}
                        </div>
                      </div>
                      {/* <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Fee: {service.fee}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {service.processingTime}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-2" />
                          {service.contact}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          {service.email}
                        </div>
                      </div> */}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <a
                        href={service.link}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'postal' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Globe className="inline-block h-5 w-5 mr-2 text-blue-500" />
                  Postal Charges
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* India Charges */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">Within India</h4>
                    {postalCharges.india.map((charge, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{charge.type}</p>
                          <p className="text-sm text-gray-500">Fee: {charge.fee}</p>
                        </div>
                        <a
                          href={charge.link}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Form
                        </a>
                      </div>
                    ))}
                  </div>
                  {/* International Charges */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">International</h4>
                    {postalCharges.international.map((charge, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{charge.type}</p>
                          <p className="text-sm text-gray-500">Fee: {charge.fee}</p>
                        </div>
                        <a
                          href={charge.link}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Form
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bank' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Banknote className="h-5 w-5 mr-2 text-blue-500" />
                Bank Account Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {Object.entries(bankDetails)
                    .filter(([key]) => key !== 'branch')
                    .map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-500">
                          {key.split(/(?=[A-Z])/).join(' ').toUpperCase()}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-900">{value}</p>
                      </div>
                    ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-500">BRANCH DETAILS</p>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-gray-900">{bankDetails.branch.name}</p>
                    <p className="text-sm text-gray-900">Tel: {bankDetails.branch.tel}</p>
                    <p className="text-sm text-gray-900">Email: {bankDetails.branch.email}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicServicesDashboard;