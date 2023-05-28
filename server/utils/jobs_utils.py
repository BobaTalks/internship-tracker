def create_job_object(query_result):
    result_object = {}
    result_dict = query_result._asdict()
    result_object["id"] = result_dict["Job"].id
    result_object["title"] = result_dict["Job"].title
    result_object["location"] = {
        "city": result_dict["Location"].city,
        "state": result_dict["Location"].state,
        "country": result_dict["Location"].country,
    }
    return result_object
