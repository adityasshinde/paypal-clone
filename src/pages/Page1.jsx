import React from "react";
import { IconBrandFacebook, IconBrandTwitter, IconQrcode, IconCircleCheck } from '@tabler/icons';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineQrCode2 } from "react-icons/md";
import Button from "../components/ui/Button";

const Page = () => {
  return (
    <div className="bg-f5f5f5 min-h-screen mt-20 flex items-start justify-center">
      <div className="bg-white mt-4 px-2 py-8 max-w-md w-full rounded-lg shadow-lg">
        <div className="flex font-normal items-center justify-center mb-6">
          <IconCircleCheck size='5rem' stroke='1px' color='green' />
        </div>
        <h2 className="text-3xl my-8" style={{fontWeight:'200'}}>Your product link is ready</h2>
        <p className="text-sm font-medium text-gray-600 my-8">You can spread the word by sharing this link<br/> on - email, social media, chat, WhatsApp and<br/> more</p>
        <div className="flex items-center justify-center mb-12">
          <FaFacebook  size={36} color="white" fill="#207EB8" className="mx-6" />
          <FaTwitter  size={36} color="white" fill="#207EB8" className="mx-6" />
          <MdOutlineQrCode2 size={36} color="white" fill="#207EB8" className="mx-6" />
        </div>
        <Button varient='determined' text='Get Link' />
        <Button varient='normal' text='Return To Dashboard' />
      </div>
    </div>
  );
};

export default Page;
