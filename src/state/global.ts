import {PaletteType} from "@material-ui/core"
import {atom} from "recoil"

export var currentPage = atom({
	key: "currentPage",
	default: ""
})

export var isDrawerOpenAtom = atom<boolean>({
	key: "isDrawerOpenAtom",
	default: false
})

export var themeAtom = atom<PaletteType>({
	key: "themeAtom",
	default: "light"
})
