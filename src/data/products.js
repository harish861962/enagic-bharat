import k8 from "../assets/k8.jpg";
import sd501 from "../assets/SD501_banner3.jpg";
import anespa from "../assets/platinum-3.jpg";
import ukon from "../assets/Super-501-3-1.jpg";

export const products = [
  {
    id: 1,
    name: "Leveluk K8",
    description: "Premium Water Ionizer",
    price: "₹2,40,000",
    image: k8,

    specifications: [
      { title: "Electrode Plates", value: "8 Plates" },
      { title: "Plate Size", value: "135 × 75 mm" },
      { title: "Water Types", value: "7 Types" },
      { title: "pH Range", value: "2.5 - 11.5" },
      { title: "Power Consumption", value: "230W" },
      { title: "Warranty", value: "5 Years" },
    ],
  },

  {
    id: 2,
    name: "SD501",
    description: "Advanced Water Ionizer",
    price: "₹1,90,000",
    image: sd501,

    specifications: [
      { title: "Electrode Plates", value: "7 Plates" },
      { title: "Plate Size", value: "125 × 70 mm" },
      { title: "Water Types", value: "7 Types" },
      { title: "pH Range", value: "3.0 - 11.0" },
      { title: "Power Consumption", value: "220W" },
      { title: "Warranty", value: "5 Years" },
    ],
  },

  {
    id: 3,
    name: "Anespa DX",
    description: "Luxury Spa System",
    price: "₹1,40,000",
    image: anespa,

    specifications: [
      { title: "Water Type", value: "Hot / Cold" },
      { title: "Mineral Stone", value: "Natural" },
      { title: "Installation", value: "Bathroom" },
      { title: "Warranty", value: "3 Years" },
    ],
  },

  {
    id: 4,
    name: "Ukon Sigma",
    description: "Health Supplement",
    price: "₹40,000",
    image: ukon,

    specifications: [
      { title: "Type", value: "Supplement" },
      { title: "Quantity", value: "60 Sachets" },
      { title: "Usage", value: "Daily" },
      { title: "Made In", value: "Japan" },
    ],
  },
];