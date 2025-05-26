
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Printer } from 'lucide-react';

interface StudentFormData {
  date: string;
  rollNo: string;
  studentName: string;
  accountHolder: string;
  accountNo: string;
  bankName: string;
  branch: string;
  city: string;
  ifscCode: string;
  donationAmount: string;
  contactNo: string;
  mobile: string;
  email: string;
  fatherName: string;
  fatherMobile: string;
  address: string;
  submittedDate: string;
}

const departments = [
  "Accounts",
  "Central Library", 
  "Store",
  "LUCS",
  "Warden (In-charge)",
  "Administration",
  "Sports",
  "Head of Department",
  "Medical Unit",
  "Placement Office",
  "NAD Cell"
];

const StudentNoDuesForm: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState<StudentFormData>({
    date: today,
    rollNo: '',
    studentName: '',
    accountHolder: '',
    accountNo: '',
    bankName: '',
    branch: '',
    city: '',
    ifscCode: '',
    donationAmount: '',
    contactNo: '',
    mobile: '',
    email: '',
    fatherName: '',
    fatherMobile: '',
    address: '',
    submittedDate: today
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 print:p-0 print:max-w-none">
      <Card className="border-2 border-gray-300 print:border-black print:shadow-none">
        <CardHeader className="border-b-2 border-gray-300 print:border-black p-4 print:p-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img 
                src="https://raw.githubusercontent.com/theshivammaheshwari/requisition/main/LNMIIT.png" 
                alt="LNMIIT Logo" 
                className="h-16 w-auto print:h-12"
              />
              <div>
                <h2 className="text-lg font-bold">THE LNM INSTITUTE OF INFORMATION TECHNOLOGY</h2>
                <h3 className="text-base font-semibold">JAIPUR</h3>
              </div>
            </div>
            
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold underline">STUDENT "NO DUES"</h1>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <Label htmlFor="date" className="font-semibold">Date:</Label>
                <Input 
                  id="date" 
                  name="date"
                  type="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  className="w-32 border border-black print:border-black"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 print:p-2 space-y-4 print:space-y-2">
          <div className="text-sm print:text-xs">
            <p>This is to certify that there is nothing outstanding against Mr./Ms. 
              <Input 
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="inline-block w-48 mx-2 border-0 border-b border-black bg-transparent print:border-black"
                placeholder="Student Name"
              />
              Roll No. 
              <Input 
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                className="inline-block w-32 mx-2 border-0 border-b border-black bg-transparent print:border-black"
                placeholder="Roll No"
              />
            </p>
          </div>

          <div className="border-2 border-black print:border-black">
            <table className="w-full border-collapse text-sm print:text-xs">
              <thead>
                <tr className="border-b border-black print:border-black">
                  <th className="border-r border-black print:border-black p-2 text-left font-semibold bg-gray-50 print:bg-white">Department</th>
                  <th className="border-r border-black print:border-black p-2 text-left font-semibold bg-gray-50 print:bg-white">Dues if any/No Dues</th>
                  <th className="border-r border-black print:border-black p-2 text-left font-semibold bg-gray-50 print:bg-white">Signature of HoD</th>
                  <th className="p-2 text-left font-semibold bg-gray-50 print:bg-white">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept, index) => (
                  <tr key={index} className="border-b border-black print:border-black">
                    <td className="border-r border-black print:border-black p-2 font-medium">{dept}</td>
                    <td className="border-r border-black print:border-black p-2">
                      <div className="h-6 print:h-4"></div>
                    </td>
                    <td className="border-r border-black print:border-black p-2">
                      <div className="h-6 print:h-4"></div>
                    </td>
                    <td className="p-2">
                      <div className="h-6 print:h-4"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center text-sm font-semibold underline mt-4 print:mt-2">
            To be filled by the Student
          </div>

          <div className="space-y-3 print:space-y-1 border-t pt-4 print:pt-2">
            <div className="text-sm font-semibold print:text-xs">
              * Bank details for Caution Money Refund:
            </div>
            
            <div className="grid grid-cols-2 gap-3 print:gap-1 text-sm print:text-xs">
              <div>
                <Label htmlFor="accountHolder" className="text-xs print:text-[10px]">Name of Account Holder:</Label>
                <Input 
                  id="accountHolder" 
                  name="accountHolder"
                  value={formData.accountHolder} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="accountNo" className="text-xs print:text-[10px]">Account No:</Label>
                <Input 
                  id="accountNo" 
                  name="accountNo"
                  value={formData.accountNo} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="bankName" className="text-xs print:text-[10px]">Name of Bank:</Label>
                <Input 
                  id="bankName" 
                  name="bankName"
                  value={formData.bankName} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="branch" className="text-xs print:text-[10px]">Branch:</Label>
                <Input 
                  id="branch" 
                  name="branch"
                  value={formData.branch} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="city" className="text-xs print:text-[10px]">City:</Label>
                <Input 
                  id="city" 
                  name="city"
                  value={formData.city} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="ifscCode" className="text-xs print:text-[10px]">IFSC Code:</Label>
                <Input 
                  id="ifscCode" 
                  name="ifscCode"
                  value={formData.ifscCode} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
            </div>

            <div className="text-xs italic print:text-[10px]">
              (Please attach photo copy of a Cheque)
            </div>

            <div className="flex items-center gap-2 text-sm print:text-xs">
              <span>*</span>
              <span>I wish to donate Rs.</span>
              <Input 
                name="donationAmount"
                value={formData.donationAmount}
                onChange={handleChange}
                className="inline-block w-20 border-0 border-b border-black bg-transparent print:border-black h-6"
                placeholder="Amount"
              />
              <span>from my caution money refund due from the Institute, towards Students' Welfare fund of LNMIIT.</span>
            </div>

            <div className="grid grid-cols-2 gap-3 print:gap-1 text-sm print:text-xs">
              <div>
                <Label htmlFor="contactNo" className="text-xs print:text-[10px]">Contact No (Res.):</Label>
                <Input 
                  id="contactNo" 
                  name="contactNo"
                  value={formData.contactNo} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="mobile" className="text-xs print:text-[10px]">Mobile:</Label>
                <Input 
                  id="mobile" 
                  name="mobile"
                  value={formData.mobile} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs print:text-[10px]">E-mail:</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
              <div>
                <Label htmlFor="fatherMobile" className="text-xs print:text-[10px]">Father's Mobile no:</Label>
                <Input 
                  id="fatherMobile" 
                  name="fatherMobile"
                  value={formData.fatherMobile} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black h-6 print:h-4"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="fatherName" className="text-xs print:text-[10px]">Father's Name:</Label>
              <Input 
                id="fatherName" 
                name="fatherName"
                value={formData.fatherName} 
                onChange={handleChange} 
                className="border-0 border-b border-black bg-transparent print:border-black w-full h-6 print:h-4"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-xs print:text-[10px]">Address for correspondence:</Label>
              <Textarea 
                id="address" 
                name="address"
                value={formData.address} 
                onChange={handleChange} 
                className="border border-black min-h-12 print:min-h-8 mt-1 text-sm print:text-xs"
              />
            </div>

            <div className="flex justify-between items-end mt-4 print:mt-2">
              <div>
                <Label htmlFor="submittedDate" className="text-xs print:text-[10px]">Submitted Date:</Label>
                <Input 
                  id="submittedDate" 
                  name="submittedDate"
                  type="date"
                  value={formData.submittedDate} 
                  onChange={handleChange} 
                  className="border-0 border-b border-black bg-transparent print:border-black w-32 h-6 print:h-4"
                />
              </div>
              <div className="text-right">
                <div className="text-xs print:text-[10px] mb-2">Signature of Student</div>
                <div className="border-b border-black w-32 h-8 print:h-6"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 print:hidden">
            <Button 
              type="button" 
              onClick={handlePrint} 
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Printer className="h-4 w-4" /> Print Form
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentNoDuesForm;
