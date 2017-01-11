﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using jmWebApp.data;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace jmWebApp.Controllers.it
{
    [Route("api/it/[controller]")] //http://localhost:5001/api/it/eq_vendors
    public class eq_vendorsController : Controller
    {
        public jContext _con;

        public eq_vendorsController(jContext _con)
        {
            this._con = _con;
        }

        [HttpGet]  
        public IEnumerable<equipment_vendor> Get()
        {
            return _con.equipment_vendors.ToList();
        }

        // GET api/it/eq_vendors/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/it/eq_vendors
        [HttpPost]
        public IEnumerable<equipment_vendor> Post([FromBody]equipment_vendor vendor)
        {
            //_con.equipment_vendors.Add(vendor);
            if (vendor.Id == 0) { _con.equipment_vendors.Add(vendor); } else { _con.equipment_vendors.Update(vendor); }
            _con.SaveChanges();
            return _con.equipment_vendors.Where(p => p.Id == vendor.Id).ToList();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
