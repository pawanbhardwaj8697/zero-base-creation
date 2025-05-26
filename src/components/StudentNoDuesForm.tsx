
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
  studentSignature: string;
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
    submittedDate: today,
    studentSignature: ''
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
    <div className="max-w-4xl mx-auto p-4 print:p-0">
      <form className="space-y-4 print:space-y-2">
        <Card className="border-2 border-gray-200 shadow-sm print:shadow-none print:border-1">
          <CardHeader className="border-b py-3 flex flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://raw.githubusercontent.com/theshivammaheshwari/requisition/main/LNMIIT.png" 
                alt="LNMIIT Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="text-center">
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
                  className="w-40 border-2 border-black"
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-4 space-y-4">
            <div className="text-sm">
              <p>This is to certify that there is nothing outstanding against Mr./Ms. _________________ Roll No. _________________</p>
            </div>

            <div className="border border-black">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black">
                    <th className="border-r border-black p-2 text-left font-semibold">Department</th>
                    <th className="border-r border-black p-2 text-left font-semibold">Dues if any/No Dues</th>
                    <th className="border-r border-black p-2 text-left font-semibold">Signature of HoD</th>
                    <th className="p-2 text-left font-semibold">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept, index) => (
                    <tr key={index} className="border-b border-black">
                      <td className="border-r border-black p-2">{dept}</td>
                      <td className="border-r border-black p-2">
                        <div className="h-8"></div>
                      </td>
                      <td className="border-r border-black p-2">
                        <div className="h-8"></div>
                      </td>
                      <td className="p-2">
                        <div className="h-8"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center text-sm font-medium underline mt-4">
              To be filled by the Student
            </div>

            <div className="space-y-3 border-t pt-4">
              <div className="text-sm font-semibold">
                * Bank details for Caution Money Refund:
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="accountHolder" className="text-sm">Name of Account Holder:</Label>
                  <Input 
                    id="accountHolder" 
                    name="accountHolder"
                    value={formData.accountHolder} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="accountNo" className="text-sm">Account No:</Label>
                  <Input 
                    id="accountNo" 
                    name="accountNo"
                    value={formData.accountNo} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="bankName" className="text-sm">Name of Bank:</Label>
                  <Input 
                    id="bankName" 
                    name="bankName"
                    value={formData.bankName} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="branch" className="text-sm">Branch:</Label>
                  <Input 
                    id="branch" 
                    name="branch"
                    value={formData.branch} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm">City:</Label>
                  <Input 
                    id="city" 
                    name="city"
                    value={formData.city} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="ifscCode" className="text-sm">IFSC Code:</Label>
                  <Input 
                    id="ifscCode" 
                    name="ifscCode"
                    value={formData.ifscCode} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
              </div>

              <div className="text-xs italic">
                Please attach photo copy of a Cheque)
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span>*</span>
                <span>I wish to donate Rs.________ from my caution money refund due from the Institute, towards Students' Welfare fund of LNMIIT.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="contactNo" className="text-sm text-blue-600">Contact No (Res.):</Label>
                  <Input 
                    id="contactNo" 
                    name="contactNo"
                    value={formData.contactNo} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-sm text-blue-600">Mobile:</Label>
                  <Input 
                    id="mobile" 
                    name="mobile"
                    value={formData.mobile} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">E-mail:</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="fatherMobile" className="text-sm text-blue-600">Mobile no:</Label>
                  <Input 
                    id="fatherMobile" 
                    name="fatherMobile"
                    value={formData.fatherMobile} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="fatherName" className="text-sm">Father's Name:</Label>
                <Input 
                  id="fatherName" 
                  name="fatherName"
                  value={formData.fatherName} 
                  onChange={handleChange} 
                  className="border-b border-black border-0 rounded-none bg-transparent w-full"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-sm">Address for correspondence:</Label>
                <Textarea 
                  id="address" 
                  name="address"
                  value={formData.address} 
                  onChange={handleChange} 
                  className="border border-black min-h-16 mt-1"
                />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <Label htmlFor="submittedDate" className="text-sm">Submitted Date:</Label>
                  <Input 
                    id="submittedDate" 
                    name="submittedDate"
                    type="date"
                    value={formData.submittedDate} 
                    onChange={handleChange} 
                    className="border-b border-black border-0 rounded-none bg-transparent w-32"
                  />
                </div>
                <div className="text-right">
                  <div className="text-sm mb-2">Signature of Student</div>
                  <div className="border-b border-black w-40 h-8"></div>
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
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default StudentNoDuesForm;
