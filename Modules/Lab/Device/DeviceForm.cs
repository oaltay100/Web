using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Device")]
    [BasedOnRow(typeof(DeviceRow), CheckNames = true)]
    public class DeviceForm
    {
        public Int32 LaboratoryId { get; set; }
        public Int32 Type { get; set; }
        public String Name { get; set; }
        public String Ip { get; set; }
        public String Host { get; set; }
        public String Port { get; set; }
        public Int32 Boudrate { get; set; }
        public Int32 Databits { get; set; }
        public Int32 Stopbits { get; set; }
        public Int32 Parity { get; set; }
        public Int32 Handshake { get; set; }
        public Boolean Dtr { get; set; }
        public Boolean Rts { get; set; }
    }
}