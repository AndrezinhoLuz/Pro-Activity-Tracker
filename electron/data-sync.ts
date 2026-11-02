import {BrowserWindow,ipcMain} from 'electron';

ipcMain.on('data:sync',(event,data:string)=>{
  for(const window of BrowserWindow.getAllWindows()){
    if(window.webContents!==event.sender)window.webContents.send('data:reload',data);
  }
});
