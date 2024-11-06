import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  // Function to handle menu item click
  const handleMenuItemClick = (href, isExternal) => {
    if (!href) return;
    
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to render menu item based on href and external status
  const renderMenuItem = (item) => {
    const isExternal = item.href?.startsWith('http');
    const content = (
      <div className="flex items-center gap-2 p-1.5 w-full">
        {item.icon && (
          <div className="bg-gray-50 p-1.5 rounded-md group-hover:bg-gray-100 transition-colors">
            <item.icon size={16} className="text-gray-600" />
          </div>
        )}
        <div className="flex-grow">
          <p className="text-[13px] font-medium text-gray-600 leading-tight group-hover:text-gray-900 transition-colors">
            {item.name}
          </p>
          {item.desc && (
            <p className="text-[11px] text-gray-400 leading-tight">
              {item.desc}
            </p>
          )}
        </div>
        {/* {isExternal && (
          <ExternalLink size={12} className="text-gray-400 group-hover:text-gray-600" />
        )} */}
      </div>
    );

    if (!item.href) {
      return content;
    }

    if (isExternal) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
          onClick={(e) => {
            e.preventDefault();
            handleMenuItemClick(item.href, true);
          }}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={item.href} className="block w-full">
        {content}
      </Link>
    );
  };

  const hasSubMenu = menu?.subMenuGroups?.length;
  const numberOfGroups = menu?.subMenuGroups?.length || 0;
  const gridCols = Math.min(numberOfGroups, 6);

  return (
    <motion.li
      className="group/link relative"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      {menu.href ? (
        menu.href.startsWith('http') ? (
          <a 
            href={menu.href} 
            className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {menu.name}
            {/* <ExternalLink size={12} className="ml-1" /> */}
          </a>
        ) : (
          <Link 
            to={menu.href} 
            className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
          >
            {menu.name}
          </Link>
        )
      ) : (
        <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
          {menu.name}
          {hasSubMenu && (
            <ChevronDown size={14} className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
          )}
        </span>
      )}
      
      {hasSubMenu && (
        <motion.div
          className="sub-menu absolute bg-white rounded-lg p-2.5 shadow-lg"
          style={{
            maxWidth: "90vw",
            width: "auto",
            marginTop: "-30px",
          }}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: `repeat(${gridCols}, minmax(180px, 1fr))`,
            }}
          >
            {menu.subMenuGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-1.5">
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  {group.heading}
                </h3>
                <hr></hr>
                <div className="space-y-0.5">
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group hover:bg-gray-50 rounded-md transition-all duration-150 cursor-pointer"
                    >
                      {renderMenuItem(item)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}