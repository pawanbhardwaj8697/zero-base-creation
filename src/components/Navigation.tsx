import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, ClipboardList } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Requisition Form",
      path: "/",
      icon: ClipboardList,
      description: "Create requisition requests"
    },
    {
      title: "Student No Dues",
      path: "/student-no-dues",
      icon: FileText,
      description: "Student clearance form"
    }
  ];

  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(item => item.path === location.pathname);
    return currentItem ? currentItem.title : "Select Form";
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white border-b border-gray-200 print:hidden">
      <div className="flex items-center gap-2">
        <img 
          src="https://raw.githubusercontent.com/theshivammaheshwari/requisition/main/LNMIIT.png" 
          alt="LNMIIT Logo" 
          className="h-8 w-auto"
        />
        <span className="font-semibold text-gray-800">LNMIIT Forms</span>
      </div>
      
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 min-w-48"
          >
            <span>{getCurrentPageTitle()}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="w-64 bg-white border border-gray-200 shadow-lg z-50"
        >
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.path} asChild>
              <Link 
                to={item.path} 
                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer w-full"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4 text-blue-600" />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{item.title}</span>
                  <span className="text-xs text-gray-500">{item.description}</span>
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navigation;
