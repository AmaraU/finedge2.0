import React from 'react'

import logo from '../../assets/sidebar/logo.svg';
import dashboardGrey from '../../assets/sidebar/dashboardGrey.svg';
import dashboardWhite from '../../assets/sidebar/dashboardWhite.svg';
import setupGrey from '../../assets/sidebar/setupGrey.svg';
import setupWhite from '../../assets/sidebar/setupWhite.svg';
import adminGrey from '../../assets/sidebar/adminGrey.svg';
import adminWhite from '../../assets/sidebar/adminWhite.svg';
import customerServGrey from '../../assets/sidebar/customerServGrey.svg';
import customerServWhite from '../../assets/sidebar/customerServWhite.svg';
import bankOpGrey from '../../assets/sidebar/bankOpGrey.svg';
import bankOpWhite from '../../assets/sidebar/bankingOpWhite.svg';
import depositGrey from '../../assets/sidebar/depositGrey.svg';
import depositWhite from '../../assets/sidebar/depositWhite.svg';
import loanGrey from '../../assets/sidebar/loanGrey.svg';
import loanWhite from '../../assets/sidebar/loanWhite.svg';
import reportsGrey from '../../assets/sidebar/reportsGrey.svg';
import placementsGrey from '../../assets/sidebar/placementsGrey.svg';


const SideBar = () => {

    const navBarLinks = [
        {
            label: 'Dashboard',
            path: '/',
            icon: dashboardGrey,
            activeIcon: dashboardWhite,
            children: []
        },
        {
            label: 'Setup',
            path: '/setup',
            icon: setupGrey,
            activeIcon: setupWhite,
            children: [
                'Manage Banks',
                'Demand Deposit Setup',
                'Product Document',
                'Loan Product Setup',
                'Treasury Product Setup',
                'Manage Branch',
                'Commercial Banks',
                'Manage GL Nodes',
                'Manage GL Class',
                'Manage Country',
                'Manage Regions',
                'Manage States',
                'Manage Departments',
                'Manage Towns',
                'Transaction Type Setup',
                'Manage Cheque Books',
                'Manage Exceptions'
            ]
        },
        {
            label: 'Admin',
            path: '/admin',
            icon: adminGrey,
            activeIcon: adminWhite,
            children: [
                'Manage Users',
                'Map GL',
                'Manage Role',
                'Reset User',
                'Change Password',
                'Manage Posting Limit',
                'Manage GL Account',
                'Authorization',
                'Inter-Branch Access',
                'Manage System Lock',
                'Manage Account Officer',
                'Map EFASS',
                'SMS & Email Alerts',
                'System Reconciliation',
                'Download Statement'
            ]
        },
        {
            label: 'Customer Service',
            path: '/customer-service',
            icon: customerServGrey,
            activeIcon: customerServWhite,
            children: [
                'Manage Customer',
                'Corporate Customer Link',
                'Manage Account',
                'Manage Mandate',
                'Customer Balance',
                'Standing Instruction',
                'Bulk Range Cheque',
                'Manage Contact',
                'Manage Lien',
                'Reset Customer Account Record',
                'Cheque Book Edit',
                'Account Reactivation',
                'BVN Maintenance',
                'Edit Old Account',
                'Close Account',
                'Manage Account Charge',
                'Alert Maintenance',
                'Manage Target',
                'Customer Maintenance History',
                'Account Profile'
            ]
        },
        {
            label: 'Banking Operation',
            path: '/banking-operation',
            icon: bankOpGrey,
            activeIcon: bankOpWhite,
            children: [
                'Bulk Upload',
                'Tellering',
                'GL to Cash',
                'Clearing',
                'Transfer',
                'Cash Deposit',
                'Cash Withdrawal',
                'Cheque Deposit',
                'Cheque Withdrawal',
                'Batch Posting',
                'View Clearing CHQ',
                'Charge Concession',
                'Withdraw Toward Uncleared',
                'Same Day Reversal',
                'Batch Upload',
                'Transaction Reversal',
                'Return Cheque Reversal',
                'Amortise',
                'Transaction Authorization'
            ]
        },
        {
            label: 'Deposit',
            path: '/deposit',
            icon: depositGrey,
            activeIcon: depositWhite,
            children: [
                'Create Deposit Account',
                'TD Mandate',
                'TD Liquidation',
                'TD Rate Adjustment',
                'TD Rollover',
                'TD Reduction',
                'Deal Certificate',
                'TD Lien',
                'TD Status',
                'TD Summary',
                'TD Top Up',
                'TD WHT Schedule',
                'TD Payable Schedule',
                'TD Deal List',
                'TD Proof',
            ]
        },
        {
            label: 'Loan',
            path: '/loan',
            icon: loanGrey,
            activeIcon: loanWhite,
            children: [
                'Loan Calculator',
                'Manage Loan Application',
                'Manage Loan Accounts',
                'Disburse Loan',
                'Manage Group Loan Application',
                'Group Loan Disbursement',
                'Overdraft',
                'Top-Up Loan',
                'Restructure Loan',
                'Liquidate Loan',
                'Edit Loan Settlement',
                'Loan Repayment Due',
                'Loan Schedule',
                'Loan Receivable',
                'Loan Insurance',
                'Manage Loan Limit',
                'Loan Risk Rating',
                'CBN Loan Reports'
            ]
        },
        {
            label: 'Reports',
            path: '/reports',
            icon: reportsGrey,
            activeIcon: '',
            children: []
        },
        {
            label: 'Placements',
            path: '/placements',
            icon: placementsGrey,
            activeIcon: '',
            children: []
        },
    ];


    return (
        <div>
            {/* Navigation Toggle */}
            <div className="md:hidden py-2 text-center top-0 left-0">
                <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-950 focus:outline-hidden focus:bg-gray-900" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-sidebar-collapsible-group" aria-label="Toggle navigation" data-hs-overlay="#hs-sidebar-collapsible-group">
                    <img src={logo} alt="Logo" className="w-7 h-8" />
                </button>
            </div>
            {/* End Navigation Toggle */}

            {/* Sidebar */}
            <div id="hs-sidebar-collapsible-group" className="hs-overlay [--auto-close:md] md:block md:translate-x-0 md:end-auto md:bottom-0 w-62
                hs-overlay-open:translate-x-0
                -translate-x-full transition-all duration-300 transform
                h-full
                hidden
                fixed top-0 start-0 bottom-0 z-60
                bg-white border-e border-gray-200
                " role="dialog" tab-index="-1" aria-label="Sidebar" >
                <div className="relative flex flex-col h-full max-h-full ">
                    {/* Header */}
                    <header className="p-5 flex justify-between items-center gap-x-2">
                        <a className="flex items-center gap-2 font-semibold text-md text-slate-700 focus:outline-hidden focus:opacity-8" href="#" aria-label="Brand">
                            <img src={logo} alt="Logo" className="w-7 h-8" />
                            FinEdge Web Portal
                        </a>

                        <div className="md:hidden -me-2">
                            {/* Close Button */}
                            <button type="button" className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100" data-hs-overlay="#hs-sidebar-collapsible-group">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                <span className="sr-only">Close</span>
                            </button>
                            {/* End Close Button */}
                        </div>
                    </header>
                    {/* End Header */}

                    {/* Body */}
                    <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <div className="hs-accordion-group p-4 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                            <ul className="space-y-1">
                                <h3 className='text-slate-500 text-xs px-2'>MENU</h3>
                                {navBarLinks?.map((link, i) => (
                                    <li className="hs-accordion" key={i} id="users-accordion">
                                        {/* <Link href={link.path} type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200" aria-expanded="true" aria-controls="users-accordion-collapse-1"> */}
                                        {/* dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-indigo-800 dark:text-slate-500 */}
                                        <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-md
                                            text-slate-500 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:text-white focus:bg-indigo-800
                                            " aria-expanded="true" aria-controls={"users-accordion-collapse-"+(i+1)}>
                                            {/* <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> */}
                                            <img className="group-hover:hidden" src={link.icon} alt={link.label} />
                                            <img className='focus:block hidden' src={link.activeIcon} alt={link.label} />
                                            {link.label}

                                            <svg className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                                            <svg className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            {/* </Link> */}
                                        </button>
                                        {(link.children && link.children.length >= 1) &&
                                            <div id={"users-accordion-collapse-"+(i+1)} className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion">
                                                <ul className="hs-accordion-group pt-1 ps-7 space-y-1" data-hs-accordion-always-open>
                                                    {link.children.map((child, index) => (
                                                        <li key={index}>
                                                            <a className="flex justify-between items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                                                                {child}
                                                                <svg className="ms-auto size-5 text-gray-800 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                                    {/* <polyline fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="20.3,25.4 28.6,33.9 46.7,8.3 "/> */}
                                                                    {/* <path d="M14.1 27.2l7.1 7.2 16.7-16.8" /> */}
                                                                    {/* <path d="m7 12 4 4 8-8" /> */}
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                    {/* End Body */}
                </div>
            </div>
            {/* End Sidebar */}
        </div>
    )
}

export default SideBar