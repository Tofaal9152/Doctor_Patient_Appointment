import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        open_notification: false,
        clicked_Setting: false,
        Small_device_Chat_Peopple: false,
        darkMode: false,
        Open_doctor_sidebar:false
    },
    reducers: {
        
        setopen_notification: (state) => {
            state.clicked_Setting = false;
            state.Small_device_Chat_Peopple = false;
            state.open_notification = !state.open_notification
        },
        setclicked_Setting: (state) => {
            state.open_notification = false;
            state.Small_device_Chat_Peopple = false;
            state.clicked_Setting = !state.clicked_Setting
        },
        setSmallDeviceChatPeople: (state) => {
            state.clicked_Setting = false;
            state.open_notification = false;
            state.Small_device_Chat_Peopple = !state.Small_device_Chat_Peopple
        },

        setDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        setOpen_doctor_sidebar: (state) => {
            state.Open_doctor_sidebar = !state.Open_doctor_sidebar;
           
        }
        
    },
})

// Action creators are generated for each case reducer function
export const { setopen_notification, setclicked_Setting, setSmallDeviceChatPeople, setDarkMode, setOpen_doctor_sidebar } = counterSlice.actions

export default counterSlice.reducer