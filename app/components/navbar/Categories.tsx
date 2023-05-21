'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { SlEyeglass,SlEye } from 'react-icons/sl';
import { 
  
  GiBoatFishing, 
  
  GiIsland,
  GiHospital
} from 'react-icons/gi';

import { MdOutlineVilla,MdOutlineWhereToVote } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Нүдний шил',
    icon: SlEyeglass,
    description: 'Хамгийн сүүлийн үеийн шинэ шинэлэг шилнүүд',
  },
  {
    label: 'Эмчилгээ',
    icon: GiHospital,
    description: 'Чанартай найдвартай эмчилгээ',
  },
  {
    label: 'хүссэн шилээ захиалах',
    icon: MdOutlineVilla,
    description: 'Орчин үеийн'
  },
  {
    label: 'Орон нутгийн салбар',
    icon: MdOutlineWhereToVote,
    description: 'Хөдөө орон нутагт ч салбартай шүү'
  },
  {
    label: 'Хараа тэглэх эмчилгээ',
    icon: SlEyeglass,
    description: 'Шил зүүхгүйгээр харцгаая!'
  },
  {
    label: 'Линз',
    icon: SlEye,
    description: 'This property is on an island!'
  },
 
  
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;