
'Set Data
Set dt = DataTable.GlobalSheet

'Set Device Details
Set oDevice=Device("Class Name:=Device","ostype:=" & dt("osType"),"id:=" & dt("deviceId"))

'Set App Details
Set oApp=oDevice.App("Class Name:=App","identifier:=" & dt("appID"))

oApp.Launch Install, Restart

'Set Device Context
AIUtil.SetContext Browser("creationtime:=1")
AIUtil.SetContext oDevice

'Perform Test
AIUtil.FindTextBlock("TABLETS").Click
If dt("osType") = "iOS" Then
	AIUtil.FindTextBlock("HP ElitePad 1000 62 Tablet").Click
	else
	AIUtil.FindTextBlock("HP ELITEPAD 1000").Click
End If
AIUtil.FindTextBlock("ADD TO CART").Click
If dt("osType") = "iOS" Then
	AIUtil("button", "Ok").Click
End If
AIUtil.FindTextBlock("USER NAME").Click
AIUtil("input", "USER NAME").Type "admin"
AIUtil.FindTextBlock("PASSWORD").Click
AIUtil("input", "PASSWORD").Type "adm1n"
AIUtil.FindTextBlock("LOGIN", micFromBottom, 1).Click

'AIUtil.FindText("CHECKOUT").Click


'Uninstall App
'oApp.Uninstall




'AIUtil.SetContext Device("micclass:=Device")
'AIUtil.FindTextBlock("TAB LETS").Click
'AIUtil.FindTextBlock("HP ElitePad 1000 62 Tablet").Click
'AIUtil.FindTextBlock("ADD TO CART").CheckExists True
'AIUtil.FindTextBlock("ADD TO CART").Click
'AIUtil.FindTextBlock("Ok").Click
'AIUtil("input", "USER NAME").Type "admin"



