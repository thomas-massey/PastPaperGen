const StatusBadge = (passed_status: string) => {
    // Convert to uppercase
    const status = passed_status?.status?.toUpperCase()
    /* If status is PENDING, blue */
    /* If status is APPROVED, green */
    /* If status is REJECTED, red */
    
    if (status === "PENDING") {
        return (
            <div className="bg-blue-500 text-white rounded-md p-1">
                <span className="text-xs font-bold">
                    {status}
                </span>
            </div>
        )
    } else if (status === "APPROVED") {
        return (
            <div className="bg-green-500 text-white rounded-md p-1">
                <span className="text-xs font-bold">
                    {status}
                </span>
            </div>
        )
    } else if (status === "REJECTED") {
        return (
            <div className="bg-red-500 text-white rounded-md p-1">
                <span className="text-xs font-bold">
                    {status}
                </span>
            </div>
        )
    }
    return <></>
}

export default StatusBadge;