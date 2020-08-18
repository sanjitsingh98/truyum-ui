function display()                                    
{ 
    var name = document.getElementById("name").value; 
	var number = document.getElementById("num").value;
	var date = document.getElementById("date").value; 

    if (name == "")                                  
    { 
        window.alert("Please enter your Name"); 
        return false; 
    } 
    if(name.length<2 || name.length>65)
	{
	    window.alert("name length is not correct");
	    return false;
    }
	if (number == "")                                  
    { 
        window.alert("Please enter Price."); 
        return false; 
    } 

	if (date == "")                                  
    { 
        window.alert("Please enter date.");  
        return false; 
    } 
	else
	{
	window.alert("Editing Done.");
	return true;
	}
}