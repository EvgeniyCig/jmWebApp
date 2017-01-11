using System.ComponentModel.DataAnnotations;

namespace jmWebApp.data {

       public class equipment_vendor {
            [Key]
            public int Id { get; set; }
            public string descr { get; set; }
        } 

}