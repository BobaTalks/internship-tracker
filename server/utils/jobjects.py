def create_jobect(query_result):
    result_obj = {}
    result_dict = query_result._asdict()
    result_obj["id"] = result_dict["Job"].id
    result_obj["title"] = result_dict["Job"].title
    result_obj["location"] = {
        "city": result_dict["Location"].city,
        "state": result_dict["Location"].state,
        "country": result_dict["Location"].country,
    }
    return result_obj
