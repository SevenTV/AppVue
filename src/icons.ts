import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck as farCircleCheck, faObjectUngroup } from "@fortawesome/free-regular-svg-icons";
import {
	faChrome as fabChrome,
	faFirefox as fabFirefox,
	faEdge as fabEdge,
	faOpera as fabOpera,
	faTwitter as fabTwitter,
	faGithub as fabGithub,
	faTwitch as fabTwitch,
	faYoutube as fabYoutube,
	faDiscord as fabDiscord,
	faCcPaypal as fabPaypal,
} from "@fortawesome/free-brands-svg-icons";

library.add(
	fabChrome,
	fabFirefox,
	fabEdge,
	fabOpera,
	fabTwitter,
	fabGithub,
	fabPaypal,
	fabTwitch,
	fabYoutube,
	fabDiscord,
	farCircleCheck,
	faObjectUngroup,
);

// pro icons loaded optionally
const proIcons = {
	faCakeSlice: null,
	faSquareQuestion: null,
	faTimer: null,
	faPenField: null,
	faSunBright: null,
	faHexagonPlus: null,
	faChevronsDown: null,
	faChevronsRight: null,
	faSeal: null,
	faMoon: null,
	faEnvelope: null,
	faCircle: null,
	faBars: null,
	faPlus: null,
	faMinus: null,
	faStar: null,
	faCheck: null,
	faSlash: null,
	faLock: null,
	faUnlock: null,
	faPen: null,
	faFlag: null,
	faSearch: null,
	faChevronRight: null,
	faChevronLeft: null,
	faGavel: null,
	faCopy: null,
	faExclamationTriangle: null,
	faExclamation: null,
	faExternalLinkAlt: null,
	faCalendarAlt: null,
	faPalette: null,
	faCube: null,
	faGear: null,
	faUsersCog: null,
	faEllipsisH: null,
	faEllipsisV: null,
	faColumns: null,
	faTrash: null,
	faTimes: null,
	faReply: null,
	faArrowLeft: null,
	faObjectGroup: null,
	faLayerGroup: null,
	faEye: null,
	faEyeSlash: null,
	faTag: null,
	faLanguage: null,
	faChevronDown: null,
	faUser: null,
	faUserPlus: null,
	faUserMinus: null,
	faSave: null,
	faDownload: null,
	faRotateRight: null,
	faFire: null,
	faHashtag: null,
	faBrush: null,
	faTicket: null,
	faSmile: null,
	faCreditCard: null,
	faClock: null,
	faTrophy: null,
	faGift: null,
	faUserPen: null,
	faListCheck: null,
	faCodeBranch: null,
	faWrench: null,
	faUndo: null,
	faFilter: null,
	faSquare: null,
	faMegaphone: null,
	// halloween
	faPumpkin: null,
	faBat: null,
};

export const loadIcons = async () => {
	// comment out the import below if you don't have fontawesome pro
	await import("@fortawesome/sharp-solid-svg-icons").then((icons) => {
		Object.keys({ ...proIcons }).forEach((key) => {
			library.add(icons[key]);
		});
	});
};
