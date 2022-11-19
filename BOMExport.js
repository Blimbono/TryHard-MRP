//These are the various export methods for BOMData.
//Can probably be moved into a different class at some point.

function exportIndentedBOM() {
    /*
    0 Enter item to create BOM from the find itemID 
    5 Check if the searchID has children, if so
        10 {Make this a function?} Search and return all rows from tblBOMData where parentID = searchID
    20 Create temp table with results (temp item search return array)
    30 Append temp item search return array to temp indentedBOM array at indexes searchIndex + n where n = 1... last indx in temp item search return array
    40 Assign this data a level = searchLVL + 1
    50 Loop over items where searchLVL+1 = row level.
    60 Loop again until all items of searchLVL + n return FALSE on a hasChildren check
    70 Dump out the tempIndentedBOM array
    80 Join item data to the dumped array.

    Other Notes:
    This could be optimized for incidents where multiple calls to the same item occur.

    The value of hasChildren could be stored in some indexing table somewhere to speed it up and make less searches, but this index would have to be well-maintained and checked for validity pretty regularly.

    This could easily be turned into a FOR loop to only return the requested amount of levels
    */
}