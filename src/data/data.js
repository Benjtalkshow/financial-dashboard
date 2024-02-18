import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Dashboard', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];


export const transactionLabels = ["Jan", "Feb", "Mar", "April", "May", "Jun"];
export const transactionDatasets = [
  {
    label: "Bulk Transactions",
    data: [10, 20, 30, 25, 35, 45],
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 132)",
    borderWidth: 1,
  },
  {
    label: "Single Transactions",
    data: [15, 25, 35, 30, 40, 50],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    borderWidth: 1,
  },
];

export const reportLabels = ["January", "February", "March", "April", "May", "June"]
          export const reportDatasets = [
            {
              label: "2022",
              data: [10, 20, 30, 25, 35, 45],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: "2023",
              data: [15, 25, 35, 30, 40, 50],
              backgroundColor: 'rgba(255, 255, 0, 0.5)', 
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
                label: "2024",
                data: [15, 25, 35, 40, 40, 35],
                backgroundColor: 'rgba(255, 99, 132, 0.5)', 
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
          ]

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const pieDatasets = [
    { label: "Red", value: 300 },
    { label: "Blue", value: 50 },
    { label: "Yellow", value: 100 },
  ];