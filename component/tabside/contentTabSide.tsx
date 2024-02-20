import { LocationContext } from "@/pages/_app";
import styles from "./tabside.module.css";
import { useContext, useEffect, useState } from "react";
import { Type } from "../interface";
import Image from "next/image";
import Link from "next/link";
import {
  ExampleAll,
  ArrowHaftRight,
  ImageIcon,
  Symbol,
  Delete,
  CreateGroup,
  Start,
  Brand,
  UserCreateIcon,
  ArrowLeft
} from "@/public/tabside/tabside_mau";
import { usePathname } from 'next/navigation'


interface TypeItemCpn {
  icon: string;
  name: string;
  link: string;
  width: number;
  height: number;
}
interface TypeProjectCpn {
  icon: string;
  name: string;
  link: string;
  width: number;
  height: number;
  hasLastIcon: boolean;
}
function TabSiteHome() {
  const data = [
    {
      icon: "/tabside/trang_chu/project.png",
      name: "Dự án",
      link: "projects",
      width: 24,
      height: 24
    },
    {
      icon: "/tabside/trang_chu/sample.png",
      name: "Mẫu",
      link: "templates",
      width: 26,
      height: 26
    },
    {
      icon: "/tabside/trang_chu/trademark.png",
      name: "Thương hiệu",
      link: "brand",
      width: 24,
      height: 31
    },
    {
      icon: "/tabside/trang_chu/application.png",
      name: "Ứng dụng",
      link: "your-apps",
      width: 23,
      height: 23
    }
  ];
  const ItemCpn = ({ data }: { data: TypeItemCpn }) => {
    return (
      <Link href={`/${data.link}`}>
        <div className={`${styles.content_item}`}>
          <div className={`${styles.content_item_left}`}>
            <Image
              src={data?.icon}
              width={data?.width}
              height={data?.height}
              alt={data?.name}
            ></Image>
            <p>{data?.name}</p>
          </div>
          <Image
            src={"/tabside/arrow.png"}
            width={6}
            height={13}
            alt={data?.name}
          ></Image>
        </div>
      </Link>
    );
  };
  return (
    <>
      <div className={`${styles.content_item} ${styles.magic}`}>
        <div className={`${styles.content_item_left}`}>
          <Image
            src={"/tabside/trang_chu/magic.png"}
            width={23}
            height={29}
            alt={"magic studio"}
          ></Image>
          <p className={`${styles.magic_text}`}>Magic Studio</p>
        </div>
      </div>
      <div>
        {data.map((data: TypeItemCpn, index: number) => {
          return <ItemCpn data={data} key={index} />;
        })}
      </div>
    </>
  );
}
function TabSiteProject() {
  
  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
  
  useEffect(() => {
    if (locationOfSite?.name != "sample") {
      setLocationOfSite({ name: "sample" });
    }
  }, [locationOfSite.name]);

 

  const data = [
    {
      icon: "/tabside/du_an/project.png",
      name: "Tất cả dự án",
      link: "projects",
      width: 24,
      height: 24,
      hasLastIcon: false
    },
    {
      icon: "/tabside/du_an/single.png",
      name: "Dự án của bạn",
      link: "your-projects",
      width: 24,
      height: 24,
      hasLastIcon: true
    },
    {
      icon: "/tabside/du_an/multi.png",
      name: "Đã chia sẻ với bạn",
      link: "shared-with-you",
      width: 25,
      height: 18,
      hasLastIcon: true
    }
  ];
  const data2 = [
    {
      icon: "/tabside/du_an/file.png",
      name: "Thư mục 1",
      link: "",
      width: 40,
      height: 40,
      hasLastIcon: false
    },
    {
      icon: "/tabside/du_an/file.png",
      name: "Thư mục 1",
      link: "",
      width: 40,
      height: 40,
      hasLastIcon: false
    },
    {
      icon: "/tabside/du_an/file.png",
      name: "Thư mục 1",
      link: "",
      width: 40,
      height: 40,
      hasLastIcon: false
    },
    {
      icon: "/tabside/du_an/file.png",
      name: "Thư mục 1",
      link: "",
      width: 40,
      height: 40,
      hasLastIcon: false
    },
    {
      icon: "/tabside/du_an/file.png",
      name: "Thư mục 1",
      link: "",
      width: 40,
      height: 40,
      hasLastIcon: false
    }
  ];
  const ProjectCpn = ({ data }: { data: TypeProjectCpn }) => {
    return (
      <Link href={`/${data.link}`}>
        <div
          className={`${styles.content_item} ${
            data?.name == "Tất cả dự án" ? styles.active : ""
          }`}
        >
          <div className={`${styles.content_item_left}`}>
            <Image
              src={data?.icon}
              width={data?.width}
              height={data?.height}
              alt={data?.name}
            ></Image>
            <p>{data?.name}</p>
          </div>
          {data?.hasLastIcon && (
            <Image
              src={"/tabside/arrow.png"}
              width={6}
              height={13}
              alt={data?.name}
            ></Image>
          )}
        </div>
      </Link>
    );
  };
  return (
    <>
      <div>
        {data.map((data: TypeProjectCpn, index: number) => {
          return <ProjectCpn data={data} key={index} />;
        })}
      </div>
      <p className={`${styles.recently_text}`}>Gần đây</p>
      <div className={`${styles.recently_list}`}>
        {data2.map((data: TypeProjectCpn, index: number) => {
          return <ProjectCpn data={data} key={index} />;
        })}
      </div>
    </>
  );
}

export default function ContentTabSide({ animation }: { animation: string }) {
  const [locationCurrent, setLOcationCurrent] = useState<any>('');
  const [indexCurrent, setIndevCurrent ] = useState<number>(0);
  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
  const pathname = usePathname()

  useEffect(() => {
    setLOcationCurrent(pathname);
  }, [pathname]);
  const titleList = [
    {
      'path': 'templates/business',
      'text': 'Kinh doanh',
      'number': 1
    },
    {
      'path': 'templates/society',
      'text': 'Mạng xã hội',
      'number': 2
    },
    {
      'path': 'templates/education',
      'text': 'Giáo dục',
      'number': 3
    },
    {
      'path': 'templates/marketing',
      'text': 'Marketing',
      'number': 4
    },
    {
      'path': 'templates/print',
      'text': 'In ấn',
      'number': 5
    },
    {
      'path': 'templates/cart-and-invitation',
      'text': 'Thiệp và thiệp mời',
      'number': 6
    }
  ];


  if (locationOfSite?.name == "home") {
    return (
      <div
        className={`${animation === "left" ? styles.animated : ""} ${
          animation === "left" ? styles.fadeInLeft : ""
        }`}
      >
        <TabSiteHome />
      </div>
    );
  }
  if (locationOfSite?.name == "project") {
    return (
      <div className={`${styles.animated} ${styles.fadeInRight}`}>
        <TabSiteProject />
      </div>
    );
  }
  if (locationOfSite?.name == "sample") {
    return (
      <>
        <div className={styles.sidebar_example}>
            {/* comback */}
            <Link href={'/'} >
              <div className={styles.sidebar__comeback}>
                  <ArrowLeft className={``}/>
                  <p className={styles.sidebar__comback_text}>Quay lại trang chủ</p>
              </div>
            </Link>
            {/* all */}
            <Link href={'/templates'}>
            <div className={`${styles.sidebar__current_page} ${locationCurrent  === '/templates' ? styles.sidebar__current_active : ''}`}>
            <ExampleAll className={`${styles.sidebar__current_icon}`} />
            <p className={styles.sidebar__current_text}>Tất cả các mẫu</p>
          </div>
            </Link>
         
          {/* detail */}
          <ul className={styles.sidebar__detail}>
            {titleList.map((text, index) => (
              <Link href={text.path} >
            <li key={index} className={`${locationCurrent === (pathname !== '/templates' ? `/${text.path}` : `/templates/${text.path}`) ? styles.sidebar__current_active : ''} ${index === text.number ? styles.sidebar__current_active : ''}`}>
                <ArrowHaftRight className={undefined} />
                <p className={styles.sidebar__detail_text}>{text.text}</p>
              </li>
              </Link>
            ))}
          </ul>
          {/*   */}
          <div className={styles.sidebar__orther}>
            <Link href={'/templates/photo'}>
              <div className={`${styles.sidebar__orther_item}  ${locationCurrent  === '/templates/photo' ? styles.sidebar__current_active : ''}`}>
                <ImageIcon className={`${styles.sidebar__orther_icon}`} />
                <p className={`${styles.sidebar__orther_text}`}>Ảnh</p>
              </div>
            </Link>
            <Link href={'/templates/symbol'}>
            <div className={`${styles.sidebar__orther_item} `}>
              <Symbol className={``} />
              <p className={`${styles.sidebar__orther_text}`}>Biểu tượng</p>
            </div>
            </Link>
          </div>
          {/* content of you */}
          <div className={styles.sidebar__content_of_you}>

          <h4 className={styles.sidebar__content_title}>Nội dung của bạn</h4>
          <div className={styles.sidebar__content_all}>
            <div className={styles.sidebar__content_item}>
              <UserCreateIcon className={``} />
              <p>Creater bạn theo dõi</p>
            </div>
            <div className={styles.sidebar__content_item}>
              <Start className={``} />
              <p>Đã gắn sao</p>
            </div>
            <div className={styles.sidebar__content_item}>
              <Brand className={``} />
              <p>Mẫu thương hiệu</p>
            </div>
          </div>
          </div>
          {/* create and delete */}
          {/* <div className={styles.function_fix}>
                <div className={styles.function_fix_item}>
                <CreateGroup className={``} />
                    <p>Tạo đội</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.function_fix_item}>
                <Delete className={``} />
                    <p>Thùng rác</p>
                </div>
            </div> */}
        </div>
      </>
    );
  }
}
