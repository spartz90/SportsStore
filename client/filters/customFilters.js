angular.module("customFilters", []).filter("unique", function(){
  return function(data, propertyName){
     // console.log(data); -> jsonData
    // console.log(propertyName); -> category
    if(angular.isArray(data) && angular.isString(propertyName)){
      var results = [];
      var keys = {};
      for(var i=0; i<data.length; i++){
        var val = data[i][propertyName];
        // val = category name
        if(angular.isUndefined(keys[val])){
          //category의 중복을 제거
          keys[val] = true;
          results.push(val);
        }
      }
      return results;
    } else{
      return data;
    }
  }
})
.filter("range", function($filter){
  return function(data, page, size){
    if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
      var start_index = (page - 1) * size;
      if(data.length < start_index){
        return [];
      }else{
        //limitTo 는 Angular 내장필터 (배열에서 지정한 갯수만큼 항목을 반환)
        return $filter("limitTo")(data.splice(start_index), size);
      }
    }else{
      return data;
    }
  }
}).filter("pageCount", function(){
  return function(data, size){
    if(angular.isArray(data)){
      var result = [];
      for(var i=0; i < Math.ceil(data.length / size); i++){
        result.push(i);
      }
      return result;
    }else{
      return data;
    }
  }
});
